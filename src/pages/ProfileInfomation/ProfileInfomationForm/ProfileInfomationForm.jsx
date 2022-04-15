import React, { useEffect } from 'react';
import { Form } from 'antd';

import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import UploadAvatar from '@/components/UploadAvatar';
import Radio from '@/components/Radio/Radio';
import { dataGenderOptions } from '@/common/static';
import { useDispatch, useSelector } from 'react-redux';
import { EProfileAction } from '@/redux/actions/profile/constants';
import { updateProfileAction } from '@/redux/actions';
import { navigate } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import { ETypeNotification } from '@/utils/constants';
import moment from 'moment';

const ProfileInfomationForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profileState.profile) ?? {};
  const updateProfileLoading = useSelector((state) => state.loading[EProfileAction.UPDATE_PROFILE]);

  const handlerSubmit = (values) => {
    const isChangeEmail = profileData.email !== values.email;
    const isChangeAvatar = profileData.avatar !== values.avatar;

    const body = {
      avatar: isChangeAvatar ? values?.avatar : undefined,
      name: values?.name,
      email: isChangeEmail ? values?.email : undefined,
      gender: values?.gender?.value,
      phone: values?.phone,
      dob: values?.dob,
    };

    dispatch(updateProfileAction.request(body, handleUpdateProfileSuccess));
  };

  const handleUpdateProfileSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Cập nhật thông tin cá nhân thành công');
    navigate(`${LayoutPaths.Profile}${Paths.ProfileInfomation}`);
  };

  useEffect(() => {
    form.setFieldsValue({
      name: profileData.name,
      email: profileData.email,
      phone: profileData.phone,
      dob: profileData.dob ? moment(profileData.dob) : undefined,
      avatar: profileData.avatar,
      gender: dataGenderOptions.find((item) => profileData.gender === item.value),
    });
  }, [form, profileData]);

  return (
    <>
      <Form form={form} layout="vertical" className="ProfileInfomation-form style-form" onFinish={handlerSubmit}>
        <Form.Item name="avatar" style={{ marginBottom: '7rem' }}>
          <UploadAvatar />
        </Form.Item>
        <Form.Item name="name" label="Tên của bạn" rules={[validationRules.required()]}>
          <Input size="large" placeholder="Nhập tên của bạn" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[validationRules.required(), validationRules.onlyNumeric()]}
        >
          <Input size="large" placeholder="Nhập số điện thoại" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[validationRules.required(), validationRules.email()]}>
          <Input size="large" placeholder="Nhập email" />
        </Form.Item>
        <Form.Item name="dob" label="Ngày sinh" rules={[validationRules.required()]}>
          <DatePicker size="large" placeholder="Chọn ngày sinh" />
        </Form.Item>
        <div className="ProfileInfomation-form-row flex justify-end">
          <div className="ProfileInfomation-form-row-label">Giới tính</div>
          <Form.Item name="gender">
            <Radio options={dataGenderOptions} />
          </Form.Item>
        </div>

        <Form.Item className="ProfileInfomationForm-submit">
          <Button
            title="Lưu lại"
            size="large"
            loading={updateProfileLoading}
            htmlType="submit"
            uppercase
            type="primary"
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default ProfileInfomationForm;
