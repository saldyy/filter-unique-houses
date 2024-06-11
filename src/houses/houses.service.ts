import { Injectable } from '@nestjs/common';
import { HouseData } from 'src/shared/types';
import AddressStandardizer from '../shared/helpers/address-standardizer';

@Injectable()
export class HousesService {
  filterAddress(payload: HouseData[]): { amountOfUniqueHouses: number } {
    const addressMapperWithHouseId = new Map<string, Set<number>>();
    const houseIds = new Set<number>();

    payload.forEach((house) => {
      const standardizedAddress = AddressStandardizer.standardize(
        house.address,
      );
      if (houseIds.has(house.id)) {
        return;
      }
      if (!addressMapperWithHouseId.has(standardizedAddress)) {
        addressMapperWithHouseId.set(standardizedAddress, new Set());
      }
      addressMapperWithHouseId.get(standardizedAddress).add(house.id);
      houseIds.add(house.id);
    });
    return { amountOfUniqueHouses: addressMapperWithHouseId.size };
  }
}
