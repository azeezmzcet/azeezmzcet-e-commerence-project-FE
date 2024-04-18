import React from "react";
import { Button, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterProducts } from "../../features/slices/productsSlice";

const NavigateButtons = ({ displayMode = "allButtons" }) => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "Shirt",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
    "jwelleries",
    "perfumes",
    "Caps",
    "sunglasses",
    "watches",
  ];

  const dispatch = useDispatch();

  const handleFilterClick = (category) => {
    dispatch(filterProducts(category));
  };

  if (displayMode === "allButtons") {
    // Display all buttons side by side with responsiveness
    return (
      <div className="flex flex-wrap items-center justify-center space-x-2">
        {buttons.map((button, index) => (
          <div key={index} className="mb-3 lg:mb-2">
            <Link to={`/filteredProducts/${button}`}>
              <Button
                color="gray"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-red-500 duration-300 ease-in-out md:w-32 lg:w-40 xl:w-48"
                onClick={() => handleFilterClick(button)}
              >
                {button}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    );
  } else if (displayMode === "categoriesDropdown") {
    // Display a dropdown menu
    return (
      <Menu>
        <MenuHandler>
          <Button
            color="gray"
            variant="outlined"
            ripple={true}
            className="text-black hover:bg-gray-300 duration-300 ease-in-out shadow-md"
          >
            Search Categories
          </Button>
        </MenuHandler>
        <MenuList>
          {buttons.map((button, index) => (
            <Link to={`/filteredProducts/${button}`} key={index}>
              <MenuItem onClick={() => handleFilterClick(button)} className="hover:bg-gray-100">
                {button}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    );
  }

  return null;
};

export default NavigateButtons;
