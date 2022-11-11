import { useState } from "react";
import ViewProductButton from "./ViewProductButton";
import AddToCartButton from "./AddToCartButton";
import { formatPrice } from "../common/formatPrice";

type ProductCardProps = {
  id: number;
  name: string;
  slug: string;
  description: string;
  inventory: number;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  slug,
  description,
  inventory,
  price
}) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="group relative border p-4">
      <h3 className="text-gray-800 font-bold">{name}</h3>
      <p className="mt-1 text-sm text-gray-500">{slug}</p>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      <p className="mt-1 text-sm text-gray-500">Inventario: {inventory}</p>
      <p className="mt-1 text-sm text-gray-800 font-medium">{formatPrice(price)}</p>
      <div>
        <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none mt-2"
          id="quantity"
          type="number"
          min={0}
          max={inventory}
          value={quantity}
          onChange={({ target }) => setQuantity(Number(target.value))}
        />
      </div>
      <div className="flex items-center justify-end gap-2 mt-2">
        <ViewProductButton id={id} />
        <AddToCartButton
          product_id={id}
          name={name}
          price={price}
          inventory={inventory}
          quantityToAdd={quantity} />
      </div>
    </div>
  );
}

export default ProductCard;
