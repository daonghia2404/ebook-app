import React, { useRef } from 'react';
import { Dropdown as AntdDropdown } from 'antd';
import classNames from 'classnames';

import './DropdownCustom.scss';
import { useOnClickOutside } from '@/utils/hooks';

const DropdownCustom = ({
  visible,
  overlay,
  overlayClassName,
  overlayStyle,
  maxWidth,
  trigger,
  onVisibleChange,
  onClose,
  children,
}) => {
  const handleVisibleChange = (currentVisible) => {
    onVisibleChange?.(currentVisible);
  };

  const dropdownOverlayRef = useRef();
  useOnClickOutside(dropdownOverlayRef, () => {
    onClose?.();
  });

  const antdDropdownProps = {
    overlay: (
      <div ref={dropdownOverlayRef} style={{ maxWidth }}>
        {overlay}
      </div>
    ),
    overlayClassName: classNames('DropdownCustom-overlay', overlayClassName),
    overlayStyle: { ...overlayStyle, maxWidth },
    getPopupContainer: (node) => node,
    trigger: trigger || ['click'],
    onVisibleChange: handleVisibleChange,
  };

  return (
    <div className="DropdownCustom">
      {visible ? (
        <AntdDropdown {...antdDropdownProps} visible={visible}>
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
