import { useParams } from "react-router-dom";
import { UseFetch } from "../hooks/UseFetch";

function Product() {
  const { id } = useParams();
  const { data, isPending, error } = UseFetch(
    `https://dummyjson.com/product/${id}`
  );

  return;
}

export default Product;
