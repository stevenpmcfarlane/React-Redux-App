import axios from "axios";

export const FETCH_DATA_LOADING = "FETCH_DATA_LOADING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const getData = () => {
  //1. start load
  //2. do our call
  //3. success on a successful call
  //4. fail on a failed call
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_LOADING });

    axios
      .get(
        "https://api.covid19api.com/total/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
      )
      .then((res) => {
        console.log(res);
        //dispatch({type:FETCH_DATA_SUCCESS, payload:res.data.});
      })
      .catch((err) => {
        dispatch({ type: FETCH_DATA_FAIL, payload: err.Response.code });
      });
  };
};

export const fetchDataLoading = () => {
  return { type: FETCH_DATA_LOADING };
};

export const fetchDataSuccess = (quote) => {
  return { type: FETCH_DATA_SUCCESS, payload: quote };
};

export const fetchDataFail = (error) => {
  return { type: FETCH_DATA_FAIL, payload: error };
};
