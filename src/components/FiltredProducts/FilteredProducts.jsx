import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Error from "../Error/Error";

const FilteredProducts = () => {
  const { type } = useParams(); 
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; 

  const filteredProducts = products.filter((product) => product.type === type);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="filtered-products-container mx-4">
      <h1 className="text-gray-600 text-4xl md:text-3xl lg:text-4xl font-bold tracking-normal leading-none">
        {type}
      </h1>
      
      {error ? (
        <Error />
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-8 gap-10">
            {currentProducts.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                name={product.name}
                text={product.text}
                img={product.img}
                price={product.price}
                colors={product.color}
              />
            ))}
          </div>

          <div className="pagination-controls flex justify-center py-4">
            <button
              className="btn-prev mx-2 px-4 py-2 bg-gray-300 text-gray-800 rounded md:text-sm lg:text-base"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="mx-2 text-sm md:text-sm lg:text-base">Page {currentPage} of {totalPages}</span>
            <button
              className="btn-next mx-2 px-4 py-2 bg-gray-300 text-gray-800 rounded md:text-sm lg:text-base"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilteredProducts;
