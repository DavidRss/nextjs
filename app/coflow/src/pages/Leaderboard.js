import React, { useEffect, useState }  from 'react';
import Page from '../layouts/Page/Page';
import Container from '../layouts/Container/Container';
import Aside from '../components/aside/Aside';
import { boardData } from '../stores/boardData';
import { useUser } from "../services/UserContext";

function Leaderboard() {   

    const [tableData, setTableData] = useState([]);

    const { userData } = useUser()

    useEffect(()=>{
        boardData ? setTableData(boardData) : setTableData([]);

        if (boardData && userData) {
            const updatedTableData = [...boardData, userData];

            updatedTableData.sort((a, b) => {
                const pointsA = a.ballance ? a.ballance.points : 0;
                const pointsB = b.ballance ? b.ballance.points : 0;
                return pointsB - pointsA;
            });

            setTableData(updatedTableData);
          } else if (boardData) {
            setTableData(boardData);
          } else {
            setTableData([]);
          }
    },[userData]);
    
    const pageSize = 10;
    const totalPages = Math.ceil(tableData.length / pageSize);
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const displayedData = tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    
    return (
        <Page>
             <section className='bg-secBg w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0'>
                <Container>
                    <div className='w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-32 items-center xl:items-start'>
                        <div className='flex flex-col w-full'>
                            <h1 className='text-white font-bold text-3xl mb-8 text-left'>Leaderboard</h1>
                            <div className='flex flex-wrap xl:flex-row gap-4'>
                                <div className="flex flex-col md:flex-row gap-4 w-full">
                                    {tableData.slice(0, 3).map((rowData, index) => (
                                        <div
                                        key={index}
                                        className={`stats md:max-w-sm ${
                                            index === 0
                                            ? "bg-goldCard"
                                            : index === 1
                                            ? "bg-silverCard"
                                            : "bg-bronzeCard"
                                        } text-primary-content`}
                                        >
                                        <div className="stat text-slate-900">
                                            <div className="stat-title text-slate-900 text-left font-semibold opacity-70">
                                            {`${index + 1}st place`}
                                            </div>
                                            <div className="stat-value text-xl font-extrabold text-left">
                                            {rowData.name}
                                            </div>
                                            <div className="stat-desc flex gap-1.5 text-slate-900 font-normal text-sm opacity-40 mt-1">
                                            <span>{rowData.dons || rowData.spending} Dons</span>
                                            ●
                                            <span>{rowData.points || rowData.ballance.points} Points</span>
                                            </div>
                                        </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className="overflow-x-auto bg-mainCard rounded-lg scroll min-h-[500px]">
                                    <table className="table">
                                        <thead className='bg-thrdBg'>
                                        <tr className=' text-white opacity-30 text-base font-semibold'>
                                            <th className='w-20 text-center'>Place</th>
                                            <th>Name</th>
                                            <th>Dons</th>
                                            <th>Points</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {displayedData.map((rowData, index) => (
                                            <tr key={index} className="text-white-90 even:bg-even odd:bg-odd">
                                                <th className="text-base font-semibold text-center">{index + 1 + (currentPage - 1) * pageSize}</th>
                                                <td>
                                                <div className="flex items-center space-x-3 w-64">
                                                    <div className="w-12 h-12 userIcon rounded-lg bg-main flex justify-center items-center text-lg font-bold text-white">
                                                        <span>{rowData.name.split(' ').map(word => word.charAt(0).toUpperCase()).join('')}</span>
                                                    </div>
                                                    <div>
                                                    <div className="font-bold text-base">{rowData.name}</div>
                                                    <div className="text-sm opacity-50">{rowData.country}</div>
                                                    </div>
                                                </div>
                                                </td>
                                                <td className="text-base font-semibold">{rowData.dons || rowData.spending}</td>
                                                <td className="text-base font-semibold">{rowData.points || rowData.ballance.points}</td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className='flex w-full flex-col sm:flex-row justify-between items-center mt-10'>
                                        <div className="flex sm:flex-1 sm:items-center sm:justify-between w-full mb-4 sm:mb-0">
                                            <div>
                                            <p className="text-white font-semibold text-base">
                                                Showing
                                                <span className="font-medium"> 1 </span>
                                                to
                                                <span className="font-medium"> 10 </span>
                                                of
                                                <span className="font-medium"> {tableData.length} </span>
                                                results
                                            </p>
                                            </div>
                                        </div>
                                        <div className="join border-none w-full sm:w-fit flex justify-center rounded-r-lg sm:bg-transparent sm:rounded-none">
                                            {Array.from({ length: totalPages }).map((_, page) => (
                                                <button
                                                key={page}
                                                className={`join-item btn text-base bg-secBg ${
                                                    page + 1 === currentPage ? "bg-opacity-100 text-white" : "bg-opacity-50 text-white text-opacity-20"
                                                } border-none hover:bg-secBg hover:bg-opacity-100 hover:text-white rounded-lg`}
                                                onClick={() => handleChangePage(page + 1)}
                                                >
                                                {page + 1}
                                                </button>
                                            ))}
                                        </div>
                                   </div>
                                </div>
                            </div>
                        <Aside />
                    </div>
                </Container>
             </section>
        </Page>
    );
}

export default Leaderboard;