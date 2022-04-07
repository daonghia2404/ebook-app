import { createActionCreator } from 'deox';

import { EUIAction } from './constants';

export const uiActions = {
  resetActionStatus: createActionCreator(
    EUIAction.RESET_ACTION_STATUS,
    (resolve) => (actionName) => resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
};
