import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
// import TopLinks from "./TopLinks";
import Nav from "./Nav";
import Home from "./Home";
import Category from "./Category";
import ProductListing from "./ProductListing";
import ViewCart from "./ViewCart";
import "./styles.css";

const productCategories = {
  Cameras: ["SLRs", "Rangefinders"],
  Film: ["Color", "B+W"],
  Accessories: ["Bags", "Lenses"]
};

const allProducts = [
  {
    name: "Canon AT-1",
    description: "In fully working condition",
    image:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/canon_at1.jpg",
    price: "199.99",
    category: "Cameras",
    subcategory: "SLRs"
  },
  {
    name: "Praktica PL Nova I",
    description: "In fully working condition",
    image:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/praktica_pl_nova_i.jpg",
    price: "99.99",
    category: "Cameras",
    subcategory: "SLRs"
  },
  {
    name: "Werra 3",
    description: "In fully working condition",
    inage:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/werra_3.jpg",
    price: "74.99",
    category: "Cameras",
    subcategory: "Rangefinders"
  },
  {
    name: "Beirette VS",
    description: "In fully working condition",
    inage:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/beirette_vs.jpg",
    price: "64.99",
    category: "Cameras",
    subcategory: "Rangefinders"
  },
  {
    name: "Voigtlander Vites",
    description: "In fully working condition",
    inage:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/voigtlander_vitessa_126_cs.jpg",
    price: "55.99",
    category: "Cameras",
    subcategory: "Rangefinders"
  },
  {
    name: "Kodak Ektar 100",
    description: "Deeply saturated color film. 100 ISO.",
    inage:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/color_ektar.jpg",
    price: "11.99",
    category: "Film",
    subcategory: "Color"
  },
  {
    name: "Kodak Gold 200",
    description: "Consumer-grade color film.",
    inage:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/color_gold200.jpg",
    price: "5.99",
    category: "Film",
    subcategory: "Color"
  },
  {
    name: "Ilford HP5 400",
    description:
      "Classic black and white emulsion film. High-speed 400 ISO. A best-selling favorite!",
    inage:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/bw_hp5_400.jpg",
    price: "8.99",
    category: "Film",
    subcategory: "B+W"
  },
  {
    name: "Ilford Delta 3200",
    description:
      "Black and white modern-emulsion film. Ultra high-speed 3200 ISO for low-light photography.",
    inage:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/bw_delta3200.jpg",
    price: "18.99",
    category: "Film",
    subcategory: "B+W"
  },
  {
    name: "Kodak Tri-X 400",
    description: "Iconic, classic black and white emulsion film. 400 ISO.",
    inage:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/bw_trix400.jpg",
    price: "7.99",
    category: "Film",
    subcategory: "B+W"
  },
  {
    name: "Domke Large Bag",
    description:
      "Largesize camera bag. Enough room for two camera bodies and multiple lenses.",
    inage: "https://3dcart-ekopp-com.3dcartstores.com/assets/images/domke2.jpg",
    price: "39.99",
    category: "Accessories",
    subcategory: "Bags"
  },
  {
    name: "Domke Small Pouch",
    description:
      "Small pouch for carrying film, filters, or anything else small that you need to keep organized.",
    inage:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/domnke_pouch.jpg",
    price: "14.99",
    category: "Accessories",
    subcategory: "Bags"
  },
  {
    name: "Helios-44 2/58mm Lens",
    description:
      "Compatible with Leica M39, Fed, Zorki lens mounts. Clean glass, all f-stops work and are free of oil",
    inage:
      "https://3dcart-ekopp-com.3dcartstores.com/assets/images/helios-44.jpg",
    price: "99.99",
    category: "Accessories",
    subcategory: "Lenses"
  }
];

export default function App() {
  const [category, setCategory] = useState();
  const [subCategory, setSubcategory] = useState();
  const [product, setProduct] = useState();
  const [cart, setCart] = useState([]);

  const handleCategoryClick = (e) => {
    const navCat = e.target.id;
    const subCat = e.target.innerHTML;
    setCategory(navCat);
    setSubcategory(subCat);
  };

  const handleProductClick = (product) => {
    setProduct(product);
  };

  const handleAddToCartClick = (product) => {
    setCart([...cart, product]);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleRemoveItem = (removedItem, i) => {
    console.log(removedItem);
    setCart(cart.filter((cartItem, i) => i !== removedItem.id));
  };

  return (
    <div className="App">
      {/* <TopLinks cart={cart} /> */}
      <Nav
        productCategories={productCategories}
        handleCategoryClick={handleCategoryClick}
        cart={cart}
      />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <Category
            category={category}
            subCategory={subCategory}
            allProducts={allProducts}
            handleProductClick={handleProductClick}
          />
        </Route>
        <Route path="/product">
          <ProductListing
            product={product}
            handleAddToCartClick={handleAddToCartClick}
          />
        </Route>
        <Route path="/viewcart">
          <ViewCart
            cart={cart}
            handleClearCart={handleClearCart}
            handleRemoveItem={handleRemoveItem}
          />
        </Route>
      </Switch>
    </div>
  );
}
