import { connect } from "react-redux";

import CreateAlgorithmComponent from "./CreateAlgorithmComponent";

const mapStateToProps = state => {
  return {
    text: state.text,
    isAuthenticated: state.account.isAuthenticated
  };
};

const CreateAlgorithmContainer = connect(mapStateToProps)(
  CreateAlgorithmComponent
);

export default CreateAlgorithmContainer;
