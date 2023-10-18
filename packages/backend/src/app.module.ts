import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { PostService } from './post/post.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismaModule, PostModule],
  controllers: [AppController],
  providers: [AppService, PostService, PrismaService],
})
export class AppModule {}
