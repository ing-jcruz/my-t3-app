import HomeButton from "./HomeButton";
import NewProductButton from "./NewProductButton";
import ShoppingCartButton from "./ShoppingCartButton";

const NavBar = () => {
  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start">
        <HomeButton />
        <NewProductButton />
        <ShoppingCartButton />
      </div>
    </nav>
  );
}

export default NavBar;
