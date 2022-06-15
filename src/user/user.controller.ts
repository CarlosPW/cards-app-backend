import { Controller, Get, Put, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { getUser } from 'src/auth/decorator';
import { JwtGuard } from '../auth/guard/jwt.guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('profile')
  getProfile(@getUser() user: User) {
    return user;
  }

  @Put('profile')
  updateProfile(@getUser() user: User) {
    return user.id;
  }
}
