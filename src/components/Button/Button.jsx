import React from 'react';
import { Button as AntdButton } from 'antd';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import './Button.scss';

const Button = ({ className, title, icon, uppercase, link, onClick, radius, ...rest }) => {
  const handleClick = () => {
    if (link) navigate(link);
    else onClick?.();
  };

  return (
    <div className={classNames('Button', className, { uppercase }, { radius }, { 'only-icon': !title && icon })}>
      <AntdButton {...rest} onClick={handleClick}>
        {title}
        {icon && <div className="Button-icon">{icon}</div>}
      </AntdButton>
    </div>
  );
};

export default Button;
