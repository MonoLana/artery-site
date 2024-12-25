"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Productcard from "./productcard";

const Pagination = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://43207vdf-8080.asse.devtunnels.ms/product/all?page=${page}`,
      );
      const result = await response.json();
      setData(result.data);
      setPagination(result.pagination);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const nextPage = () => {
    if (pagination?.totalPages && currentPage < pagination.totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  const total = pagination?.totalPages || 1;

  return (
    <div>
      <Productcard props={data} />
      <div className="flex justify-between items-center px-4 py-3 w-full mt-6">
        <div className="text-md text-black">
          page <b>{currentPage}</b> of {total}
        </div>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black bg-White hover:bg-gray-100 active:bg-gray-200 border border-darkBrown transition duration-200 ease ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={prevPage}
            disabled={currentPage == 1}
          >
            Prev
          </button>
          <button
            className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black bg-White hover:bg-gray-100 active:bg-gray-200 border border-darkBrown transition duration-200 ease ${
              currentPage === total ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={nextPage}
            disabled={currentPage == total}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
