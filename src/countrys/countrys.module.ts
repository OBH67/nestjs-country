import { Module } from '@nestjs/common';
import { CountrysController } from './countrys.controller';
import { CountrysService } from './countrys.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from './countrys.model';

@Module({
  imports: [SequelizeModule.forFeature([Country])],
  controllers: [CountrysController],
  providers: [CountrysService],
})
export class CountrysModule {}
