export const getDate = (milliseconds) => {
  const dayAndMonth = new Date(milliseconds).toLocaleDateString(
    'en-GB',
    {
      day: 'numeric',
      month: 'short'
    }
  );
  const year = new Date(milliseconds).getFullYear();

  return `${dayAndMonth}, ${year}`
};