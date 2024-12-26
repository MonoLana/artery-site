"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Productdetails from "@/components/productdetails";

const Details = () => {
  const router = useRouter();
  const { id } = useParams();
  console.log(id);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="">
      <Navbar />
      <div className="p-20 flex flex-col justify-center">
        <Productdetails props={product} />
        <Footer />
      </div>
    </div>
  );
};

export default Details;
