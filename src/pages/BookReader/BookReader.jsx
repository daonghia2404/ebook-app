import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, useLocation } from '@reach/router';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import classNames from 'classnames';

import ConfirmModal from '@/containers/ConfirmModal/ConfirmModal';
import { decryptPdfFilePassword, scrollToTop, showNotification } from '@/utils/functions';
import { getFileMyBookAction } from '@/redux/actions';
import { LayoutPaths, Paths } from '@/pages/routers';
import { ETypeNotification, ETypePage } from '@/utils/constants';
import AuthHelpers from '@/services/auth-helpers';

import SamplePdf from './sample-pdf.pdf';

import './BookReader.scss';

const BookReader = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const voice = query.get('voice');
  const product = query.get('product');
  const page = query.get('page') || 1;

  const fileData = useSelector((state) => state.profileState.fileMyBook);

  const [pageNumber, setPageNumber] = useState({
    page,
    total: 1,
  });
  const [visibleNextPageModal, setVisibleNextPageModal] = useState({
    visible: false,
  });

  const isAvaiablePage = voice && product;

  const getFileMyBookData = useCallback(() => {
    dispatch(getFileMyBookAction.request({ product, voice }));
  }, [dispatch, voice, product]);

  const handleVerifyPassword = (cb, reason) => {
    const passwordDecrypt = decryptPdfFilePassword(fileData);
    cb(passwordDecrypt);

    if (reason !== 1) {
      showNotification(ETypeNotification.ERROR, 'Không có quyền truy cập');
      navigate(`${LayoutPaths.Profile}${Paths.MyBooks}`);
    }
  };

  const handleChangePage = (changedPage) => {
    if (changedPage > 0 && changedPage <= pageNumber.total) {
      AuthHelpers.storeBookMark(`${voice},${changedPage}`);
      setPageNumber({
        ...pageNumber,
        page: changedPage,
      });
    }
  };

  const handleLoadPdfSuccess = (data) => {
    const { numPages } = data._pdfInfo;
    const initPage = page && page <= numPages ? page : ETypePage.DEFAULT_PAGE;
    setPageNumber({
      page: initPage,
      total: numPages,
    });
  };

  const handleOpenNextPageModal = (page) => {
    setVisibleNextPageModal({ visible: true, page });
  };
  const handleCloseNextPageModal = () => {
    setVisibleNextPageModal({ visible: false });
  };
  const handleSubmitNextPageModal = () => {
    handleChangePage(visibleNextPageModal.page);
    handleCloseNextPageModal();
  };

  useEffect(() => {
    if (isAvaiablePage) getFileMyBookData();
    else navigate(Paths.Home);
  }, [getFileMyBookData]);

  useEffect(() => {
    if (voice) {
      const bookMark = AuthHelpers.getBookMark();

      if (bookMark) {
        const [voiceMark, pageMark] = bookMark.split(',');
        if (voiceMark && pageMark && voiceMark === voice) {
          handleOpenNextPageModal(Number(pageMark));
        }
      }
    }
  }, [voice]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="BookReader">
      <div className="container">
        <div className="BookReader-wrapper">
          <Document file={fileData.url} onLoadSuccess={handleLoadPdfSuccess} onPassword={handleVerifyPassword}>
            <Page pageNumber={pageNumber.page} />
          </Document>

          <div className="BookReader-footer flex justify-between">
            <div
              className={classNames('BookReader-footer-item', { disabled: pageNumber.page === ETypePage.DEFAULT_PAGE })}
              onClick={() => handleChangePage(pageNumber.page - 1)}
            >
              Trang trước
            </div>
            <div className="BookReader-footer-item">
              <span>
                {pageNumber.page || 0} / {pageNumber.total}
              </span>
            </div>
            <div
              className={classNames('BookReader-footer-item', { disabled: pageNumber.page === pageNumber.total })}
              onClick={() => handleChangePage(pageNumber.page + 1)}
            >
              Trang sau
            </div>
          </div>
        </div>
      </div>

      <ConfirmModal
        title={`Bạn muốn đọc tiếp trang ${visibleNextPageModal.page} không ?`}
        visible={visibleNextPageModal.visible}
        hideCancel
        onClose={handleCloseNextPageModal}
        onSubmit={handleSubmitNextPageModal}
      />
    </div>
  );
};

export default BookReader;
