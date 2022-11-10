import { trpc } from "../utils/trpc";

type AddToCartPropsButton = {
  product_id: number;
  price: number;
  inventory: number;
  quantityToAdd: number;
}

const AddToCartButton: React.FC<AddToCartPropsButton> = ({ product_id, price, inventory, quantityToAdd }) => {
  const adds = trpc.shoppingCart.create.useMutation();

  const validationToAddToCart = () => {
    return quantityToAdd > 0 && quantityToAdd <= inventory;
  }

  const addToCart = () => {
    if (validationToAddToCart()) {
      try {
        adds.mutateAsync({
          product_id,
          quantity: quantityToAdd,
          subtotal: price * quantityToAdd
        });
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
      onClick={addToCart}>
      <svg xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    </button>
  );
}

export default AddToCartButton;