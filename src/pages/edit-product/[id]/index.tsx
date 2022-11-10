import { type NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import NavBar from "../../../components/NavBar";
import ProductForm from "../../../components/ProductForm";

const EditProduct: NextPage = () => {
  const router = useRouter();
  let id = router.query.id || 0;
  const { data } = trpc.product.getById.useQuery({ id: Number(id) });

  return (
    <>
      <NavBar />
      <ProductForm
        id={data?.id}
        name={data?.name}
        slug={data?.slug}
        description={data?.description}
        inventory={data?.inventory}
        price={Number(data?.price)}
      />
    </>
  );
}

export default EditProduct;
