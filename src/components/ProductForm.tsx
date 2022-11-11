import { useState } from "react";
import { trpc } from "../utils/trpc";

type ProductFormProps = {
  id?: number;
  name?: string;
  slug?: string;
  description?: string;
  inventory?: number;
  price?: number;
}

const ProductForm: React.FC<ProductFormProps> = ({
  id,
  name,
  slug,
  description,
  inventory,
  price
}) => {
  const [productId, setProductId] = useState(id || null);
  const [productName, setProductName] = useState(name || "");
  const [productSlug, setProductSlug] = useState(slug || "");
  const [productDescription, setProductDescription] = useState(description || "");
  const [productInventory, setProductInventory] = useState(inventory || 0);
  const [productPrice, setProductPrice] = useState(price || 0);
  const [notification, setNotification] = useState("");

  const createProduct = trpc.product.create.useMutation();
  const editProduct = trpc.product.update.useMutation();

  const resetNotification = () => {
    setTimeout(() => {
      setNotification("");
    }, 2000);
  }

  const resetForm = () => {
    setProductId(null);
    setProductName("");
    setProductSlug("");
    setProductDescription("");
    setProductInventory(0);
    setProductPrice(0);
  }

  const generateSlug = (product: string) => {
    let productInitialLetters = product.trim().substring(0, 3);
    let code = Math.random().toString(36).substring(2, 7);
    let result = product ? productInitialLetters + code : "";
    setProductSlug(result.toUpperCase());
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (productId == null) {
      try {
        createProduct.mutateAsync({
          name: productName.trim(),
          slug: productSlug.trim(),
          description: productDescription.trim(),
          inventory: productInventory,
          price: productPrice
        });
        setNotification("Guardado");
        resetForm();
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        editProduct.mutateAsync({
          id: productId,
          name: productName.trim(),
          slug: productSlug.trim(),
          description: productDescription.trim(),
          inventory: productInventory,
          price: productPrice
        });
        setNotification("Guardado");
      } catch (err) {
        console.error(err);
      }
    }
    resetNotification();
  }

  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <span>{notification}</span>
      <form className="w-full max-w-sm"
        onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name">
            Nombre *
          </label>
          <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            id="name"
            type="text"
            value={productName}
            onChange={({ target }) => {
              setProductName(target.value);
              generateSlug(target.value);
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="slug">
            Slug
          </label>
          <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            id="slug"
            type="text"
            value={productSlug}
            disabled
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description">
            Descripción *
          </label>
          <textarea className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            id="description"
            rows={5}
            value={productDescription}
            onChange={({ target }) => setProductDescription(target.value)}
            required
          ></textarea>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="inventory">
              Inventario *
            </label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              id="inventory"
              type="number"
              min={0}
              value={productInventory}
              onChange={({ target }) => setProductInventory(Number(target.value))}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price">
              Precio *
            </label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              id="price"
              type="number"
              min={0}
              step="any"
              value={productPrice}
              onChange={({ target }) => setProductPrice(Number(target.value))}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
