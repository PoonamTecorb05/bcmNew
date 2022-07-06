import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
//   labels: ['Red', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [6, 19],
      backgroundColor: [
        '#3E66FB',
        '#93A9FD',
        
      ],
      borderColor: [
        '#fff',
        '#fff',
        
      ],
      
      borderWidth: 3,
    },
  ],
};

 function PieChartComp() {
  return <Pie data={data} />;
}
export default PieChartComp
