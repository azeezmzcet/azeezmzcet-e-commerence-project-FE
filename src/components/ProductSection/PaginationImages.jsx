import React, { useState } from 'react';

const PaginatedImages = ({ images }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(images.length / itemsPerPage);

    const changePage = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="container mx-auto px-4">
            {/* Render the images for the current page */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
                {currentItems.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto rounded-lg"
                    />
                ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center items-center space-x-4">
                <button
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded text-gray-800 hover:bg-gray-400"
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded text-gray-800 hover:bg-gray-400"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginatedImages;
