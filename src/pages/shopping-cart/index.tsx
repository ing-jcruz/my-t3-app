import { type NextPage } from "next";
import { trpc } from "../../utils/trpc";
import NavBar from "../../components/NavBar";
import { formatPrice } from "../../common/formatPrice";

const ShoppingCart: NextPage = () => {
  const { data } = trpc.shoppingCart.getAll.useQuery();

  return (
    <>
      <NavBar />
      <div className="mx-auto lg:max-w-7xl">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">#</th>
              <th scope="col" className="py-3 px-6">Producto</th>
              <th scope="col" className="py-3 px-6">Cantidad</th>
              <th scope="col" className="py-3 px-6">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {data?.length
              ? data?.map((product, index) => (
                <tr className="border-b" key={product.id}>
                  <th className="py-3 px-6">{index + 1}</th>
                  <th className="py-3 px-6">{product.name}</th>
                  <th className="py-3 px-6">{product.quantity}</th>
                  <th className="py-3 px-6">{formatPrice(Number(product.subtotal))}</th>
                </tr>
              )
              ) : (
                <tr>
                  <th colSpan={4} className="py-3 px-6 text-center">Sin productos en el carrito de compras</th>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShoppingCart;
