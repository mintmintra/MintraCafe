import React, { Component } from "react";
import Header from "../../components/Header";
import ProductForm from "../../components/product/ProductForm";
import Footer from "../../components/Footer";

class ProductEdit extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container col-md-5">
                    <ProductForm />
                </div>
                <Footer company="Usernamemint" email="mintrawork1565@gmail.com" />
            </div>
        )
    }
}

export default ProductEdit;