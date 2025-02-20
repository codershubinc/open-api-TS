import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import modules from './api/v0.1/index.module';

@Module({
  imports: [
    ...modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
