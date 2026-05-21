import { Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { SubscriptionGuard } from '../common/guard/subscription.guard';

@Controller('portfolio')
export class PortfolioController {
  @UseGuards(JwtAuthGuard, SubscriptionGuard)
  @Post('generate')
  generatePortfolio() {
    return {
      message: 'Portfolio generated successfully',
    };
  }
}
