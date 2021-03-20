export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018 day/month/year
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  // Date constructor takes in (year, month, day). Month is zero
  // indexed so Jan = 0, Feb = 1 etc.
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
