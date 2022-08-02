import { ComponentMeta, Story } from '@storybook/react';

import Paragraph, { ParagraphProps } from '../components/Typography/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'
};