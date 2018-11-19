import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';

import { MainWrapper } from "../UI";
import Topbar from "../../marketplace/topBar/MarketPlaceHeaderComponent";
import MyAlgorithmsCardComponent from "./MyAlgorithmsCardComponent";

const myAlgorithms = [
  {
    id: 1,
    title: "IMDB Sentiment Analyzer",
    status: "Continue Progress",
    price: "2",
    earnings: "0",
    description: "blah"
  },
  {
    id: 2,
    title: "Landmark Identifier",
    status: "Under Review",
    price: "1",
    earnings: "0",
    description: "blah"
  },
  {
    id: 3,
    title: "Fashion Items Scanner",
    status: "Approved",
    price: "2",
    earnings: "4227",
    description: "blah"
  },
  {
    id: 4,
    title: "Car Model Recognition",
    status: "Rejected",
    price: "1",
    earnings: "0",
    description: "blah"
  },
  {
    id: 5,
    title: "Tools Identifier",
    status: "Updates Under Review",
    price: "1",
    earnings: "1027",
    description: "blah"
  }
];

const MyAlgorithmsMain = props => {
  return (
    <MainWrapper>
      <Topbar algorithmCount={myAlgorithms.length} />
      {myAlgorithms.map(algo => {
        return (
          <MyAlgorithmsCardComponent
            key={algo.id}
            title={algo.title}
            status={algo.status}
            price={algo.price}
            earnings={algo.earnings}
            description={algo.description}
          />
        );
      })}
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

export default MyAlgorithmsMainComponent;
