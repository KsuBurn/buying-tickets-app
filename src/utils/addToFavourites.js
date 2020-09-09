export const addToFavourites = (flightData, flightItemId) => {

  return flightData.map(item => {
    const newFlightItem = { ...item };

    if (item.id === flightItemId) {
      newFlightItem.isFavourite = !item.isFavourite;
    }

    return newFlightItem;
  });
};