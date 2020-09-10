export const getTime = (milliseconds) => {
  return new Date(milliseconds).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
};