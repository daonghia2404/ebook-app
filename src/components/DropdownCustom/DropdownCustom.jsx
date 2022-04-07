import React from 'react';
import { Dropdown as AntdDropdown } from 'antd';
import classNames from 'classnames';

import './DropdownCustom.scss';

const DropdownCustom = ({ visible, overlay, overlayClassName, children, trigger, onVisibleChange }) => {
  const handleVisibleChange = (currentVisible) => {
    onVisibleChange?.(currentVisible);
  };

  const antdDropdownProps = {
    overlay,
    overlayClassName: classNames('DropdownCustom-overlay', overlayClassName),
    getPopupContainer: (node) => node,
    trigger: trigger || ['click'],
    onVisibleChange: handleVisibleChange,
  };

  return (
    <div className="DropdownCustom">
      {visible ? (
        <AntdDropdown visible={visible} {...antdDropdownProps}>
          <div className="DropdownCustom-body">{children}</div>
        </AntdDropdown>
      ) : (
        <AntdDropdown {...antdDropdownProps}>
          <div className="DropdownCustom-body">{children}</div>
        </AntdDropdown>
      )}
    </div>
  );
};

export default DropdownCustom;
