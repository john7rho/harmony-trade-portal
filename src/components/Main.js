import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Main extends Component {
  render() {
    return (
      <div id="content" class="content">
        <ParticlesBg type="circle" bg={true} />
        <h2>Add Product</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const name = this.productName.value;
            const price = window.web3.utils.toWei(
              this.productPrice.value.toString(),
              "Ether"
            );
            this.props.createProduct(name, price);
          }}
        >
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => {
                this.productName = input;
              }}
              className="form-control"
              placeholder="Product Name"
              autocomplete="off"
              required
            />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => {
                this.productPrice = input;
              }}
              className="form-control"
              placeholder="Product Price"
              autocomplete="off"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
        <p>&nbsp;</p>
        <h2>Buy Product</h2>
        <table className="table" border="4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col">Buy</th>
            </tr>
          </thead>
          <tbody id="productList">
            {this.props.products.slice(3).map((product, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{(product.id - 3).toString()}</th>
                  <td>{product.name}</td>
                  <td>
                    {window.web3.utils.fromWei(
                      product.price.toString(),
                      "Ether"
                    )}{" "}
                    ONE
                  </td>
                  <td>{product.owner}</td>
                  <td>
                    {!product.purchased ? (
                      <button
                        name={product.id}
                        value={product.price}
                        onClick={(event) => {
                          this.props.purchaseProduct(
                            event.target.name,
                            event.target.value
                          );
                        }}
                      >
                        Buy
                      </button>
                    ) : (
                      "No longer available."
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        Inspired by DApp University.
      </div>
    );
  }
}

export default Main;
