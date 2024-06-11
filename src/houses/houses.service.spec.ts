import { Test, TestingModule } from '@nestjs/testing';
import { HousesService } from './houses.service';
import { HouseData } from 'src/shared/types';
import AddressStandardizer from '../shared/helpers/address-standardizer';

describe('HousesService', () => {
  let service: HousesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HousesService],
    }).compile();

    service = module.get<HousesService>(HousesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should filter and count unique houses based on standardized addresses and ids', () => {
    const mockHouses: HouseData[] = [
      { id: 1, address: '123 Main St.' },
      { id: 2, address: '123 Main Street' },
      { id: 3, address: '456 Elm St.' },
      { id: 4, address: '456 Elm Street' },
      { id: 2, address: '123 Sub Main Street' },
      { id: 5, address: '789 Maple Ave.' },
      { id: 3, address: '123 Sub Main Street' },
      { id: 6, address: '123 New Avenue' },
    ];

    const result = service.filterAddress(mockHouses);
    expect(result).toEqual({ amountOfUniqueHouses: 4 });
  });

  it('should count only one houses where all house are the same', () => {
    const mockHouses: HouseData[] = [
      { id: 1, address: '123 Main St.' },
      { id: 2, address: '123 Main Street' },
      { id: 3, address: '123 Main Street' },
      { id: 4, address: '123 Main Street' },
      { id: 5, address: '123 Main Street' },
    ];

    const result = service.filterAddress(mockHouses);
    expect(result).toEqual({ amountOfUniqueHouses: 1 });
  });

  it('should count all houses where all house are unique', () => {
    const mockHouses: HouseData[] = [
      { id: 1, address: '123 Main St.' },
      { id: 2, address: '123 Sub Main Street' },
      { id: 3, address: '123 West Street' },
      { id: 4, address: '123 East Street' },
      { id: 5, address: '123 North Street' },
    ];

    const result = service.filterAddress(mockHouses);
    expect(result).toEqual({ amountOfUniqueHouses: 5 });
  });
});
