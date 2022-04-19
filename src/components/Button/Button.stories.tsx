import { Meta, Story } from '@storybook/react/types-6-0';

import { Button, ButtonComponentProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonComponentProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.storyName = 'Default';
DefaultButton.args = {
  children: 'Button',
};
