import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { trpc } from "../../../utils/trpc";
import NavBar from "../../../components/NavBar";
import EditProductButton from "../../../components/EditProductButton";
import DeleteProductButton from "../../../components/DeleteProductButton";
import { formatPrice } from "../../../common/formatPrice";

const ProductDetail: NextPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [inventory, setInventory] = useState(0);
  const [price, setPrice] = useState(0);

  let id = Number(router.query.id) || 0;
  const { data } = trpc.product.getById.useQuery({ id });

  useEffect(() => {
    setName(data?.name || "");
    setSlug(data?.slug || "");
    setDescription(data?.description || "");
    setInventory(data?.inventory || 0);
    setPrice(Number(data?.price) || 0);
  })

  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-2xl px-4 pt-5 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
        </div>
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <p className="text-3xl tracking-tight text-gray-900">{formatPrice(price)}</p>
          <p className="text-sm font-mediud text-gray-900 mt-2">Inventario: {inventory}</p>
        </div>
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
          <div>
            <div className="space-y-6">
              <p className="text-base text-gray-900">{slug}</p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Descripción</h2>
            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{description}</p>
            </div>
            <div className="flex items-center justify-end gap-2 mt-2">
              <EditProductButton id={id} />
              <DeleteProductButton id={id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
