import { connect } from "react-redux";

import CreateAlgorithmComponent from "./CreateAlgorithmComponent";
import createAlgorithmActions from "./duck/actions";

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

const CreateAlgorithmContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAlgorithmComponent);

export default CreateAlgorithmContainer;
