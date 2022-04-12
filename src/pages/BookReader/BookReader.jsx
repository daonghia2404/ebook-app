import React, { useEffect, useState } from 'react';

import ImageBookReader from '@/assets/images/image-new-detail.png';
import ConfirmModal from '@/containers/ConfirmModal/ConfirmModal';
import { scrollToTop } from '@/utils/functions';

import './BookReader.scss';

const BookReader = () => {
  const [visibleNextPageModal, setVisibleNextPageModal] = useState(false);

  const handleOpenNextPageModal = () => {
    setVisibleNextPageModal(true);
  };
  const handleCloseNextPageModal = () => {
    setVisibleNextPageModal(false);
  };
  const handleSubmitNextPageModal = () => {
    handleCloseNextPageModal();
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="BookReader">
      <div className="container">
        <div className="BookReader-wrapper">
          <div className="BookReader-title">Chương 1</div>

          <div className="BookReader-image">
            <img src={ImageBookReader} alt="" />
          </div>

          <div className="BookReader-main">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend ante at vestibulum aliquam. Maecenas
              porta nec sem nec congue. Aenean dapibus non velit non faucibus. Donec eleifend felis a mi aliquet, at
              volutpat quam feugiat. Suspendisse ut pharetra justo, et pellentesque sapien. Curabitur dictum tincidunt
              ante, interdum vestibulum enim egestas sit amet. Praesent in porta felis, non ultricies dui.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis. Duis non dignissim
              mi. Nullam sodales viverra elit, sed vulputate purus.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend ante at vestibulum aliquam. Maecenas
              porta nec sem nec congue. Aenean dapibus non velit non faucibus. Donec eleifend felis a mi aliquet, at
              volutpat quam feugiat. Suspendisse ut pharetra justo, et pellentesque sapien. Curabitur dictum tincidunt
              ante, interdum vestibulum enim egestas sit amet. Praesent in porta felis, non ultricies dui.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis. Duis non dignissim
              mi. Nullam sodales viverra elit, sed vulputate purus.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend ante at vestibulum aliquam. Maecenas
              porta nec sem nec congue. Aenean dapibus non velit non faucibus. Donec eleifend felis a mi aliquet, at
              volutpat quam feugiat. Suspendisse ut pharetra justo, et pellentesque sapien. Curabitur dictum tincidunt
              ante, interdum vestibulum enim egestas sit amet. Praesent in porta felis, non ultricies dui.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis. Duis non dignissim
              mi. Nullam sodales viverra elit, sed vulputate purus.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis.{' '}
            </p>
          </div>

          <div className="BookReader-footer flex justify-between">
            <div className="BookReader-footer-item">
              Chương <span>78/100</span>
            </div>
            <div className="BookReader-footer-item cursor-pointer" onClick={handleOpenNextPageModal}>
              Trang <span> 2/22</span>
            </div>
          </div>
        </div>
      </div>

      <ConfirmModal
        title="Bạn muốn đọc tiếp trang 29 không ?"
        visible={visibleNextPageModal}
        hideCancel
        onClose={handleCloseNextPageModal}
        onSubmit={handleSubmitNextPageModal}
      />
    </div>
  );
};

export default BookReader;
