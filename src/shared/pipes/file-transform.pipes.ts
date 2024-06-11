import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { HouseData } from '../types';

@Injectable()
export class FileTransformPipe
  implements PipeTransform<Express.Multer.File, HouseData[]>
{
  transform(value: Express.Multer.File, metadata: ArgumentMetadata) {
    const csvString = Buffer.from(value.buffer).toString();
    const rows = csvString.split('\n');
    const result: HouseData[] = [];
    for (let i = 1; i < rows.length; i++) {
      if (!rows[i]) {
        continue;
      }
      const row = rows[i];
      const [id, address] = row.split(',');
      result.push({ id: parseInt(id), address });
    }

    return result;
  }
}
