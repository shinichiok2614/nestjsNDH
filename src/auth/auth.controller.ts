import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    // authService.doSomething();
  }
  @Post('/register')
  register() {
    // return 'register a new user';
    // return {
    //   x: 1,
    //   y: 2,
    //   name: 'Hoang',
    return this.authService.register();
  }
  @Post('login')
  login() {
    console.log('login');
    // return 'login to your account';
    return this.authService.login();
  }
}
//17:55
