import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div>
      <Card className="w-full md:w-96 relative">
        <Typography
          variant="h4"
          className="mb-2 absolute top-2 right-2 z-10 text-red-700 animate-zoom-in-out text-sm md:text-lg"
        >
          SALE%
        </Typography>
        <CardHeader floated={false} className="h-64 md:h-80 lg:h-96">
          <img src={img} alt={name} className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody className="text-center p-4 md:p-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-2 text-sm md:text-md lg:text-lg"
          >
            {name}
          </Typography>
          <Typography color="gray" className="font-medium text-xs md:text-sm lg:text-md">
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4 text-xs md:text-sm lg:text-md">
            <Typography color="red" className="font-medium text-xs md:text-sm lg:text-md">
              Size left:{" "}
              <span className="text-gray-400 text-xs md:text-sm lg:text-md">
                {defaultSize}
              </span>
            </Typography>
            <Typography color="gray" className="font-medium text-xs md:text-sm lg:text-md">
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-4 md:gap-7 pt-2">
          <Tooltip content="Add to Cart" placement="bottom">
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
              size="sm md:lg"
              color="gray"
              variant="outlined"
              ripple={true}
            >
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
