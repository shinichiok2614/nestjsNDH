import { Injectable } from '@nestjs/common';
@Injectable({})
export class AuthService {
  // doSomething() {
  //   console.log('AuthService.doSomething');
  // }
  register() {
    return {
      message: 'Register an user',
    };
  }
  login() {
    return {
      message: 'this is login',
    };
  }
}
