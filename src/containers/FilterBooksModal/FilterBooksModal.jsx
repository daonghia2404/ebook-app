import React, { useEffect, useState, useCallback } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Select from '@/components/Select';
import { ETypePage } from '@/utils/constants';
import { EAuthorAction } from '@/redux/actions/author/constants';
import { getAuthorsAction } from '@/redux/actions';

import './FilterBooksModal.scss';

const FilterBooksModal = ({ visible, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const getAuthorsLoading = useSelector((state) => state.loading[EAuthorAction.GET_AUTHORS]);
  const getAuthorsTotal = useSelector((state) => state.authorState.authors.total);
  const [authorOptions, setAuthorOptions] = useState([]);
  const [getAuthorsParamsRequest, setGetAuthorsParamsRequest] = useState({
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
    name: undefined,
  });

  const handleSubmit = (values) => {
    onSubmit?.(values);
  };

  const handleLoadMoreAuthors = () => {
    const isLoadMore = getAuthorsParamsRequest.page < getTotalPage(getAuthorsTotal, getAuthorsParamsRequest.pageSize);
    if (isLoadMore) {
      setGetAuthorsParamsRequest({
        ...getAuthorsParamsRequest,
        page: getAuthorsParamsRequest.page + 1,
      });
    }
  };
  const handleSearchAuthors = (name) => {
    setGetAuthorsParamsRequest({
      ...getAuthorsParamsRequest,
      page: ETypePage.DEFAULT_PAGE,
      name,
    });
  };

  const getAuthorsData = useCallback(() => {
    dispatch(
      getAuthorsAction.request(getAuthorsParamsRequest, (response) => {
        const isFirstFetching = getAuthorsParamsRequest.page === ETypePage.DEFAULT_PAGE;
        const options = response.data.records.map((item) => ({ label: item.name, value: item._id }));

        setAuthorOptions(isFirstFetching ? options : [...authorOptions, options]);
      }),
    );
  }, [dispatch, getAuthorsParamsRequest]);

  useEffect(() => {
    if (visible) {
      getAuthorsData();
    } else {
      form.resetFields();
    }
  }, [visible, getAuthorsData]);

  return (
    <Modal
      maxWidth="63rem"
      radius
      closeable={false}
      visible={visible}
      onClose={onClose}
      className="FilterBooksModal"
      wrapClassName="FilterBooksModal-wrapper"
    >
      <img className="FilterBooksModal-bg special" src={BgSpecial} alt="" />
      <div className="FilterBooksModal-header flex items-center justify-center">
        <div className="FilterBooksModal-back" onClick={onClose}>
          <Icon name={EIconName.ArrowLeft} color={EIconColor.BLUE_ZODIAC} />
        </div>
        <div className="FilterBooksModal-title">L???c</div>
      </div>
      <Form form={form} className="FilterBooksModal-form style-form" layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="author" label="T??c gi???">
          <Select
            placeholder="Ch???n t??c gi???"
            size="large"
            options={authorOptions}
            loading={getAuthorsLoading}
            onLoadMore={handleLoadMoreAuthors}
            onSearch={handleSearchAuthors}
          />
        </Form.Item>
        <Form.Item name="translator" label="D???ch gi???">
          <Input placeholder="Nh???p t??n d???ch gi???" size="large" />
        </Form.Item>
        <Form.Item name="publishingYear" label="N??m xu???t b???n">
          <DatePicker picker="year" size="large" placeholder="Ch???n n??m xu???t b???n" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" title="L???c" uppercase size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FilterBooksModal;
