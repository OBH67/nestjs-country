import { Controller, Body, Get, Post, Delete, Param } from '@nestjs/common';
import { CreateCountryDTO } from './dto/create-country.dto';
import { Country } from './countrys.model';
import { CountrysService } from './countrys.service';

@Controller('country')
export class CountrysController {
  constructor(private readonly countrysService: CountrysService) {}

  @Post()
  create(@Body() createCountryDTO: CreateCountryDTO): Promise<Country> {
    return this.countrysService.create(createCountryDTO);
  }

  @Get()
  findAll(): Promise<Country[]> {
    return this.countrysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Country> {
    return this.countrysService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.countrysService.remove(id);
  }
}
