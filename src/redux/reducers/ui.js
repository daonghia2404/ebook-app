import { createReducer } from 'deox';
import { uiActions } from '@/redux/actions';
import { getCartsLocalStorage, setCartsLocalStorage } from '@/utils/cart';

export const EDeviceType = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
};

const initialState = {
  device: {
    type: window.innerWidth > 991 ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
    width: window.innerWidth,
  },
  cartsStorage: getCartsLocalStorage(),
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(uiActions.setDevice, (state, { payload }) => ({
    ...state,
    device: {
      type: payload.deviceWidth > 991 ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
      width: payload.deviceWidth,
    },
  })),
  handleAction(uiActions.setCartsStorage, (state, { payload }) => {
    setCartsLocalStorage(payload.data);

    return {
      ...state,
      cartsStorage: payload.data,
    };
  }),
]);

export default reducer;
