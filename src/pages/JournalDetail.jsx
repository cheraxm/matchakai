import React from "react";
import { useParams, Link } from "react-router-dom";
import { allMatchaBoards } from "../data/journal";
import { VscArrowLeft } from "react-icons/vsc";

function JournalDetail() {
  const { journalId } = useParams();
  const journal = allMatchaBoards.find((board) => board.id === journalId);

  if (!journal) {
    return (
      <div className="min-h-screen bg-[#FFF4E7] flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl font-instrument text-red-600">
          Journal Not Found
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Sorry, we couldn't find the journal entry you were looking for.
        </p>
        <Link
          to="/journal"
          className="mt-6 flex items-center gap-2 text-lg text-gray-700 hover:text-black"
        >
          <VscArrowLeft />
          Back to all journals
        </Link>
      </div>
    );
  }

  const renderContent = (content) => {
    if (!content) return null;
    return content.split("\n").map((line, index) => {
      if (line.trim() === "") {
        return <br key={index} />;
      }
      if (line.startsWith("**")) {
        return (
          <h3
            key={index}
            className="text-2xl font-line font-semibold text-gray-800 mt-6 mb-2"
          >
            {line.replace(/\*\*/g, "")}
          </h3>
        );
      }
      if (line.startsWith("* ")) {
        return (
          <div key={index} className="flex items-start">
            <span className="mr-3 mt-1 text-[#5C614A]">•</span>
            <p className="flex-1">{line.substring(2)}</p>
          </div>
        );
      }
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <div className="bg-[#FFF4E7]">
      <section
        className="relative h-[400px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${journal.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />{" "}
        <div className="relative h-full flex flex-col justify-end items-start text-white p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl font-instrument font-bold drop-shadow-md max-w-4xl">
            {journal.title}
          </h1>
        </div>
      </section>

      <section className="bg-[#FFF4E7] py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-7xl">
          <Link
            to="/journal"
            className="flex items-center gap-2 text-lg text-gray-600 hover:text-black mb-10 w-fit">
            <VscArrowLeft />
            Back to Journal
          </Link>

          <div className="max-w-3xl mx-auto">
            <div className="text-lg md:text-xl font-line text-gray-800 leading-relaxed space-y-4">
              {renderContent(journal.fullContent)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JournalDetail;
