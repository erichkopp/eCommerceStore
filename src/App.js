import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Category from "./components/Category";
import ProductListing from "./components/ProductListing";
import ViewCart from "./components/ViewCart";
import Footer from "./components/Footer";
import "./styles.css";

// Image Imports
import beirette_vs from "./img/beirette_vs.jpg";
import bw_delta_3200 from "./img/bw_delta_3200.jpg";
import bw_hp5_400 from "./img/bw_hp5_400.jpg";
import bw_trix_400 from "./img/bw_trix_400.jpg";
import canon_at1 from "./img/canon_at1.jpg";
import color_ektar from "./img/color_ektar.jpg";
import color_gold_200 from "./img/color_gold_200.jpg";
import domke2 from "./img/domke2.jpg";
import domnke_pouch from "./img/domnke_pouch.jpg";
import helios_44 from "./img/helios_44.jpg";
import praktica_pl_nova_i from "./img/praktica_pl_nova_i.jpg";
import voigtlander_vitessa_126_cs from "./img/voigtlander_vitessa_126_cs.jpg";
import werra_3 from "./img/werra_3.jpg";

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
    image: canon_at1,
    price: "199.99",
    category: "Cameras",
    subcategory: "SLRs"
  },
  {
    name: "Praktica PL Nova I",
    description:
      '<div>In fully working condition</div><ul class="prodDescriptionList"><div>12-POINT CERTIFIED:</div><li>Standard CLA</li><li>Rangefinder / focus calibrated</li><li>All shutter speeds working</li></ul>',
    image: praktica_pl_nova_i,
    price: "99.99",
    category: "Cameras",
    subcategory: "SLRs"
  },
  {
    name: "Werra 3",
    description:
      '<div>In fully working condition</div><ul class="prodDescriptionList"><div>12-POINT CERTIFIED:</div><li>Standard CLA</li><li>Rangefinder / focus calibrated</li><li>All shutter speeds working</li></ul>',
    image: werra_3,
    price: "74.99",
    category: "Cameras",
    subcategory: "Rangefinders"
  },
  {
    name: "Beirette VS",
    description:
      '<div>In fully working condition</div><ul class="prodDescriptionList"><div>12-POINT CERTIFIED:</div><li>Standard CLA</li><li>Rangefinder / focus calibrated</li><li>All shutter speeds working</li></ul>',
    image: beirette_vs,
    price: "64.99",
    category: "Cameras",
    subcategory: "Rangefinders"
  },
  {
    name: "Voigtlander Vites",
    description:
      '<div>In fully working condition</div><ul class="prodDescriptionList"><div>12-POINT CERTIFIED:</div><li>Standard CLA</li><li>Rangefinder / focus calibrated</li><li>All shutter speeds working</li></ul>',
    image: voigtlander_vitessa_126_cs,
    price: "55.99",
    category: "Cameras",
    subcategory: "Rangefinders"
  },
  {
    name: "Kodak Ektar 100",
    description: "Deeply saturated color film. 100 ISO.",
    image: color_ektar,
    price: "11.99",
    category: "Film",
    subcategory: "Color"
  },
  {
    name: "Kodak Gold 200",
    description: "Consumer-grade color film.",
    image: color_gold_200,
    price: "5.99",
    category: "Film",
    subcategory: "Color"
  },
  {
    name: "Ilford HP5 400",
    description:
      "Classic black and white emulsion film. High-speed 400 ISO. A best-selling favorite!",
    image: bw_hp5_400,
    price: "8.99",
    category: "Film",
    subcategory: "B+W"
  },
  {
    name: "Ilford Delta 3200",
    description:
      "Black and white modern-emulsion film. Ultra high-speed 3200 ISO for low-light photography.",
    image: bw_delta_3200,
    price: "18.99",
    category: "Film",
    subcategory: "B+W"
  },
  {
    name: "Kodak Tri-X 400",
    description: "Iconic, classic black and white emulsion film. 400 ISO.",
    image: bw_trix_400,
    price: "7.99",
    category: "Film",
    subcategory: "B+W"
  },
  {
    name: "Domke Large Bag",
    description:
      "Largesize camera bag. Enough room for two camera bodies and multiple lenses.",
    image: domke2,
    price: "39.99",
    category: "Accessories",
    subcategory: "Bags"
  },
  {
    name: "Domke Small Pouch",
    description:
      "Small pouch for carrying film, filters, or anything else small that you need to keep organized.",
    image: domnke_pouch,
    price: "14.99",
    category: "Accessories",
    subcategory: "Bags"
  },
  {
    name: "Helios-44 2/58mm Lens",
    description:
      "Compatible with Leica M39, Fed, Zorki lens mounts. Clean glass, all f-stops work and are free of oil",
    image: helios_44,
    price: "99.99",
    category: "Accessories",
    subcategory: "Lenses"
  }
];

const footerLeftLinks = [
  {
    text: "TERMS AND CONDITIONS",
    url: ""
  },
  {
    text: "FAQ",
    url: ""
  },
  {
    text: "ABOUT",
    url: ""
  },
  {
    text: "PRIVACY POLICY",
    url: ""
  }
];

const footerRightLinks = [
  {
    icon: "fas fa-code",
    url: "https://codesandbox.io/s/hksch"
  },
  {
    icon: "fab fa-github",
    url: "https://github.com/erichkopp"
  },
  {
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/erich-kopp/"
  }
];

export default function App() {
  const [category, setCategory] = useState();
  const [subCategory, setSubcategory] = useState();
  const [product, setProduct] = useState();
  const [cart, setCart] = useState([]);
  // console.log(cart);

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
    // If product has been added to array yet
    let added = false;
    let cartItems = [];
    // Cart empty? Add product
    if (cart.length === 0) {
      cartItems.push(product);
      added = true;
    } else {
      for (let i = 0; i < cart.length; i++) {
        // If product added is same as product in cart
        if (product.name === cart[i].name) {
          product.qty += cart[i].qty;
          cartItems.push(product);
          added = true;
          // Make sure to re-add products already in cart that aren't duplicate matches
        } else {
          cartItems.push(cart[i]);
        }
      }
    }
    // If product not added above, add it now
    if (added === false) {
      cartItems.push(product);
    }

    setCart(cartItems);

    // setCart([...cart, product]);
    window.scrollTo(0, 0);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // ***** DON'T DELETE ********
  // const handleRemoveItem = (removedItem, i) => {
  //   console.log(removedItem);
  //   setCart(cart.filter((cartItem, i) => i !== removedItem.id));
  // };

  return (
    <div className="App">
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
            // handleRemoveItem={handleRemoveItem}
            handleProductClick={handleProductClick}
          />
        </Route>
      </Switch>
      <Footer
        footerLeftLinks={footerLeftLinks}
        footerRightLinks={footerRightLinks}
      />
    </div>
  );
}
