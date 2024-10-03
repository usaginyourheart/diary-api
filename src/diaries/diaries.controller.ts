import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DiariesService } from './diaries.service';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';

@Controller('diaries')
export class DiariesController {
  constructor(private readonly diariesService: DiariesService) {}

  @Post()
  async create(@Body() createDiaryDto: CreateDiaryDto) {
    return await this.diariesService.create(createDiaryDto);
  }

  @Get()
  async findAll() {
    return await this.diariesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // Change number to string
    return await this.diariesService.findOne(id); // Remove '+' before id
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDiaryDto: UpdateDiaryDto,
  ) {
    // Change number to string
    return await this.diariesService.update(id, updateDiaryDto); // Remove '+' before id
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // Change number to string
    return await this.diariesService.remove(id); // Remove '+' before id
  }
}
