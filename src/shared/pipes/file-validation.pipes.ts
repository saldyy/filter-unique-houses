import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class FileValidationPipe implements PipeTransform {
  transform(value: Express.Multer.File, metadata: ArgumentMetadata) {
    if (value.mimetype !== 'text/csv') {
      throw new BadRequestException('Invalid file type');
    }
    // TODO: adding file size validation

    return value;
  }
}
