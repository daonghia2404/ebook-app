import React, { useEffect } from 'react';

import ImageNewDetail from '@/assets/images/image-new-detail.png';
import { scrollToTop } from '@/utils/functions';

import './NewDetail.scss';
import { useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailNewAction } from '@/redux/actions';

const NewDetail = () => {
  useEffect(() => {
    scrollToTop();
    getById();
  }, []);
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.newState.new) ?? {};
  let { id } = useParams();
  const getById = () => {
    dispatch(getDetailNewAction.request(id));
  };
  return (
    <div className="NewDetail">
      <div className="container">
        <div className="NewDetail-wrapper">
          <div className="NewDetail-image">
            <img src={ImageNewDetail} alt="" />
          </div>
          <div className="NewDetail-title">{blog.title} </div>
          <div className="NewDetail-time">{blog.createdAt}</div>

          <div className="NewDetail-main">{blog.content}</div>
        </div>
      </div>
    </div>
  );
};

export default NewDetail;
