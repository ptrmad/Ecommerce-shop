import { Link, Outlet } from "react-router-dom";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES } from "../../constants/currencies";
import { CartContext } from "../../contexts/CartContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ShareContext } from "../../contexts/ShareContext";
import { useState } from "react";
import { Share } from "../Share/Share";
// import { Share } from "../Share/Share";

export function Layout() {
  const [currency, setCurrency] = useLocalStorage(
    "selected_currency",
    CURRENCIES.PLN
  );

  const [cartItems, setCartItems] = useLocalStorage("cart_products", []);

  const [isShareShown, setIsShareShown] = useState(false);

  function addProductToCart(product) {
    const newState = [...cartItems, product];
    setCartItems(newState);
  }

  function handleRemoveProduct(productToRemove) {
    const newState = [
      ...cartItems.filter((item) => item.id !== productToRemove.id),
    ];
    setCartItems(newState);
  }

  return (
    <>
      <CartContext.Provider
        value={[cartItems, addProductToCart, handleRemoveProduct]}
      >
        <CurrencyContext.Provider value={[currency, setCurrency]}>
          <MainContent>
            <TopBar>
              <MainMenu />
              <Link to="">
                <Logo />
              </Link>
              <div>
                <CurrencySelector />
                <IconMenu />
              </div>
            </TopBar>
            <CategoryMenu />
            <ShareContext.Provider value={[isShareShown, setIsShareShown]}>
              {isShareShown ? <Share /> : null}
              <Outlet />
            </ShareContext.Provider>
          </MainContent>
          <Footer />
        </CurrencyContext.Provider>
      </CartContext.Provider>
    </>
  );
}
