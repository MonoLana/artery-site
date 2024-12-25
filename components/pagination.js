"use client";
import { useState, useEffect } from "react";
import Productcard from "./productcard";

const Pagination = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(null);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://43207vdf-8080.asse.devtunnels.ms/product/all?page=${page}`,
      );
      const result = await response.json();

      if (result?.data && result?.pagination) {
        setData(result.data);
        setPagination(result.pagination);
      } else {
        console.error("Invalid response structure:", result);
        setData([]);
        setPagination(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (!loading && data) {
      if (searchQuery) {
        const filtered = data.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(data);
      }
    }
  }, [searchQuery, data, loading]);

  const nextPage = () => {
    if (pagination?.totalPages && currentPage < pagination.totalPages) {
      setCurrentPage((prev) => Math.min(prev + 1, pagination.totalPages));
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  const total = pagination?.totalPages || 1;

  return (
    <div>
      {filteredData.length > 0 ? (
        <Productcard props={filteredData} />
      ) : (
        <div className="text-center py-4">No products found.</div>
      )}
      <div className="flex justify-between items-center px-4 py-3 w-full mt-6">
        <div className="text-md text-black">
          Page <b>{currentPage}</b> of {total}
        </div>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black bg-White hover:bg-gray-100 active:bg-gray-200 border border-darkBrown transition duration-200 ease ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black bg-White hover:bg-gray-100 active:bg-gray-200 border border-darkBrown transition duration-200 ease ${
              currentPage === total ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={nextPage}
            disabled={currentPage === total}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
