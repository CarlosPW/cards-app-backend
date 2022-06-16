import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
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

  @Post()
  createCard(@getUser('id') userId: number, @Body() dto: CardDto) {
    return this.cardService.createCard(userId, dto);
  }

  @Put(':id')
  updateCard(
    @getUser('id') userId: number,
    @Param('id') cardId: string,
    @Body() dto: CardDto,
  ) {
    return this.cardService.updateCard(userId, cardId, dto);
  }

  @Delete(':id')
  deleteCard(@getUser('id') userId: number, @Param('id') cardId: string) {
    return this.cardService.deleteCard(userId, cardId);
  }
}
