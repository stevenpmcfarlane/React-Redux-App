import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const CovidData = (props) => {
  const { data, isFetching, error } = props;

  const handleClick = () => {
    props.getData();
  };

  useEffect(() => {
    props.getData();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Please hold; fetching data</h2>;
  }

  return (
    <>
      <h2>Kanye says: {data}</h2>
      <button onClick={handleClick}>Get new quote</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(CovidData);
