import React from 'react';
import { Collapse as AntdCollapse } from 'antd';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';

import './Collapse.scss';

const { Panel } = AntdCollapse;

export const Collapse = ({ defaultActiveKey, dataPanel }) => {
  return (
    <div className="Collapse">
      <AntdCollapse
        accordion
        defaultActiveKey={defaultActiveKey}
        expandIconPosition="right"
        expandIcon={() => <Icon className="Collapse-icon" name={EIconName.AngleRight} color={EIconColor.WHITE} />}
      >
        {dataPanel.map((item) => (
          <Panel header={<div className="Collapse-title">{item.header}</div>} key={item.key}>
            <div>{item.content}</div>
          </Panel>
        ))}
      </AntdCollapse>
    </div>
  );
};

export default Collapse;
