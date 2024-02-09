/* eslint-disable no-unused-vars */
import {
    Chart as ChartJS,
    Filler,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Pie } from 'react-chartjs-2';
  import TitleCard from '../../../components/Cards/TitleCard';
  import Subtitle from '../../../components/Typography/Subtitle';
  
  ChartJS.register(ArcElement, Tooltip, Legend,
      Tooltip,
      Filler,
      Legend);
  
  function PieChart(){

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'left',
          fontSize: 16,
        },
      },
    };
      
    const labels = ['Europe', 'US', 'Latin America', 'Middle East'];

    const data = {
      labels,
      datasets: [
          {
              label: '#',
              data: [120, 80, 40, 31],
              backgroundColor: [
                '#98D77A',
                '#9B52DC',
                '#FF8962',
                '#F8CF60',
              ],
              borderColor: ['transparent'],
            }
      ],
    };
  
      // const options = {
      //     responsive: true,
      //     plugins: {
      //       legend: {
      //         position: 'left',
      //       },
      //     },
      //   };
        
      //   const labels = ['India', 'Middle East', 'Europe', 'US', 'Latin America', 'Asia(non-india)'];
        
      //   const data = {
      //     labels,
      //     datasets: [
      //         {
      //             label: '# of Orders',
      //             data: [122, 219, 30, 51, 82, 13],
      //             backgroundColor: [
      //               'rgba(255, 99, 255, 0.8)',
      //               'rgba(54, 162, 235, 0.8)',
      //               'rgba(255, 206, 255, 0.8)',
      //               'rgba(75, 192, 255, 0.8)',
      //               'rgba(153, 102, 255, 0.8)',
      //               'rgba(255, 159, 255, 0.8)',
      //             ],
      //             borderColor: [
      //               'rgba(255, 99, 255, 1)',
      //               'rgba(54, 162, 235, 1)',
      //               'rgba(255, 206, 255, 1)',
      //               'rgba(75, 192, 255, 1)',
      //               'rgba(153, 102, 255, 1)',
      //               'rgba(255, 159, 255, 1)',
      //             ],
      //             borderWidth: 1,
      //           }
      //     ],
      //   };
  
      return(
          <TitleCard title={"Orders by country"}>
            <div className='h-full flex w-full max-h-96'>
              <Pie options={options} data={data} />
            </div>
          </TitleCard>
      )
  }
  
  
  export default PieChart