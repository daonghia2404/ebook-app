import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import ImageNewDetail from '@/assets/images/image-new-detail.png';
import { formatISODateToDateTime, scrollToTop } from '@/utils/functions';
import { getDetailNewAction } from '@/redux/actions';

import './NewDetail.scss';

const NewDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.newState.new) ?? {};

  const getNewDetailData = useCallback(() => {
    dispatch(getDetailNewAction.request(id));
  }, [dispatch, id]);

  useEffect(() => {
    getNewDetailData();
  }, [getNewDetailData]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="NewDetail">
      <div className="container">
        <div className="NewDetail-wrapper">
          <div className="NewDetail-image">
            <img src={ImageNewDetail} alt="" />
          </div>
          <div className="NewDetail-title">{blog.title} </div>
          <div className="NewDetail-time">{formatISODateToDateTime(blog.createdAt)}</div>

          <div className="NewDetail-main" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </div>
  );
};

export default NewDetail;
