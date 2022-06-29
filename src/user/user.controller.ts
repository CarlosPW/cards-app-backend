import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
// import { User } from '@prisma/client';

import { UserService } from './user.service';
import { getUser } from 'src/auth/decorator';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { UserDto } from './dto';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  getProfile(@getUser() user: User) {
    return user;
  }

  @Put('profile')
  updateProfile(@getUser() user: User, @Body() dto: UserDto) {
    return this.userService.updateProfile(user, dto);
  }
}
