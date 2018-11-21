import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import PropTypes from 'prop-types';

import { MainWrapper } from "../UI";
import Topbar from "../../marketplace/topBar/MarketPlaceHeaderComponent";
import MyAlgorithmsCardComponent from "./MyAlgorithmsCardComponent";
import MyAlgorithmsSelectedAlgorithmComponent from "../selectedAlgorithmComponent/MyAlgorithmsSelectedAlgorithmComponent";

const myAlgorithmsOrder = [1, 2, 3, 4, 5];
const myAlgorithmsMap = {
  1: {
    id: 1,
    title: "IMDB Sentiment Analyzer",
    status: "Continue Progress",
    price: "2",
    earnings: "0",
    description: "blah"
  },
  2: {
    id: 2,
    title: "Landmark Identifier",
    status: "Under Review",
    price: "1",
    earnings: "0",
    description: "blah"
  },
  3: {
    id: 3,
    title: "Fashion Items Scanner",
    status: "Approved",
    price: "2",
    earnings: "4227",
    description: "blah"
  },
  4: {
    id: 4,
    title: "Car Model Recognition",
    status: "Rejected",
    price: "1",
    earnings: "0",
    description: "blah"
  },
  5: {
    id: 5,
    title: "Tools Identifier",
    status: "Updates Under Review",
    price: "1",
    earnings: "1027",
    description: "blah"
  }
};

const MyAlgorithmsMain = props => {
  const selectedAlgorithm = myAlgorithmsMap[props.match.params.algoId];
  return (
    <MainWrapper>
      <Topbar algorithmCount={myAlgorithmsOrder.length} />
      {myAlgorithmsOrder.map(id => {
        const algorithm = myAlgorithmsMap[id];
        return (
          <MyAlgorithmsCardComponent
            key={algorithm.id}
            title={algorithm.title}
            status={algorithm.status}
            price={algorithm.price}
            earnings={algorithm.earnings}
            description={algorithm.description}
            onClick={() => props.history.push(`/algorithms/${algorithm.id}`)}
          />
        );
      })}
      {selectedAlgorithm && <MyAlgorithmsSelectedAlgorithmComponent />}
    </MainWrapper>
  );
};

MyAlgorithmsMain.propTypes = {};

const mapStateToProps = state => {
  return {
    text: state.text,
    isAuthenticated: state.account.isAuthenticated
  };
};

const MyAlgorithmsMainComponent = connect(mapStateToProps)(MyAlgorithmsMain);

export default withRouter(MyAlgorithmsMainComponent);
