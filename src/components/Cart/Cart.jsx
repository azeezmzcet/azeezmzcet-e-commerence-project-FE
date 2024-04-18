import React, { useState } from "react";
import { Fragment } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../features/slices/cartSlice";

const Cart = ({ openModal, setOpen }) => {
    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();

    // State for handling form modal visibility
    const [showFormModal, setShowFormModal] = useState(false);
    // State for storing form data
    const [formData, setFormData] = useState({ name: "", phone: "", address: "" });
    // State for displaying thank you message
    const [showThankYou, setShowThankYou] = useState(false);

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleFormSubmit = () => {
        // Perform any form validation or other actions here
        // For demonstration purposes, just show the thank you message
        setShowFormModal(false);
        setShowThankYou(true);
        setOpen(false);
        // Clear the cart after purchase is completed
        dispatch(clearCart());
    };

    return (
        <div>
            {cart.length > 0 ? (
                <Fragment>
                    <Dialog
                        className="border-0 outline-0"
                        open={openModal}
                        handler={() => setOpen(false)}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}
                    >
                        <DialogHeader>Shopping Bag</DialogHeader>
                        <DialogBody divider className="flex flex-col justify-center items-start">
                            {cart.map((item, index) => (
                                <div key={index}>
                                    <div className="grid grid-cols-2 py-4">
                                        <div>
                                            <img
                                                className="h-[125px] rounded-md"
                                                src={item.img}
                                                alt={item.name}
                                            />
                                            <div className="flex flex-col items-start">
                                                <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                                                    {item.name}
                                                </h4>
                                            </div>
                                            <div className="max-w-xs">
                                                <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                                                Selected size:{" "}
                                                <span className="ml-2">{item.size}</span>
                                            </p>
                                            <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                                                Selected color:{" "}
                                                <span className="ml-2 rounded-full px-2" style={{ backgroundColor: item.color }}>
                                                </span>
                                            </p>
                                            <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                                                Amount: <span className="ml-2">{item.amount}</span>
                                            </p>
                                            <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                                                Single Item Price: <span className="ml-2">{item.price}RS:</span>
                                            </p>
                                            <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                                                Total Item Prices: <span className="ml-2">{item.totalPrice}RS:</span>
                                            </p>
                                            <div className="pt-4">
                                                <Tooltip content="Remove from the Cart" placement="bottom">
                                                    <Button
                                                        onClick={() => dispatch(removeFromCart(item))}
                                                        size="sm"
                                                        color="red"
                                                        ripple={true}
                                                        variant="filled"
                                                    >
                                                        Remove
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </DialogBody>
                        <DialogFooter className="flex justify-between items-center">
                            <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                                Total Price of All Products: <span className="ml-2">RS:{totalPrice}</span>
                            </p>
                            <Button
                                color="green"
                                onClick={handleFormSubmit} // Handle the Buy button click
                            >
                                Buy
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </Fragment>
            ) : (
                <Fragment>
                    <Dialog
                        className="border-0 outline-0"
                        open={openModal}
                        handler={() => setOpen(false)}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}
                    >
                        <DialogHeader>Shopping Bag</DialogHeader>
                        <DialogBody divider>
                            <div>
                                <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                                    Your bag is empty
                                </h1>
                                <p className="text-black text-base font-inter tracking-normal leading-none ">
                                    Add some products
                                </p>
                            </div>
                        </DialogBody>
                    </Dialog>
                </Fragment>
            )}

            {/* Dialog for thank you message */}
            <Dialog
                className="border-0 outline-0"
                open={showThankYou}
                handler={() => setShowThankYou(false)}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>Thank you for shopping!</DialogHeader>
                <DialogBody divider>
                    <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                        Your purchase has been completed.
                    </p>
                </DialogBody>
                <DialogFooter>
                    <Button color="blue" onClick={() => setShowThankYou(false)}>
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default Cart;
