"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Item = ({}) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(null);

  const nextPage = async () => {
    if (currentPage < total) {
      setCurrentPage(currentPage + 1);
    }
    try {
      const response = await fetch(
        `https://43207vdf-8080.asse.devtunnels.ms/product/all?page=${currentPage}`,
      );
      const result = await response.json();
      setData(result.data);
      setPagination(result.pagination);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      console.log(data);
    }
  };

  const prevPage = async () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
    try {
      const response = await fetch(
        `https://43207vdf-8080.asse.devtunnels.ms/product/all?page=${currentPage}`,
      );
      const result = await response.json();
      setData(result.data);
      setPagination(result.pagination);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      console.log(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://43207vdf-8080.asse.devtunnels.ms/product/all?page=${currentPage}`,
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

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const total = pagination?.totalPages;

  return (
    <div>
      {/* Product Card*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {data.map((product) => (
          <div
            key={product.id}
            className="min-w-[300px] min-h-[383px] border-2 border-darkBrown mr-2"
          >
            {/* Product Image */}
            <div className="w-auto h-auto">
              <Image
                src="/images/productExample.png"
                alt="Product image"
                width={300}
                height={383}
              />
            </div>
            {/* Product Information*/}
            <div className="flex justify-between p-2 border-t-2 border-darkBrown">
              <div className="p-2 flex flex-col">
                {/* name + category */}
                <div className="flex flex-row gap-x-2">
                  <p className="text-lg text-Black font-bold">Lintong</p>
                  <Image
                    src="/images/verticalDivider.png"
                    alt="divider"
                    width={1}
                    height={5}
                  />
                  <p className="text-Black/70">Arabika</p>
                </div>
                {/* type */}
                <p className="text-Black/70"> Caramel Bright </p>
                {/* Price */}
                <p className="text-Black text-lg font-bold">Rp. 199.000</p>
              </div>
              <div className="flex content-center mr-1">
                <button>
                  <Image
                    src="/images/add_shopping_cart.png"
                    alt="cart button"
                    width={34}
                    height={34}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-sm text-black">
          page <b>{currentPage}</b> of {total}
        </div>
        <div className="flex space-x-1">
          <button
            className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black bg-primaryButton hover:bg-primaryButtonHover active:bg-primaryButtonActive rounded transition duration-200 ease"
            onClick={prevPage}
          >
            Prev
          </button>
          <button
            className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black bg-primaryButton hover:bg-primaryButtonHover active:bg-primaryButtonActive rounded transition duration-200 ease"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
