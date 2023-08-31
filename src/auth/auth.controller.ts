import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    // authService.doSomething();
  }
  @Post('/register')
  // register(@Req() request: Request) {
  // register(@Body() body: AuthDTO) {
    // register(@Body('email') email: string, @Body('password') password: string) {
    register(@Body() authDTO: AuthDTO) {
    // return 'register a new user';
    // return {
    //   x: 1,
    //   y: 2,
    //   name: 'Hoang',
    // console.log(body);
    // console.log(`email=${email}`);
    // console.log(`password=${password}`);
    // console.log(`type=${typeof email}`);
    return this.authService.register(authDTO);
  }
  @Post('login')
  login(@Body() authDTO: AuthDTO) {
    console.log('login');
    // return 'login to your account';
    return this.authService.login(authDTO);
  }
}
