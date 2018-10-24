import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import accountActions from '../../../account/duck/actions';

import AdditionalInfoComponent from './AdditionalInfoComponent';

// const mapStateToProps = (state) => {
//   const { email, firstName, id, lastName, walletAddress } = state.account;

//   return {
//     email,
//     firstName,
//     id,
//     lastName,
//     walletAddress,
//   };
// };

// const mapDispatchToProps = (dispatch) => {};

// const AdditionalInfoContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(AdditionalInfoComponent);

const AdditionalInfoContainer = withRouter(
  connect(
    (state) => {
      return state;
    },
    (dispatch) => {
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
    },
  )(AdditionalInfoComponent),
);

export default AdditionalInfoContainer;
