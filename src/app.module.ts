import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CountrysModule } from './countrys/countrys.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'db',
      autoLoadModels: true,
      synchronize: true,
    }),
    CountrysModule,
  ],
})

export class AppModule {}
