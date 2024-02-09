/* eslint-disable no-unused-vars */
import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';
import Subtitle from '../../../components/Typography/Subtitle';

ChartJS.register(ArcElement, Tooltip, Legend,
    Tooltip,
    Filler,
    Legend);

function DoughnutChart(){

    // ToDo
    // fix legend (font, dot)
    // fix gap in DoughnutChart

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
      
      const labels = ['Direct', 'Social', 'Search', 'Email'];
      
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

    return(
        <TitleCard title={"Sources"}>
                <Doughnut options={options} data={data} />
        </TitleCard>
    )
}


export default DoughnutChart