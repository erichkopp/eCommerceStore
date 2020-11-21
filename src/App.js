import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
// import TopLinks from "./TopLinks";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Category from "./components/Category";
import ProductListing from "./components/ProductListing";
import ViewCart from "./components/ViewCart";
import Footer from "./components/Footer";
import "./styles.css";

const productCategories = {
  Cameras: ["SLRs", "Rangefinders"],
  Film: ["Color", "B+W"],
  Accessories: ["Bags", "Lenses"]
};

const allProducts = [
  {
    name: "Canon AT-1",
    description:
      '<div>In fully working condition</div><ul class="prodDescriptionList"><div>12-POINT CERTIFIED:</div><li>Standard CLA</li><li>Rangefinder / focus calibrated</li><li>All shutter speeds working</li></ul>',
    image: "canon_at1.jpg",
    price: "199.99",
    category: "Cameras",
    subcategory: "SLRs"
  },
  {
    name: "Praktica PL Nova I",
    description:
      '<div>In fully working condition</div><ul class="prodDescriptionList"><div>12-POINT CERTIFIED:</div><li>Standard CLA</li><li>Rangefinder / focus calibrated</li><li>All shutter speeds working</li></ul>',
    image: "praktica_pl_nova_i.jpg",
    price: "99.99",
    category: "Cameras",
    subcategory: "SLRs"
  },
  {
    name: "Werra 3",
    description:
      '<div>In fully working condition</div><ul class="prodDescriptionList"><div>12-POINT CERTIFIED:</div><li>Standard CLA</li><li>Rangefinder / focus calibrated</li><li>All shutter speeds working</li></ul>',
    image: "werra_3.jpg",
    price: "74.99",
    category: "Cameras",
    subcategory: "Rangefinders"
  },
  {
    name: "Beirette VS",
    description:
      '<div>In fully working condition</div><ul class="prodDescriptionList"><div>12-POINT CERTIFIED:</div><li>Standard CLA</li><li>Rangefinder / focus calibrated</li><li>All shutter speeds working</li></ul>',
    image: "beirette_vs.jpg",
    price: "64.99",
    category: "Cameras",
    subcategory: "Rangefinders"
  },
  {
    name: "Voigtlander Vites",
    description:
      '<div>In fully working condition</div><ul class="prodDescriptionList"><div>12-POINT CERTIFIED:</div><li>Standard CLA</li><li>Rangefinder / focus calibrated</li><li>All shutter speeds working</li></ul>',
    image: "voigtlander_vitessa_126_cs.jpg",
    price: "55.99",
    category: "Cameras",
    subcategory: "Rangefinders"
  },
  {
    name: "Kodak Ektar 100",
    description: "Deeply saturated color film. 100 ISO.",
    image: "color_ektar.jpg",
    price: "11.99",
    category: "Film",
    subcategory: "Color"
  },
  {
    name: "Kodak Gold 200",
    description: "Consumer-grade color film.",
    image: "color_gold_200.jpg",
    price: "5.99",
    category: "Film",
    subcategory: "Color"
  },
  {
    name: "Ilford HP5 400",
    description:
      "Classic black and white emulsion film. High-speed 400 ISO. A best-selling favorite!",
    image: "bw_hp5_400.jpg",
    price: "8.99",
    category: "Film",
    subcategory: "B+W"
  },
  {
    name: "Ilford Delta 3200",
    description:
      "Black and white modern-emulsion film. Ultra high-speed 3200 ISO for low-light photography.",
    image: "bw_delta_3200.jpg",
    price: "18.99",
    category: "Film",
    subcategory: "B+W"
  },
  {
    name: "Kodak Tri-X 400",
    description: "Iconic, classic black and white emulsion film. 400 ISO.",
    image: "bw_trix_400.jpg",
    price: "7.99",
    category: "Film",
    subcategory: "B+W"
  },
  {
    name: "Domke Large Bag",
    description:
      "Largesize camera bag. Enough room for two camera bodies and multiple lenses.",
    image: "domke2.jpg",
    price: "39.99",
    category: "Accessories",
    subcategory: "Bags"
  },
  {
    name: "Domke Small Pouch",
    description:
      "Small pouch for carrying film, filters, or anything else small that you need to keep organized.",
    image: "domnke_pouch.jpg",
    price: "14.99",
    category: "Accessories",
    subcategory: "Bags"
  },
  {
    name: "Helios-44 2/58mm Lens",
    description:
      "Compatible with Leica M39, Fed, Zorki lens mounts. Clean glass, all f-stops work and are free of oil",
    image: "helios_44.jpg",
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
    window.scrollTo(0, 0);
  };

  const handleProductClick = (product) => {
    setProduct(product);
    window.scrollTo(0, 0);
  };

  const handleAddToCartClick = (product) => {
    if (product.qty === undefined) {
      product.qty = 1;
    }
    setCart([...cart, product]);
    window.scrollTo(0, 0);
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
          <Home
            allProducts={allProducts}
            handleProductClick={handleProductClick}
            handleAddToCartClick={handleAddToCartClick}
          />
        </Route>
        <Route path="/category">
          <Category
            category={category}
            subCategory={subCategory}
            allProducts={allProducts}
            // handleCategoryClick={handleCategoryClick}
            handleProductClick={handleProductClick}
            handleAddToCartClick={handleAddToCartClick}
          />
        </Route>
        <Route path="/product">
          <ProductListing
            product={product}
            handleCategoryClick={handleCategoryClick}
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
      <Footer />
    </div>
  );
}
