import types from './types';

const createBounty = (data) => {
  return ({
    type    : types.CREATE_BOUNTY,
    payload : data,
  });
};

const createBountyEnrollment = (data) => {
  return ({
    type    : types.CREATE_BOUNTY_ENROLLMENT,
    payload : data,
  });
};

const createBountyEnrollmentError = (error) => {
  return ({
    type    : types.CREATE_BOUNTY_ENROLLMENT_ERROR,
    payload : {
      error,
    },
  });
};

const createBountyEnrollmentSuccess = () => {
  return ({
    type: types.CREATE_BOUNTY_ENROLLMENT_SUCCESS,
  });
};

const createBountyError = (error) => {
  return ({
    type    : types.CREATE_BOUNTY_ERROR,
    payload : {
      error,
    },
  });
};

const createBountySuccess = () => {
  return ({
    type: types.CREATE_BOUNTY_SUCCESS,
  });
};

const listBounties = () => {
  return ({
    type: types.LIST_BOUNTIES,
  });
};

const listBountiesError = (error) => {
  return ({
    type    : types.LIST_BOUNTIES_ERROR,
    payload : {
      error,
    },
  });
};

const listBountiesMine = () => {
  return ({
    type: types.LIST_BOUNTIES_MINE,
  });
};

const listBountiesMineError = (error) => {
  return ({
    type    : types.LIST_BOUNTIES_MINE_ERROR,
    payload : {
      error,
    },
  });
};

const listBountyEnrollments = () => {
  return ({
    type: types.LIST_BOUNTY_ENROLLMENTS,
  });
};

const listBountyEnrollmentsError = (error) => {
  return ({
    type    : types.LIST_BOUNTY_ENROLLMENTS_ERROR,
    payload : {
      error,
    },
  });
};

const openBounty = (data) => {
  return ({
    type    : types.OPEN_BOUNTY,
    payload : data,
  });
};

const openBountyError = (error) => {
  return ({
    type    : types.OPEN_BOUNTY_ERROR,
    payload : {
      error,
    },
  });
};

const openBountySuccess = () => {
  return ({
    type: types.OPEN_BOUNTY_SUCCESS,
  });
};

const showBounty = (data) => {
  return ({
    type    : types.SHOW_BOUNTY,
    payload : data,
  });
};

const showBountyError = (error) => {
  return ({
    type    : types.SHOW_BOUNTY_ERROR,
    payload : {
      error,
    },
  });
};

const updateBounty = (data) => {
  return ({
    type    : types.UPDATE_BOUNTY,
    payload : data,
  });
};

const updateBountyError = (error) => {
  return ({
    type    : types.UPDATE_BOUNTY_ERROR,
    payload : {
      error,
    },
  });
};

const updateBountySuccess = () => {
  return ({
    type: types.UPDATE_BOUNTY_SUCCESS,
  });
};

export default {
  createBounty,
  createBountyEnrollment,
  createBountyEnrollmentError,
  createBountyEnrollmentSuccess,
  createBountyError,
  createBountySuccess,
  listBounties,
  listBountiesError,
  listBountiesMine,
  listBountiesMineError,
  listBountyEnrollments,
  listBountyEnrollmentsError,
  openBounty,
  openBountyError,
  openBountySuccess,
  showBounty,
  showBountyError,
  updateBounty,
  updateBountyError,
  updateBountySuccess,
};
