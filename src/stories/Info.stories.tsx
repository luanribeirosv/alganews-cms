import { Meta, Story } from '@storybook/react';
import Info, { InfoProps } from '../components/Info/Info';

export default {
  title: 'Example/Info',
  component: Info,
} as Meta;

const Template: Story<InfoProps> = (args) => <Info {...args} />;

export const Default = Template.bind({})
Default.args = {
  title: 'Post não encontrado',
  description: 'Este post não foi encontrado.'
}