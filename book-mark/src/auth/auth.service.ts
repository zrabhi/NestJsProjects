import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
@Injectable()
export class AuthService {
    constructor(private readonly prisma : PrismaService)
    {}
   signin()
   {
        return "I HAVE SIGN IN";
   }
   async signup(body: AuthDto)
   {
        // hashing the password 
        const hash =  await argon.hash(body.password)
        const NewUser = {
            data: {
                email: body.email, 
                hash,
            }
        } 
        // save the new user to db 
        const user  = await this.prisma.user.create(NewUser);


        return user;
   }

}
