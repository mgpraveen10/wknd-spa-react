// import { MapTo } from "@adobe/aem-spa-component-mapping";
import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer/Timer";

require("./ProductDetails.css");

export const ProductDetailsEditConfig = {
  emptyLabel: "Product Details",
  isEmpty: function (props) {
    return !props;
  },
};

export default class ProductDetails extends Component {
  state = {
    product: JSON.parse(localStorage.getItem("product")),
    cartItems: localStorage.getItem("cart"),
    isAddedToCart: false,
  };

  get offerPeriod() {
    if (!this.state.product.dateTillOffer) {
      return null;
    }
    const validity = new Date(this.state.product.dateTillOffer);
    const currentDate = new Date();
    setTimeout(() => {
      this.setState({ isOfferActive: false });
    }, validity.getTime() - currentDate.getTime());
    // }, 60000);

    return (
      <span className="text-success p-2 d-flex ">
        <p>
          Offer Ends in :{" "}
          <Timer timeTillOffer={validity.getTime() - currentDate.getTime()} />
        </p>
      </span>
    );
  }
  get ifOfferActive() {
    const validity = new Date(this.state.product.dateTillOffer);
    const currentDate = new Date();
    if (validity.getTime() < currentDate.getTime()) {
      // this.setState({ isOfferActive: false });
      setTimeout(() => {
        this.setState({ isOfferActive: false });
      }, validity.getTime() - currentDate.getTime());
      return false;
    } else {
      if (!this.state.isOfferActive) {
        this.setState({ isOfferActive: true });
      }

      return true;
    }
  }

  addToCart = () => {
    // const arr = { c: [{ name: "bkhan" }, "Mango", "AA"] };
    // const arr = { c: [{ name: product.productTitle,product:product,count:0 },{ name: product.productTitle,product:product }] };
    let a = [];
    let hadInCart = false;
    if (localStorage.getItem("cart") !== null) {
      let itemsA = JSON.parse(localStorage.getItem("cart")).c;

      itemsA.map((p) => {
        if (p.name === this.state.product.productTitle) {
          // p.count+=1;
          hadInCart = true;
          // break;
        }
      });

      if (!hadInCart) {
        a = { name: this.state.product.productTitle,item:this.state.product, count: 1 };
        itemsA.push(a);
        localStorage.setItem("cart", JSON.stringify({ c: itemsA }));
      } else {
        localStorage.setItem("cart", JSON.stringify({ c: itemsA }));
      }
    } else {
      a = { name: this.state.product.productTitle,item:this.state.product, count: 1 };
      const arr = { c: [a] };
      localStorage.setItem("cart", JSON.stringify(arr));
    }
    window.location.reload();
  };
// goToCart=()=>{
  
// }
  getItem = () => {
    console.log(JSON.parse(localStorage.getItem("cart")).c.length);
  };

  componentDidMount(){
    let added=false
   if (localStorage.getItem('cart')!==null) {
    JSON.parse(localStorage.getItem('cart')).c.forEach(element => {
      if (element.name===this.state.product.productTitle) {
        added=true;
      }
    });

   
   }
   if (added) {
    this.setState({isAddedToCart:true})
   }
  }

  render() {
    if (ProductDetailsEditConfig.isEmpty(this.state.product)) {
      return null;
    }
    
    return (
      <div className="pd-container d-flex">
        {/* <Header ref={this.header} /> */}
        <div className="pd-img-container">
          <img className="pd-img" src={this.state.product.src} />
          <div className="btn-conntainer">
           
            {this.state.isAddedToCart !==true ? (
              <button onClick={this.addToCart} className="btn btn-addtocart">
                Add To Cart
              </button>
            ) : (
             <Link to="/content/wknd-spa-react/us/en/home/cart.html">
              <button className="btn btn-gotocart">
              Go To Cart
            </button>
             </Link>
            )}
           
            <button onClick={this.getItem} className="btn btn-buynow">
              Buy Now
            </button>
          </div>
        </div>
        <div className="pd-properties-container">
          <h2>{this.state.product.productTitle}</h2>
          <h3> INR- {this.state.product.productPrice}</h3>

          {this.ifOfferActive ? (
            <span>
              <h3 className="mb-0 p-0 mt-5">Offers</h3>
              <small className="text-danger">
                {this.state.product.offerName}
              </small>
              <ul>
                <li>{this.state.product.offerDetails}</li>
              </ul>
            </span>
          ) : (
            ""
          )}

          <h5>Product Details </h5>
          <p>{this.state.product.productDescription}</p>
          {this.ifOfferActive ? this.offerPeriod : ""}
        </div>
      </div>
    );
  }
}

MapTo("wknd-spa-react/components/customized-components/productdetails")(
  ProductDetails,
  ProductDetailsEditConfig
);
