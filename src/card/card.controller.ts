import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { getUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CardService } from './card.service';
import { CardDto } from './dto';

@UseGuards(JwtGuard)
@Controller('cards')
export class CardController {
  constructor(private cardService: CardService) {}

  @Get()
  getCards(@getUser('id') userId: number) {
    return this.cardService.getCards(userId);
  }

  @Post('')
  createCard(@getUser('id') userId: number, @Body() dto: CardDto) {
    return this.cardService.createCard(userId, dto);
  }
}
