import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async updateProfile(
    user: Prisma.UserWhereUniqueInput,
    dto: Prisma.UserUpdateInput,
  ) {
    const userUpdated = await this.prisma.user.update({
      where: { id: user.id },
      data: dto,
    });

    delete userUpdated.hash;
    return userUpdated;
  }
}
