import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from "./../actions";

const initialState = {
  country: "",
  countryCode: "",
  lat: "",
  lon: "",
  cases: 0,
  status: "",
  date: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
  }
};
