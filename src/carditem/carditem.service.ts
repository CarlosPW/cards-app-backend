import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CardItemDto } from './dto';

@Injectable()
export class CarditemService {
  constructor(private prisma: PrismaService) {}

  async getCardItem(id: number) {}

  //
  async createCardItem(userId: number, cardId: number, dto: CardItemDto) {
    const findCard = await this.prisma.cards.findFirst({
      where: {
        userId,
        id: cardId,
      },
    });

    if (!findCard) return { message: 'Hubo un problema.' };

    const findCardItem = await this.prisma.cardItem.findFirst({
      where: {
        cardId,
        title: dto.title,
      },
    });

    if (findCardItem) return { message: 'Esta tarjeta ya existe.' };

    const newCardItem = await this.prisma.cardItem.create({
      data: {
        userId,
        cardId,
        ...dto,
      },
    });

    return newCardItem;
  }

  async deleteCardItem(userId: number, cardItemId: number) {
    const findCardItem = await this.prisma.cards.findFirst({
      where: {
        userId,
        id: cardItemId,
      },
    });

    if (!findCardItem) return { message: 'Hubo un problema.' };

    const cardDeleted = await this.prisma.cardItem.deleteMany({
      where: {
        id: cardItemId,
      },
    });

    return cardDeleted;
  }
}
