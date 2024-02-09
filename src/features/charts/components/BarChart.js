import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart(){

  const options = {
    responsive: true,
      plugins: {
        legend: {
          display: false,
        }
      },
      scales: {
        y: {
          display: false,
        },
        x: {
          ticks: {
            color: '#CBD5E1',
          }
        }
      },
    };
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
    const data = {
      labels,
      datasets: [
        {
          label: 'Store 1',
          data: labels.map(() => { return Math.random() * 1000 + 500 }),
          backgroundColor: 'rgba(255,255,255, 0.5)',
          borderRadius: 7,
        },
        {
          label: 'Store 2',
          data: labels.map(() => { return Math.random() * 1000 + 500 }),
          backgroundColor: 'rgba(255,255,255, 0.5)',
          borderRadius: 7,
        },
      ],
    };

    return(
      // <TitleCard title={"No of Orders"} topMargin="mt-2">
      //       <Bar options={options} data={data} />
      // </TitleCard>

      <div className="card rounded-3xl w-full px-6 py-7 flex flex-col bg-accent dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out mt-6">
          <h2 className='text-xl font-semibold text-white dark:text-slate-500 mb-2'>№ of Orders</h2>
          <Bar options={options} data={data} />
      </div>  
    )
}


export default BarChart