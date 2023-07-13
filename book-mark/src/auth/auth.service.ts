import { ForbiddenException, Injectable } from '@nestjs/common';
// import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { error } from 'console';
import { threadId } from 'worker_threads';
import { JwtService } from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config'
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService
  ) {}
  async signup(body: AuthDto) {
    // hashing the password
    const hash = await argon.hash(body.password);
    const NewUser = {
      data: {
        email: body.email,
        hash,
      },

    };
    try {
      const user = await this.prisma.user.create(NewUser);
      return user;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002')
          // this err stands for trying to duplicate a unique field in Prisma
          throw new ForbiddenException('Credentials Taken');
      }
      throw err;
    }
  }
  async signin(body: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (!user) throw new ForbiddenException('Credentials Not Found');

    const MATCHES = await argon.verify(user.hash, body.password);
    if (!MATCHES) throw new ForbiddenException('Credentials Not Correct');
    return this.signToken(user.id, user.email);
  }
  async signToken(UserId: number, email:string)
  {
      const playload = {
        sub: UserId,
        email,
      };
      const token = await this.jwt.signAsync(playload, {
          expiresIn: '15m',
          secret: this.config.get('JWT_SECRET'),
      })
      return {
        access_token: token,
      }
  }
}
