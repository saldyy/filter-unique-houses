import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CsvFileTransformPipe } from 'src/shared/pipes/csv-transform.pipes';
import { FileValidationPipe } from 'src/shared/pipes/file-validation.pipes';
import { HouseData } from 'src/shared/types';
import { HousesService } from './houses.service';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Post('/filter-uniques')
  @UseInterceptors(FileInterceptor('file', {}))
  @UsePipes(new FileValidationPipe())
  async filterUniquesHouses(
    @UploadedFile(new CsvFileTransformPipe()) houseData: HouseData[],
  ) {
    return this.housesService.filterAddress(houseData);
  }
}
