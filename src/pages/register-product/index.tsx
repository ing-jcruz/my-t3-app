import { type NextPage } from "next";
import NavBar from "../../components/NavBar";
import ProductForm from "../../components/ProductForm";

const RegisterProduct: NextPage = () => {
  return (
    <>
      <NavBar />
      <ProductForm />
    </>
  );
}

export default RegisterProduct;
