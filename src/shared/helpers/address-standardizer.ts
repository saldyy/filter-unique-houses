const addressAbbreviation: { [key: string]: string } = Object.freeze({
  STREET: 'ST',
  AVENUE: 'AVE',
  BOULEVARD: 'BLVD',
  ROAD: 'RD',
  DRIVE: 'DR',
  LANE: 'LN',
  COURT: 'CT',
  CIRCLE: 'CIR',
  PLACE: 'PL',
  TERRACE: 'TER',
  PARKWAY: 'PKWY',
  SQUARE: 'SQ',
  HIGHWAY: 'HWY',
  WAY: 'WAY',
  ALLEY: 'ALY',
  PLAZA: 'PLZ',
  LOOP: 'LOOP',
  TRAIL: 'TRL',
  VIEW: 'VW',
  CROSSING: 'XING',
});

export default class AddressStandardizer {
  /**
   * This function standardizes the address to UDPS Publication 28
   */
  static standardize(address: string): string {
    let standardAddress = address.toUpperCase().replace(/[,.]/g, '');

    Object.keys(addressAbbreviation).forEach((abbreviation) => {
      standardAddress = standardAddress.replace(
        new RegExp(abbreviation, 'i'),
        addressAbbreviation[abbreviation],
      );
    });

    return standardAddress;
  }
}
