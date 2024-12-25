"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Productdetails from "@/components/productdetails";
import Productsection from "@/components/hotproduct";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(
            `https://43207vdf-8080.asse.devtunnels.ms/product/${id}`,
          );

          if (!response.ok) {
            throw new Error(`Error fetching product: ${response.statusText}`);
          }

          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error("Error fetching product details:", error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchProductDetails();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center pb-20 sm:p-20 scrollbar-hidden">
        <Productdetails props={product} />
      </div>
      <div className="mt-16 flex flex-col items-start">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">Lainnya di toko ini</h1>
          <Image
            src="/images/Divider.png"
            width={368}
            height={0}
            alt="Divider"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-20 sm:p-8 scrollbar-hidden">
        <Productsection />
        <Footer />
      </div>
    </div>
  );
};

export default Details;
