import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async addOrder(orderDto): Promise<Order[]> {
    const newOrder = this.orderRepository.create(orderDto);
    return await this.orderRepository.save(newOrder);
  }
}
