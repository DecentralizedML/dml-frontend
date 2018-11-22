import { connect } from "react-redux";

import CreateAlgorithmComponent from "./CreateAlgorithmComponent";
import createAlgorithmActions from "./duck/actions";

const mapStateToProps = state => {
  const { currentStep } = state.createAlgorithm;
  return {
    currentStep
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveNewAlgorithmData: data => {
      dispatch(createAlgorithmActions.saveNewAlgorithmData(data));
    }
  };
};

const CreateAlgorithmContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAlgorithmComponent);

export default CreateAlgorithmContainer;
