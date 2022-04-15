import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Select as AntdSelect } from 'antd';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { useDebounce } from '@/utils/hooks';
import { DEBOUNCE_SEARCH } from '@/common/static';
import { getTotalPage, searchString } from '@/utils/functions';
import WrapperLazyLoad from '@/components/WrapperLazyLoad';
import Loading from '@/containers/Loading/Loading';

import './Select.scss';

export const Select = ({
  className,
  value,
  dropdownClassName,
  placeholder,
  defaultValue,
  options,
  mode,
  loading,
  paginate,
  allowClear,
  disabled,
  onLoadMore,
  onChange,
  onSearch,
}) => {
  const [keyword, setKeyword] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const searchValueDebounce = useDebounce(keyword, DEBOUNCE_SEARCH);

  const filterOption = (inputValue, option) => {
    return searchString(option.label, keyword);
  };

  const handleSearch = (keywordValue) => {
    setKeyword(keywordValue);
  };

  const dropdownRender = (menu) => {
    return (
      <div className={classNames('Select-dropdown', dropdownClassName)}>
        {loading && (
          <div className="Select-dropdown-loading flex items-center justify-center">
            <Loading />
          </div>
        )}
        <div className="Select-dropdown-main">
          <WrapperLazyLoad maxHeight={256} onEnd={handleScrollEnd}>
            {menu}
          </WrapperLazyLoad>
        </div>
      </div>
    );
  };

  const handleScrollEnd = () => {
    if (onSearch && paginate) {
      const isLoadMore = paginate.page < getTotalPage(paginate.total, paginate.pageSize);
      if (isLoadMore) {
        onLoadMore?.();
      }
    }
  };

  const handleClear = () => {
    onChange?.(null);
  };

  useEffect(() => {
    if (isMounted && onSearch) {
      onSearch?.(searchValueDebounce);
    }

    setIsMounted(true);
  }, [searchValueDebounce]);

  return (
    <div className={classNames('Select', className)}>
      <AntdSelect
        className="Select-control"
        mode={mode}
        value={value}
        showSearch
        placeholder={placeholder}
        defaultValue={defaultValue}
        labelInValue
        allowClear={allowClear}
        searchValue={keyword}
        onSearch={handleSearch}
        filterOption={onSearch ? false : filterOption}
        options={options}
        dropdownClassName={classNames('Select-dropdown', dropdownClassName)}
        suffixIcon={<Icon name={EIconName.CaretDown} color={EIconColor.GRAY} />}
        getPopupContainer={(trigger) => trigger}
        onChange={onChange}
        onClear={handleClear}
        dropdownRender={dropdownRender}
        disabled={disabled}
        virtual={false}
      />
    </div>
  );
};

export default Select;
