import { connect } from 'react-redux';

import AccountSettingsComponent from './AccountSettingsComponent';

import accountActions from './duck/actions';

const mapStateToProps = (state) => {
  const {
    email,
    firstName,
    id,
    lastName,
    walletAddress,
  } = state.account;

  return {
    email,
    firstName,
    id,
    lastName,
    walletAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return (
    {
      updateUser: ({ firstName, lastName, email, bio }) => {
        dispatch(accountActions.updateUser({
          user: {
            first_name : firstName,
            last_name  : lastName,
            email,
            bio,
          },
        }));
      },
    }
  );
};

const AccountSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountSettingsComponent);

export default AccountSettingsContainer;
