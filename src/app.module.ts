import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CardModule } from './card/card.module';
import { PrismaModule } from './prisma/prisma.module';
import { CarditemController } from './carditem/carditem.controller';
import { CarditemService } from './carditem/carditem.service';
import { CarditemModule } from './carditem/carditem.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    CardModule,
    PrismaModule,
    CarditemModule,
  ],
})
export class AppModule {}
