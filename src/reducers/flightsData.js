const initialState = {
  flightList: []
}

export const flightsData = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIGHT_LIST':
      return { flightList:  action.payload };
    default: return state;
  }
};