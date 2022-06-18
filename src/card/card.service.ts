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
      include: {
        items: true,
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

  // TODO: PROBAR SI FUNCIONA
  async updateCard(userId: number, cardId: string, dto: CardDto) {
    const cardUpdated = await this.prisma.cards.updateMany({
      where: {
        userId,
        id: Number(cardId),
      },
      data: {
        ...dto,
      },
    });

    return cardUpdated;
  }

  async deleteCard(userId: number, cardId: string) {
    const cardDeleted = await this.prisma.cards.deleteMany({
      where: {
        userId,
        id: Number(cardId),
      },
    });

    return cardDeleted;
  }
}
