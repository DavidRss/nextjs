/* eslint-disable no-unused-vars */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { ArrowRight } from '@heroicons/react/solid';
// import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// ToDo fix dark mode handler -> bars color 

function BarChart(){

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const getMode = () => {
        let mode = localStorage.getItem('theme');
    
        if (mode === 'dark') {
          setIsDarkMode(true);
        } else {
          setIsDarkMode(false);
        }
      };
    
      getMode();      
      const handleStorageChange = () => {
        getMode();
      };
         
      window.addEventListener('storage', handleStorageChange);
          
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      const barColor = isDarkMode ? 'rgba(61,64,87, 0.5)' : 'rgba(255,255,255, 0.5)';
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Store 1',
            data: labels.map(() => { return Math.random() * 1000 +200 }),
            backgroundColor: barColor,
            borderRadius: 7,
          },
          {
            label: 'Store 2',
            data: labels.map(() => { return Math.random() * 1000 + 300 }),
            backgroundColor: barColor,
            borderRadius: 7,
          },
        ],
      };      

    return(

      <div className="card rounded-3xl w-full px-6 py-7 flex flex-col justify-end bg-accent shadow-xl mt-6">
        <div className='flex flex-col gap-3 w-fit'>
          <h2 className='text-4xl font-bold text-white dark:text-primary'>21,500 USD</h2>
          <button className='flex items-center gap-1 text-lg font-semibold bg-transparent border-0 text-white dark:text-primary shadow-none'>
            Revenue report
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-5 h-5 text-white dark:text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        <Bar options={options} data={data} />
      </div>          

    )
}


export default BarChart