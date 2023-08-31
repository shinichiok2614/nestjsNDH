import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDTO } from './dto';

@Injectable({})
export class AuthService {
  // doSomething() {
  //   console.log('AuthService.doSomething');
  // }
  constructor(private prismaService: PrismaService) {}
  async register(authDTO: AuthDTO) {
    try {
      const hashPassword = await argon.hash(authDTO.password);
      const user = await this.prismaService.user.create({
        data: {
          email: authDTO.email,
          hashedPassword: hashPassword,
          firstName: '',
          lastName: '',
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });
      return user;
    } catch (error) {
      if (error.code == 'P2002') {
        // throw new ForbiddenException(error.message);
        throw new ForbiddenException('User with this email already exists');
      }
      // return {
      //   error: error,
      // };
    }
  }
  async login(authDTO: AuthDTO) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: authDTO.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('user not found');
    }
    const passwordMatched = await argon.verify(
      user.hashedPassword,
      authDTO.password,
    );
    if (!passwordMatched) {
      throw new ForbiddenException('incorrect password');
    }
    // return {
    //   message: 'this is login',
    // };
    return user;
  }
}
