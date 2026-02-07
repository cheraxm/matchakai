import MatchaJournal from "../components/MatchaJournal";

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";

import { allMatchaBoards } from "../data/journal";
import { Link } from 'react-router-dom';



const Journal = () => {
  const navigate = useNavigate();

  const [pageNum, setPageNum] = useState(1);
  const matchaPages = Math.ceil(allMatchaBoards.length / 6);
  const [matchaBoards, setMatchaBoards] = useState([]);

  useEffect(() => {
    const start = (pageNum - 1) * 6;
    const stop = pageNum * 6;
    console.log(start, stop);
    setMatchaBoards(allMatchaBoards.slice(start, stop));
  }, [pageNum]);

  const previousPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    } else {
      setPageNum(pageNum);
    }
  };

  const nextPage = () => {
    if (pageNum < matchaPages) {
      setPageNum(pageNum + 1);
    } else {
      setPageNum(pageNum);
    }
  };

  const handleCreateJournal = () => {
    navigate('/journal/new');
  };

  return (
    <div>
      <section className='bg-cover bg-center bg-[url("assets/bgjournal.png")] px-8 pt-32 pb-36 flex flex-col'>
        <div className="flex-grow flex flex-col justify-center items-center text-center gap-6 mt-12">
          <h1 className="text-9xl text-white font-instrument text-center">
            Journal
          </h1>
          <button onClick={handleCreateJournal} className="text-white text-xl font-instrument bg-[#B5C196] py-3 px-7 rounded-full w-fit text-center cursor-pointer transition-colors hover:bg-[#495632]">
            Create Journal
          </button>
        </div>
      </section>

      <section className="bg-[#FFF4E7] py-20 px-4">
        <div className="container mx-auto max-w-7xl flex flex-col items-center gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch h-full">
            {matchaBoards.map((item) => (
              <Link key={item.id} to={`/journal/${item.id}`}>

                <div className="transition-transform hover:scale-105 duration-300 h-full">
                  <MatchaJournal
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                </div>

              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 py-4">
            <button
              onClick={previousPage}
              disabled={pageNum === 1}
              className="size-9 grid place-items-center rounded-full text-2xl text-[#645840] hover:bg-[#CFBB9A] active:scale-[.98] disabled:opacity-20 cursor-pointer"
            >
              <VscArrowLeft />
            </button>
            <div className="bg-transparent border-[#645840] border-2 rounded-md px-6 py-1">
              <p className="font-instrument text-base text-[#645840]">
                Page {pageNum}
              </p>
            </div>
            <button
              onClick={nextPage}
              disabled={pageNum === matchaPages}
              className="size-9 grid place-items-center rounded-full text-2xl text-[#645840] hover:bg-[#CFBB9A] active:scale-[.98] disabled:opacity-20 cursor-pointer"
            >
              <VscArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
