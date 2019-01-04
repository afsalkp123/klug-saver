export const toddMMM = (date: any) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (!date) return '';

  const d = new Date(date);

  return `${d.getDate()} ${months[d.getMonth()]}`;
};

export const getArchiveFromState = ({ expenses }: any) => {
  return {
    expenses
  };
};