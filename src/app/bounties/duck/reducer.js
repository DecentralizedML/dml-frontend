/* eslint-disable no-param-reassign */

import produce from 'immer';

import types from './types';

const bountiesReducer = (state = {}, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case types.CREATE_BOUNTY:
        break;

      case types.CREATE_BOUNTY_ERROR:
        break;

      case types.CREATE_BOUNTY_SUCCESS:
        break;

      case types.CREATE_BOUNTY_ENROLLMENT:
        break;

      case types.CREATE_BOUNTY_ENROLLMENT_ERROR:
        break;

      case types.CREATE_BOUNTY_ENROLLMENT_SUCCESS:
        break;

      case types.LIST_BOUNTIES:
        break;

      case types.LIST_BOUNTIES_ERROR:
        break;

      case types.LIST_BOUNTIES_MINE:
        break;

      case types.LIST_BOUNTIES_MINE_ERROR:
        break;

      case types.LIST_BOUNTY_ENROLLMENTS:
        break;

      case types.LIST_BOUNTY_ENROLLMENTS_ERROR:
        break;

      case types.OPEN_BOUNTY:
        break;

      case types.OPEN_BOUNTY_ERROR:
        break;

      case types.OPEN_BOUNTY_SUCCESS:
        break;

      case types.SHOW_BOUNTY:
        break;

      case types.SHOW_BOUNTY_ERROR:
        break;

      case types.UPDATE_BOUNTY:
        break;

      case types.UPDATE_BOUNTY_ERROR:
        break;

      case types.UPDATE_BOUNTY_SUCCESS:
        break;

      default:
    }
  });
};

export default bountiesReducer;
