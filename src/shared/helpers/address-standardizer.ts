// Getting from references: https://pe.usps.com/text/pub28/28apc_002.htm
// This only take a partial part from the references
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
   * This function standardizes the address using UDPS Publication 28's Suffix Abbreviations
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
