import {
  CategoryScale, Chart as ChartJS, ChartData, Filler, Legend, LinearScale, LineElement, PointElement, Title,
  Tooltip
} from 'chart.js';
import { transparentize } from 'polished';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import NoData from '../NoData/NoData';
import Heading from '../Typography/Heading';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export interface ChartProps {
  data: ChartData<any, any, any>,
  title: string
}

const options = {
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        usePointStyle: true
      }
    }
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false
      }
    },
    y: {
      type: 'linear' as const,
      display: false,
      position: 'left' as const,
    },
  },
};

export interface ChartProps { }

export default function Chart(props: ChartProps) {
  return <ChartWrapper style={{ width: 640 }}>
    <div style={{ marginBottom: 16 }}>
      <Heading level={3}>
        {props.title}
      </Heading>
    </div>
    {
      props.data
        ? <Line
          data={props.data}
          options={options}
          height={139}
          width={600}
        />
        : <NoData height={139} />
    }
  </ChartWrapper>
}

const ChartWrapper = styled.div`
  text-align: center;
  border: 1px solid ${transparentize(0.9, '#274060')};
  padding: 20px;
`