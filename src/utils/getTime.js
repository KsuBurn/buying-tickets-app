export const getTime = (milliseconds) => {
  return `${new Date(milliseconds).getHours()}:${new Date(milliseconds).getMinutes()}`;
};