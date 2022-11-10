import { useRouter } from "next/router";

type EditProductButtonProps = {
  id: number;
}

const EditProductButton: React.FC<EditProductButtonProps> = ({ id }) => {
  const router = useRouter();

  const editProduct = () => {
    const path = `/edit-product/${id}`;
    router.push(path);
  }

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
      onClick={editProduct}>
      <svg xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>
    </button>
  );
}

export default EditProductButton;
