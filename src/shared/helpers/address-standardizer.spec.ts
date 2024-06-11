import AddressStandardizer from './address-standardizer';

describe('AddressStandardizer', () => {
  it.each([
    ['123 Main St.', '123 MAIN ST'],
    ['456 Main Street', '456 MAIN ST'],
    ['Main Road', 'MAIN RD'],
    ['3 Main StReEt', '3 MAIN ST'],
    ['6 main street west.', '6 MAIN ST WEST'],
  ])(
    'standardizes common street suffixes and removes punctuation',
    (input, expected) => {
      expect(AddressStandardizer.standardize(input)).toBe(expected);
    },
  );
});
