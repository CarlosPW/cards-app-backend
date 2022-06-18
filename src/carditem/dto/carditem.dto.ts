import { IsNotEmpty } from 'class-validator';

export class CardItemDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
