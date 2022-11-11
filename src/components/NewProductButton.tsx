import { useRouter } from "next/router";

const NewProductButton = () => {
  const router = useRouter();

  const newProduct = () => {
    const path = "/register-product";
    router.push(path);
  }

  return (
    <button className="flex text-white py-2 px-4 rounded"
      onClick={newProduct}>
      <svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      Nuevo
    </button>
  );
}

export default NewProductButton;
