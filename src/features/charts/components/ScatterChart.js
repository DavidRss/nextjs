import {
    Chart as ChartJS,
    Filler,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Scatter } from 'react-chartjs-2';
  import TitleCard from '../../../components/Cards/TitleCard';
  
  ChartJS.register(ArcElement, Tooltip, Legend,
      Tooltip,
      Filler,
      Legend);
  
  function ScatterChart(){
  
      const options = {
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              display: false,
            },
        },
      };
        
        const data = {
          datasets: [
            {
              label: 'Orders > 1k',
              data: Array.from({ length: 100 }, () => ({
                x: Math.random() * 11,
                y: Math.random() * 31,
              })),
              backgroundColor: '#98D77A',
            },
            {
                label: 'Orders > 2K',
                data: Array.from({ length: 100 }, () => ({
                  x: Math.random() * 12,
                  y: Math.random() * 12,
                })),
                backgroundColor: '#9B52DC',
              },
          ],
        };
  
      return(
          <TitleCard title={"No of Orders by month (in k)"}>
                  <Scatter options={options} data={data} />
          </TitleCard>
      )
  }
  
  
  export default ScatterChart