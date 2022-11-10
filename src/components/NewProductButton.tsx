import { useRouter } from "next/router";

const NewProductButton = () => {
  const router = useRouter();

  const newProduct = () => {
    const path = "/register-product";
    router.push(path);
  }

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
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
    </button>
  );
}

export default NewProductButton;
