import HomeButton from "./HomeButton";
import NewProductButton from "./NewProductButton";
import ShoppingCartButton from "./ShoppingCartButton";

const NavBar = () => {
  return (
    <nav className="mx-auto dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-end gap-2">
        <HomeButton />
        <NewProductButton />
        <ShoppingCartButton />
      </div>
    </nav>
  );
}

export default NavBar;
