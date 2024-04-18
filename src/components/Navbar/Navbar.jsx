import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/slices/authSlice";
import { Avatar, Tooltip } from "@material-tailwind/react";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
    // Initialize useNavigate hook
    const navigate = useNavigate();

    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const user = useSelector((state) => state.user.user);
    const { name, image } = user;
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(true);
    };

    // Function to handle sign-in button click
    const handleSignInClick = () => {
        navigate("/login"); // Redirects user to the login page
    };

    // Function to handle logout
    const handleLogout = () => {
        dispatch(logout()); // Dispatch logout action to clear user data
        navigate("/login"); // Redirect to the login page
    };

    return (
        <>
            {/* Top Bar */}
            <div className="bg-black p-4 w-full flex justify-center items-center">
                <p className="text-white font-inter text-2xl font-bold">E-Commerce Shopping</p>
            </div>

            {/* Navbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md">
                
                {/* Logo */}
                <img className="h-12 w-auto sm:h-20" src={logo} alt="store logo" />

                {/* Navigation Buttons */}
                <div className="mt-4 sm:mt-0">
                    <NavigateButtons displayMode="categoriesDropdown" />
                </div>

                {/* User Actions */}
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    
                    {/* Wishlist */}
                    <div className="flex items-center cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#000"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.313 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>
                        <p className="ml-2">Wishlist</p>
                    </div>

                    {/* Shopping Bag */}
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={handleOpen}
                    >
                        {totalAmount > 0 ? (
                            <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                                {totalAmount}
                            </span>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                        )}
                        <p className="ml-2">Shopping Bag</p>
                        {open && <Cart openModal={open} setOpen={setOpen} />}
                    </div>

                    {/* Sign In Button */}
                    <div>
                        <button onClick={handleSignInClick} className="btn-signin">


                        {image && <Avatar src={image} alt="user avatar" size="sm" />}
                        <Tooltip content={name} placement="bottom">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        </Tooltip>
                            LogIn
                        </button>
                    </div>

                    {/* User Avatar and Logout */}
                    <div className="flex items-center cursor-pointer" onClick={handleLogout}>
                       
                        <p className="ml-2">Logout</p>
                    </div>
                </div>
            </div>

            {/* Marquee Text */}
            <div className="bg-black p-3 w-full flex items-center justify-between">
                <p className="text-white font-inter text-base font-medium w-1/3">
                    <marquee behavior="scroll" direction="left" scrollamount="5">50% OFF</marquee>
                </p>
                <p className="text-white font-inter text-base font-medium w-1/3 mx-4">
                    <marquee behavior="scroll" direction="left" scrollamount="5">Free Shipping and Returns</marquee>
                </p>
                <p className="text-white font-inter text-base font-medium w-1/3">
                    <marquee behavior="scroll" direction="left" scrollamount="5">Different Payment Methods</marquee>
                </p>
            </div>
        </>
    );
};

export default Navbar;
