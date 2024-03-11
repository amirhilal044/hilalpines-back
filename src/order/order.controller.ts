import { Body, Controller, Post } from '@nestjs/common';
import { OrderDto } from 'src/dto/order.dto';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Post()
  async addOrder(@Body() orderDto: OrderDto): Promise<Order[]> {
    console.log(orderDto);
    return await this.orderService.addOrder(orderDto);
  }
}
