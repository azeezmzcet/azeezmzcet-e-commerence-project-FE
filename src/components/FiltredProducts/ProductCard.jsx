import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productsSlice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/` + id}>
      <Card
        className="w-full md:w-80 lg:w-96"
        onClick={() => dispatch(singleProduct(id))}
      >
        <CardHeader
          color="blue"
          className="relative h-64 md:h-80 lg:h-96"
        >
          <img src={img} alt="Product" className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2 text-sm md:text-md lg:text-lg">
            {name}
          </Typography>
          <Typography className="text-xs md:text-sm lg:text-md">
            {text}
          </Typography>
        </CardBody>
        <CardFooter
          divider
          className="flex items-center justify-between py-3 text-xs md:text-sm lg:text-md"
        >
          <Typography variant="small">{price} RS:</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => (
              <span
                key={index}
                className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
