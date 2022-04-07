import React from 'react';

import Button from '@/components/Button/index';
import { ECategory } from '../constants';

export default {
  title: `${ECategory.Components}/Button`,
  component: Button,
  args: {
    title: 'Button',
  },
  argTypes: {},
};

// PRIMARY
const Template = ({ ...rest }) => <Button {...rest} />;

export const Primary = Template.bind({});
