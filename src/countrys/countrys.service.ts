import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCountryDTO } from './dto/create-country.dto';
import { Country } from './countrys.model';
import { userInfo } from 'os';

@Injectable()
export class CountrysService {
  constructor(@InjectModel(Country) private readonly countryModel: typeof Country) {}

  create(createCountryDTO: CreateCountryDTO): Promise<Country> {
    const country = new Country();
    country.countryName = createCountryDTO.countryName;
    return country.save();
  }

  async findAll(): Promise<Country[]> {
    return this.countryModel.findAll();
  }

  findOne(id: string): Promise<Country> {
    return this.countryModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const country = await this.findOne(id);
    await country.destroy();
  }
}
