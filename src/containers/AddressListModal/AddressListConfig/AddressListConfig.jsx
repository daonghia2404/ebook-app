import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';

import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Select from '@/components/Select';
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';
import { ETypeAddressListModal } from '@/containers/AddressListModal/AddressListModal.enums';
import {
  addAddressAction,
  getDistrictAction,
  getProvinceAction,
  getWardAction,
  updateAddressAction,
} from '@/redux/actions';
import { ETypeNotification } from '@/utils/constants';
import { EAddressAction } from '@/redux/actions/address/constants';

const AddressListConfig = ({ type, data, onSubmit }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const provincesData = useSelector((state) => state.addressState.provinces);
  const districtsData = useSelector((state) => state.addressState.districts);
  const wardsData = useSelector((state) => state.addressState.wards);

  const createAddressLoading = useSelector((state) => state.loading[EAddressAction.ADDRESS_ADD]);
  const updateAddressLoading = useSelector((state) => state.loading[EAddressAction.ADDRESS_UPDATE]);

  const loading = createAddressLoading || updateAddressLoading;

  const provincesOptions = provincesData.map((item) => ({
    label: item.ProvinceName,
    value: item.ProvinceID,
  }));

  const districtsOptions = districtsData.map((item) => ({
    label: item.DistrictName,
    value: item.DistrictID,
  }));

  const wardsOptions = wardsData.map((item) => ({
    label: item.WardName,
    value: item.WardCode,
  }));

  const isCreateAddress = type === ETypeAddressListModal.CREATE;

  const handleSubmit = (values) => {
    const body = {
      name: values.name,
      phone: values.phone,
      province: values.province?.label,
      provinceId: values.province?.value,
      district: values.district?.label,
      districtId: values.district?.value,
      ward: values.ward?.label,
      wardId: values.ward?.value,
      detailAddress: values.detailAddress,
      isDefault: Boolean(values.isDefault),
    };

    if (isCreateAddress) {
      dispatch(addAddressAction.request(body, handleSubmitSuccess));
    } else {
      dispatch(updateAddressAction.request(data._id, body, handleSubmitSuccess));
    }
  };

  const handleSubmitSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, `${isCreateAddress ? 'T???o m???i' : 'C???p nh???t'} ?????a ch??? th??nh c??ng`);
    onSubmit?.();
  };

  const handleChangeProvince = (option) => {
    dispatch(getWardAction.success({ data: [] }));
    dispatch(getDistrictAction.request({ provinceId: option.value }));
  };

  const handleChangeDistrict = (option) => {
    dispatch(getWardAction.request({ districtId: option.value }));
  };

  const getProvinceData = useCallback(() => {
    dispatch(getProvinceAction.request());
  }, [dispatch]);

  useEffect(() => {
    getProvinceData();
  }, [getProvinceData]);

  useEffect(() => {
    if (!isCreateAddress && data) {
      form.setFieldsValue({ ...data });
    }
  }, [data]);

  return (
    <div className="AddressListModal">
      <Form form={form} className="AddressListModal-form style-form" layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="name" label="T??n c???a b???n" rules={[validationRules.required()]}>
          <Input size="large" placeholder="Nh???p t??n c???a b???n" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="S??? ??i???n tho???i"
          rules={[
            validationRules.required(),
            validationRules.phone(),
            validationRules.noSpaceKey(),
            validationRules.maxLength(10),
            validationRules.onlyNumeric(),
          ]}
        >
          <Input size="large" placeholder="Nh???p s??? ??i???n tho???i" />
        </Form.Item>
        <Form.Item name="province" label="T???nh/Th??nh ph???" rules={[validationRules.required()]}>
          <Select placeholder="Ch???n T???nh/Th??nh ph???" options={provincesOptions} onChange={handleChangeProvince} />
        </Form.Item>
        <Form.Item name="district" label="Qu???n/Huy???n" rules={[validationRules.required()]}>
          <Select placeholder="Ch???n Qu???n/Huy???n" options={districtsOptions} onChange={handleChangeDistrict} />
        </Form.Item>
        <Form.Item name="ward" label="Ph?????ng/X??" rules={[validationRules.required()]}>
          <Select placeholder="Ch???n Ph?????ng/X??" options={wardsOptions} />
        </Form.Item>
        <Form.Item name="detailAddress" label="?????a ch??? c??? th???" rules={[validationRules.required()]}>
          <Input size="large" placeholder="Nh???p ?????a ch??? c??? th???" />
        </Form.Item>
        <Form.Item name="isDefault">
          <Checkbox label="?????t l??m ?????a ch??? m???c ?????nh" />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            title={`${isCreateAddress ? 'T???o m???i' : 'C???p nh???t'}`}
            size="large"
            type="primary"
            loading={loading}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddressListConfig;
