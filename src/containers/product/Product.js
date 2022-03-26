import React, { Component } from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import ProductList from '../../components/product/ProductList';
import axios from "axios";

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = { products : null}
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Product;