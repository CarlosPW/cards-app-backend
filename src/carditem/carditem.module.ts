import { Module } from '@nestjs/common';
import { CarditemController } from './carditem.controller';
import { CarditemService } from './carditem.service';

@Module({ controllers: [CarditemController], providers: [CarditemService] })
export class CarditemModule {}
