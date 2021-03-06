import { createActionCreator } from 'deox';

import { EUIAction } from './constants';

export const uiActions = {
  resetActionStatus: createActionCreator(
    EUIAction.RESET_ACTION_STATUS,
    (resolve) => (actionName) => resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
  setDevice: createActionCreator(EUIAction.SET_DEVICE, (resolve) => (deviceWidth) => resolve({ deviceWidth })),
  getCartsStorage: createActionCreator(EUIAction.GET_CARTS_STORAGE, (resolve) => (data) => resolve({ data })),
  setCartsStorage: createActionCreator(EUIAction.SET_CARTS_STORAGE, (resolve) => (data) => resolve({ data })),
};
