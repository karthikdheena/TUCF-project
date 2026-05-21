import { Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { SubscriptionGuard } from '../common/guard/subscription.guard';

@Controller('ats')
export class AtsController {
  @UseGuards(JwtAuthGuard, SubscriptionGuard)
  @Post('analyze')
  analyze() {
    return {
      message: 'ATS analysis completed',
    };
  }
}
