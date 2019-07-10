import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import data from "../data.json";

class FilterableProductTable extends Component {
  state = {
    products: data.data,
    searchInput: "",
    inStock: false
  };

  handleSearch = evt => {
    // console.log(evt.target.value);
    const value = evt.target.value;
    this.setState({ searchInput: value });
  };

  handleCheckBox = evt => {
    this.setState({ inStock: evt.target.checked });
  };

  filterProducts = () => {
    let filteredProducts = this.state.products.filter(product => {
      if (
        product.name.toLowerCase().match(this.state.searchInput.toLowerCase())
      ) {
        return product;
      }
    });
    if (this.state.inStock) {
      filteredProducts = filteredProducts.filter(product => product.stocked);
    }
    return filteredProducts;
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          handleCheckBox={this.handleCheckBox}
          handleSearch={this.handleSearch}
        />
        <ProductTable products={this.filterProducts()} />
      </div>
    );
  }
}

export default FilterableProductTable;
