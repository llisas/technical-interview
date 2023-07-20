import  useDateUtils  from './useDateUtils';

describe('formatDate', () => {
const {formatDate} = useDateUtils();
  it('should format the date to Spanish locale', () => {
    const date = '2023-07-19';
    const expectedFormattedDate = '19/7/2023'; 
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe(expectedFormattedDate);
  });

});
