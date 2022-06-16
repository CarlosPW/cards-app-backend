import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CardDto } from './dto';

@Injectable()
export class CardService {
  constructor(private prisma: PrismaService) {}

  async getCards(userId: number) {
    const cards = await this.prisma.cards.findMany({
      where: {
        userId,
      },
    });

    if (!cards) return [];

    return cards;
  }

  async createCard(userId: number, dto: CardDto) {
    const findCard = await this.prisma.cards.findFirst({
      where: {
        userId,
        title: dto.title,
      },
    });

    if (findCard) return { message: 'Esta tarjeta ya existe.' };

    const newCard = await this.prisma.cards.create({
      data: {
        userId,
        ...dto,
      },
    });

    return newCard;
  }
}
