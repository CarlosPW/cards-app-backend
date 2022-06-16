import { IsNotEmpty } from 'class-validator';

export class CardDto {
  @IsNotEmpty()
  title: string;
}
