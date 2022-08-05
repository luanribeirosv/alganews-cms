import { Meta, Story } from '@storybook/react';
import Chart, { ChartProps } from '../components/Chart/Chart';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of fdsfdVotes',
      data: [12, 19, 3, 5, 2, 3],
      fill: 'origin',
      backgroundColor: '#0099FF',
      borderColor: '#0099FF',
      yAxisID: 'y',
    },
    {
      label: '# of No Votes',
      data: [1, 10, 1, 1, 2, 5],
      fill: 'origin',
      backgroundColor: '#274060',
      borderColor: '#274060',
      yAxisID: 'y',
    },
  ],
};

export default {
  title: 'Example/Chart',
  component: Chart,
} as Meta;

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const Default = Template.bind({})
Default.args = {
  title: 'Média de performance',
  data
}

export const WithoutData = Template.bind({})
WithoutData.args = {
  title: 'Média de performance'
}