import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { AdzunaService } from './adzuna.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [JobsController],
  providers: [JobsService, AdzunaService, PrismaService],
})
export class JobsModule {}
