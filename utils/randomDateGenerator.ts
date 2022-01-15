export const randomDateGenerator = (startDate: string, endDate: string) => {
  const randomValueBetween = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  let startDateTime = new Date(startDate).getTime();
  let endDateTime = new Date(endDate).getTime();
  if (startDateTime > endDateTime) {
    return new Date(
      randomValueBetween(endDateTime, startDateTime)
    ).toLocaleDateString();
  } else {
    return new Date(
      randomValueBetween(startDateTime, endDateTime)
    ).toLocaleDateString();
  }
};
