/* eslint-disable no-unused-vars */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function LineChart(){

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 5,
      },
      line: {
        radius: 36,
      }
    },
    tooltips: {
      enabled: false,
    },
  };

  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;

  const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'MAU',
      data: labels.map(() => { return Math.random() * 10 + 40 }),
      borderColor: '#98D77A',
      backgroundColor: 'rgba(225, 236, 212, 0.70)',
    },
  ],
};
  

    return(
      <div className="card rounded-3xl w-full flex flex-col justify-between bg-cardBg dark:bg-base-100 shadow-xl mt-6">
        <div className='flex flex-col gap-5 px-5 pt-6'>
          <span className="text-xl font-semibold dark:text-slate-500">Downloads</span>
          <span className='text-5xl text-accent font-bold'>21,500</span>
        </div>
        <Line data={data} options={options}/>
      </div>
    )
}


export default LineChart