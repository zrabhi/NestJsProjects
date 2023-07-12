import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: AuthDto) {
    return this.authService.signup(body);
  }

  @Post('signin')
  async signin() {
    return this.authService.signin();
  }
}
