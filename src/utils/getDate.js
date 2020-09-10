export const getDate = (milliseconds) => {
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const day = new Date(milliseconds).getDate();
  const month = monthArr[new Date(milliseconds).getMonth()];
  const year = new Date(milliseconds).getFullYear();

  return `${day} ${month}, ${year}`
};