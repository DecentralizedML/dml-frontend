import { connect } from 'react-redux';

import AccountSettingsComponent from './AccountSettingsComponent';

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

const AccountSettingsContainer = connect(
  mapStateToProps,
)(AccountSettingsComponent);

export default AccountSettingsContainer;
