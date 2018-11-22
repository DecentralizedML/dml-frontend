import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import PropTypes from 'prop-types';

import createAlgorithmActions from "../../create-algorithm/duck/actions";
import { MainWrapper } from "../UI";
import Topbar from "../../marketplace/topBar/MarketPlaceHeaderComponent";
import MyAlgorithmsCardComponent from "./MyAlgorithmsCardComponent";

import { latestStep } from "../../../utils/isSwitchable";

const myAlgorithmsOrder = [1, 2, 3, 4, 5];
const myAlgorithmsMap = {
  1: {
    id: 1,
    title: "IMDB Sentiment Analyzer",
    status: "Continue Progress",
    price: "2",
    earnings: "0",
    description: "blah",
    category: "Text Analysis",
    preProcessing: "200 words"
  },
  2: {
    id: 2,
    title: "Landmark Identifier",
    status: "Under Review",
    price: "1",
    earnings: "0",
    description: "blah",
    category: "Image Recognition",
    preProcessing: "500 x 500 pixels",
    mlModel: "Some model",
    postProcessingCode: "def greetings = 'Hello World'"
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
  const editAlgorithm = algorithm => {
    const whereToContinue = latestStep(algorithm);
    props.saveNewAlgorithmData({ ...algorithm, currentStep: whereToContinue });
    props.history.push(`/authenticated/algorithms/edit/${algorithm.id}`);
  };
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
            onClick={() => editAlgorithm(algorithm)}
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

const mapDispatchToProps = dispatch => {
  return {
    saveNewAlgorithmData: data => {
      dispatch(createAlgorithmActions.saveNewAlgorithmData(data));
    }
  };
};

const MyAlgorithmsMainComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAlgorithmsMain);

export default withRouter(MyAlgorithmsMainComponent);
