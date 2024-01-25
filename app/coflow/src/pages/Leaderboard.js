import React, { useEffect, useRef, useState } from "react";
import Page from "../layouts/Page/Page";
import Container from "../layouts/Container/Container";
import Aside from "../components/aside/Aside";
import { projectService } from "../services/firebase.service";
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
      <section className="bg-secBg w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0">
        <Container>
          <div className="w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-6 items-center xl:items-start">
            <div className="flex flex-col w-full">
              <h1 className="text-white font-bold text-3xl mb-8 text-left">
                Leaderboard
              </h1>
              <div className="flex flex-wrap xl:flex-row gap-4">
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  {top3Participants.map((rowData, index) => (
                    <div
                      key={index}
                      className={`stats w-full ${
                        index === 0
                          ? "bg-mainCard"
                          : index === 1
                          ? "bg-mainCard"
                          : "bg-mainCard"
                      } text-white`}
                    >
                      <div className="stat flex justify-between items-center text-white">
                        <div className="flex flex-col gap-2">
                          <div className="stat-value text-lg font-semibold text-left">
                            {rowData.username}
                          </div>
                          <div className="stat-desc flex gap-1.5 text-white text-opacity-50 font-normal text-sm opacity-40 mt-1">
                            <span>{rowData.dons || rowData.spending} Dons</span>
                            <span>
                              {rowData.points || rowData.ballance.points} Points
                            </span>
                          </div>
                        </div>
                        <div className="stat-title text-white text-opacity-20 text-7xl font-black text-left">
                          {`${index + 1}`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <div className="overflow-x-auto bg-mainCard rounded-lg scroll min-h-[500px]">
                  <table className="table">
                    <thead className="bg-thrdBg">
                      <tr
                        className=" text-white text-base font-semibold"
                        style={{ borderColor: "rgba(242, 242, 242, 0.12)" }}
                      >
                        <th className="w-20 text-center">Place</th>
                        <th>Nom</th>
                        <th>Participation</th>
                        <th>Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {participants.map((rowData, index) => (
                        <tr
                          key={index}
                          className="text-white-90 even:bg-even odd:bg-odd"
                          style={{ borderColor: "rgba(242, 242, 242, 0.12)" }}
                        >
                          <th className="text-base font-semibold text-center">
                            {index + 1 + (currentPage - 1) * pageSize}
                          </th>
                          <td>
                            <div className="flex items-center space-x-3 w-64">
                              <div className="w-12 h-12 userIcon rounded-lg bg-main flex justify-center items-center text-lg font-bold text-white">
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
                      <p className="text-white font-semibold text-base">
                        Résultat
                        <span className="font-medium"> 1 </span>à
                        <span className="font-medium"> 10 </span>
                        sur
                        <span className="font-medium">
                          {" "}
                          {participants.length}{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="join border-none w-full sm:w-fit flex justify-center rounded-r-lg sm:bg-transparent sm:rounded-none">
                    {Array.from({ length: totalPages }).map((_, page) => (
                      <button
                        key={page}
                        className={`join-item btn text-base bg-secBg ${
                          page + 1 === currentPage
                            ? "bg-opacity-100 text-white"
                            : "bg-opacity-50 text-white text-opacity-20"
                        } border-none hover:bg-secBg hover:bg-opacity-100 hover:text-white rounded-lg`}
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
