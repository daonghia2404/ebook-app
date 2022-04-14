import { createReducer } from 'deox';

import {
  addressListAction,
  addAddressAction,
  getProvinceAction,
  getDistrictAction,
  getWardAction,
} from '@/redux/actions';

const initialState = {
  address: [],
  provinces: [],
  districts: [],
  ward: [],
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(addressListAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, address: response.data.records };
  }),
  handleAction(addAddressAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state };
  }),
  handleAction(getProvinceAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, provinces: response.data.records };
  }),
  handleAction(getDistrictAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, districts: response.data.records };
  }),
  handleAction(getWardAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, ward: response.data.records };
  }),
]);

export default reducer;
