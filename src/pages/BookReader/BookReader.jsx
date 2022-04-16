import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, useLocation } from '@reach/router';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import classNames from 'classnames';

import ConfirmModal from '@/containers/ConfirmModal/ConfirmModal';
import { scrollToTop } from '@/utils/functions';
import { getFileMyBookAction } from '@/redux/actions';
import { Paths } from '@/pages/routers';
import { ETypePage } from '@/utils/constants';

import SamplePdf from './sample-pdf.pdf';

import './BookReader.scss';

const BookReader = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const voice = query.get('voice');
  const product = query.get('product');
  const page = query.get('page');

  const fileData = useSelector((state) => state.profileState.fileMyBook);

  const [pageNumber, setPageNumber] = useState({
    page,
    total: 0,
  });
  const [visibleNextPageModal, setVisibleNextPageModal] = useState(false);

  const isAvaiablePage = voice && product;

  const getFileMyBookData = useCallback(() => {
    dispatch(getFileMyBookAction.request({ product, voice }));
  }, [dispatch, voice, product]);

  const handleChangePage = (changedPage) => {
    if (changedPage > 0 && changedPage <= pageNumber.total) {
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
    if (isAvaiablePage) getFileMyBookData();
    else navigate(Paths.Home);
  }, [getFileMyBookData]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="BookReader">
      <div className="container">
        <div className="BookReader-wrapper">
          <Document file={fileData.url} onLoadSuccess={handleLoadPdfSuccess}>
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
