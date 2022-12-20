import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ConfirmModal from "../Modals/ConfirmModal";
require("./CartItem.css");
const options = [1, 2, 3, 4, 5, 6];
// const defaultOption = options[0];
class CardItem extends Component {
  state = { qty: this.props.item.count,openConfirmModal:false };

  

  showProductDetails = () => {
    localStorage.setItem("product", JSON.stringify(this.props.item.item));
  };

  _onSelect = (e) => {
    let arr = JSON.parse(localStorage.getItem("cart"));
    arr.c.map((p) => {
      if (p.name === this.props.item.item.productTitle) {
        p.count = Number(e.target.value);
        localStorage.setItem("cart", JSON.stringify(arr));
      }
    });
    this.setState({ qty: e.target.value });
    this.props.cartUpdate();
    console.log(this.state.qty);
  };
  

  deleteFromCart = () => {
    let arr = JSON.parse(localStorage.getItem("cart"));
    this.setState({openConfirmModal:true})

  };
  changeOpenConfirmModalStatus=(e)=>{
    this.setState({openConfirmModal:false})
    alert("DDDDDDDDDDDDDDDDDDDDDDDD")
  }
  render() {
    return (
      <div className="cartItemContainer">
        <Link
          to="/content/wknd-spa-react/us/en/home/product-details-page.html"
          onClick={this.showProductDetails}
          className="itemImgContainer"
        >
          <img className="itemImg" src={this.props.item.item.src} />
        </Link>
        <div className="itemDetailsContainer">
          <h3>{this.props.item.item.productTitle}</h3>
          <small style={{ color: "green" }}>In Stock</small>
          <h5 style={{ fontSize: "15px" }}>
            {this.props.item.item.productDescription}
          </h5>
          <div>
            QTY:{" "}
            <select value={this.state.qty} onChange={this._onSelect}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button
              onClick={this.deleteFromCart}
              className="btn btn-secondary"
              style={{
                width: "fit-content",
                marginLeft: "5px",
                padding: "revert",
                marginBottom: "5px",
              }}
            >
              Delete
            </button>
          </div>
        </div>
              {this.state.openConfirmModal?<ConfirmModal openConfirmModal={this.changeOpenConfirmModalStatus}/>:""}
        <div className="priceContainer">
          <h3>{this.props.item.item.productPrice * this.state.qty}</h3>
        </div>
      </div>
    );
  }
}

export default CardItem;
