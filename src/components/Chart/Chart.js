import React from 'react';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
function Chart() {
  const { incomes, expenses } = useGlobalContext();
  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: 'Incomes',
        data: [
          ...incomes.map((inc) => {
            const { amount } = inc;
            return amount;
          }),
        ],
        backgroundColor: '#b7ff8a',
        borderColor: '#b7ff8a',
        borderWidth: 2,
        tension: 0.2,
        fill: true,
      },
      {
        label: 'Expenses',
        data: [
          ...expenses.map((exp) => {
            const { amount } = exp;
            return amount;
          }),
        ],
        backgroundColor: '#ff0404',
        borderColor: '#ff0404',
        borderWidth: 2,
        tension: 0.6,
        fill: true,
      },
    ],
  };
  return (
    <ChartStyled className="chart-container">
      <Line data={data} />
    </ChartStyled>
  );
}

const ChartStyled = styled.div`
  background: var(--blue-color);
  border: 1px solid var(--secondary-color);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;

export default Chart;
