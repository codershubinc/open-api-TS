import { Injectable } from '@nestjs/common';
import homePageApi from './api/v0.1/endpoints';

@Injectable()
export class AppService {
  getHello(): {}[] {
    return homePageApi;
  }
}
