import { useRouter } from "next/router";
const DetailProductPage = () => {
  const {query} = useRouter();
  console.log(query)
  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product : {query.product} </p>
    </div>
  );
};

export default DetailProductPage;
