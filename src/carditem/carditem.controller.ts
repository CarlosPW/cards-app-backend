import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { getUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CarditemService } from './carditem.service';
import { CardItemDto } from './dto';

@UseGuards(JwtGuard)
@Controller('carditem')
export class CarditemController {
  constructor(private cardItemService: CarditemService) {}

  @Get()
  getCardItem() {
    return this.cardItemService.getCardItem(1);
  }

  @Post(':id')
  createCardItem(
    @getUser('id') userId: number,
    @Param('id') cardId: string,
    @Body() dto: CardItemDto,
  ) {
    return this.cardItemService.createCardItem(userId, Number(cardId), dto);
  }

  @Delete(':id')
  deleteCardItem(
    @getUser('id') userId: number,
    @Param('id') cardItemId: string,
  ) {
    return this.cardItemService.deleteCardItem(userId, Number(cardItemId));
  }
}
