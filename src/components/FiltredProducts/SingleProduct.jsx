import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";

const SingleProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    // Select product from state
    const product = useSelector((state) => state.products.singleProduct);
    const productDetails = product.find((item) => item.id === id);

    // Select user authentication status from state
    const user = useSelector((state) => state.user.user);
    const { authUser } = user;

    // Initialize size and color state
    const [size, setSize] = useState(productDetails?.size?.[0] || "");
    const [color, setColor] = useState(productDetails?.color?.[0] || "");

    // Handle adding item to cart
    const handleAddToCart = () => {
        if (authUser) {
            // Add item to cart
            dispatch(
                addToCart({
                    id: productDetails.id,
                    name: productDetails.name,
                    img: productDetails.img,
                    text: productDetails.text,
                    size,
                    color,
                    price: productDetails.price,
                    amount: 1,
                    totalPrice: productDetails.price,
                })
            );
        }
    };

    return (
        <div className="container mx-auto px-4">
            {productDetails && (
                <div className="flex flex-col md:flex-row items-center py-10">
                    <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={productDetails.img}
                            alt={productDetails.name}
                        />
                    </div>
                    <div className="md:w-1/2 w-full px-4">
                        <div className="max-w-lg">
                            <h5 className="text-2xl font-bold">{productDetails.name}</h5>
                            <p className="text-orange-700 text-xl font-bold">15% OFF</p>
                            <p className="text-gray-600 text-xl">{productDetails.text}</p>

                            <div className="mt-4">
                                <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900">
                                    Pick a size
                                </label>
                                <select
                                    id="size"
                                    name="size"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                >
                                    {productDetails.size.map((sizeOption, index) => (
                                        <option key={index} value={sizeOption}>
                                            {sizeOption}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900">
                                    Pick a color
                                </label>
                                <select
                                    id="color"
                                    name="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                >
                                    {productDetails.color.map((colorOption, index) => (
                                        <option key={index} value={colorOption}>
                                            {colorOption}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <Tooltip
                                content={authUser ? "Add to Cart" : "Please log in to add to cart"}
                                placement="bottom"
                            >
                                <span className="flex flex-col">
                                    <Button
                                        color="gray"
                                        size="lg"
                                        variant="outlined"
                                        ripple={true}
                                        className="w-full mt-4"
                                        onClick={handleAddToCart}
                                        disabled={!authUser} // Disable button if user is not authenticated
                                    >
                                        Add to Cart
                                    </Button>
                                </span>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleProduct;
