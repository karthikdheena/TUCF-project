import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SubscriptionController } from '../subscription/subscription.controller';
import { SubscriptionService } from '../subscription/subscription.service';

@Module({
  controllers: [SubscriptionController],
  providers: [SubscriptionService, PrismaService],
})
export class SubscriptionModule {}
