import React, { useEffect, useState } from "react";
import Page from "../layouts/Page/Page";
import Container from "../layouts/Container/Container";
import Aside from "../components/aside/Aside";
import { projectService } from "../services/FirebaseService";
import { PROJECT_ID } from "../constants/constants";
import Spinner from "../components/spinner/Spinner";

function Leaderboard() {
  const pageSize = 10;
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [lastVisible, setLastVisible] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [top3Participants, setTop3Participants] = useState([]);

  const loadParticipants = async () => {
    setIsLoading(true);

    const totalCnt = await projectService.getParticipantTotalCount(PROJECT_ID);
    setTotalCount(totalCnt);
    setTotalPages(Math.ceil(totalCnt / pageSize));
    console.log("==== totalCng: ", totalCnt);

    const { resultArray, lastVisibleItem } =
      await projectService.getParticipants(PROJECT_ID, pageSize, lastVisible);
    
    setIsLoading(false);

    console.log("===== resultArray: ", resultArray);
    console.log("===== lastVisibleItem: ", lastVisible);
    setParticipants(resultArray);
    setLastVisible(lastVisibleItem);

    if (currentPage == 1) {
      setTop3Participants(resultArray.slice(0, 3));
    }
  };

  useEffect(() => {
    loadParticipants();
  }, []);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <Page>
      <section className="bg-white w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0">
        <Container>
          <div className="w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-32 items-center xl:items-start">
            <div className="relative flex flex-col w-full">
              <h1 className="text-gray-900 font-bold text-3xl mb-8 text-left">
                Leaderboard
              </h1>
              <div className="flex flex-wrap xl:flex-row gap-4">
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  {top3Participants.map((rowData, index) => (
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
                      <div className="stat text-gray-900">
                        <div className="stat-title text-gray-900 text-left font-semibold opacity-70">
                          {`${index + 1}st place`}
                        </div>
                        <div className="stat-value text-xl font-extrabold text-left">
                          {rowData.username}
                        </div>
                        <div className="stat-desc flex gap-1.5 text-gray-900 font-normal text-sm opacity-40 mt-1">
                          <span>
                            {rowData.donations || rowData?.spending} Dons
                          </span>
                          ●
                          <span>
                            {rowData.points || rowData?.ballance?.points} Points
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <div className="overflow-x-auto border border-neutral rounded-lg scroll min-h-[500px]">
                  <table className="table table-zebra">
                    <thead className="bg-pagBg">
                      <tr className="border-pagBg text-gray-900 opacity-30 text-base font-semibold">
                        <th className="w-20 text-center">Place</th>
                        <th>Name</th>
                        <th>Dons</th>
                        <th>Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {participants.map((rowData, index) => (
                        <tr key={index} className="border-neutra text-gray-900">
                          <th className="text-base font-semibold text-center">
                            {index + 1 + (currentPage - 1) * pageSize}
                          </th>
                          <td>
                            <div className="flex items-center space-x-3 w-64">
                              <div className="w-12 h-12 userIcon rounded-lg bg-primary flex justify-center items-center text-lg font-bold text-white">
                                <span>
                                  {rowData.username
                                    .split(" ")
                                    .map((word) => word.charAt(0).toUpperCase())
                                    .join("")}
                                </span>
                              </div>
                              <div>
                                <div className="font-bold text-base">
                                  {rowData.username}
                                </div>
                                <div className="text-sm opacity-50">
                                  {rowData.country}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-base font-semibold">
                            {rowData.donations || rowData?.spending}
                          </td>
                          <td className="text-base font-semibold">
                            {rowData.points || rowData?.ballance?.points}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex w-full flex-col sm:flex-row justify-between items-center mt-10">
                  <div className="flex sm:flex-1 sm:items-center sm:justify-between w-full mb-4 sm:mb-0">
                    <div>
                      <p className="text-gray-900 font-semibold text-base">
                        Showing
                        <span className="font-medium"> 1 </span>
                        to
                        <span className="font-medium"> 10 </span>
                        of
                        <span className="font-medium">
                          {" "}
                          {participants.length}{" "}
                        </span>
                        results
                      </p>
                    </div>
                  </div>
                  <div className="join border-none w-full sm:w-fit flex justify-center rounded-r-lg sm:bg-transparent sm:rounded-none">
                    {Array.from({ length: totalPages }).map((_, page) => (
                      <button
                        key={page}
                        className={`join-item btn text-base bg-pagBg ${
                          page + 1 === currentPage
                            ? "bg-opacity-100 text-gray-900"
                            : "bg-opacity-50 text-gray-900 text-opacity-20"
                        } border-none hover:bg-pagBg hover:bg-opacity-100 hover:text-gray-900 rounded-lg`}
                        onClick={() => handleChangePage(page + 1)}
                      >
                        {page + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {isLoading && <Spinner position="absolute" />}
            </div>
            <Aside />
          </div>
        </Container>
      </section>
    </Page>
  );
}

export default Leaderboard;
