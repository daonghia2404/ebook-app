import { createReducer } from 'deox';

import {
  addressListAction,
  addAddressAction,
  getProvinceAction,
  getDistrictAction,
  getWardAction,
  caculateAction,
  getAddressDefaultAction,
} from '@/redux/actions';

const initialState = {
  address: {},
  addressDefault: {},
  provinces: [],
  districts: [],
  wards: [],
  feeShip: 0,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(addressListAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, address: response.data };
  }),
  handleAction(getAddressDefaultAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, addressDefault: response.data };
  }),
  handleAction(getProvinceAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, provinces: response.data };
  }),
  handleAction(getDistrictAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, districts: response.data };
  }),
  handleAction(getWardAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, wards: response.data };
  }),
  handleAction(caculateAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, feeShip: response.data.total };
  }),
]);

export default reducer;
