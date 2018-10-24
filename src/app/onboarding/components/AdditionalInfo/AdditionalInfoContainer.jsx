import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import accountActions from '../../../account/duck/actions';

import AdditionalInfoComponent from './AdditionalInfoComponent';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return (
    {
      updateUser: (firstName, lastName, next) => {
        dispatch(accountActions.updateUser({
          user: {
            first_name : firstName,
            last_name  : lastName,
          },
          next,
        }));
      },
    }
  );
};

const AdditionalInfoContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AdditionalInfoComponent),
);

export default AdditionalInfoContainer;
