import { Injectable } from '@nestjs/common';
// import { User } from '@prisma/client';
// import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async updateProfile(user: any, dto: UserDto) {
    const userUpdated = await this.prisma.user.update({
      where: { id: user.id },
      data: dto,
    });

    delete userUpdated.hash;
    return userUpdated;
  }
}
