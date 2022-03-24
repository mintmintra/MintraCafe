import React, { Component } from 'react';
class ProductItem extends Component {

    constructor(props) {
        super(props);
        }
    render() {
        const { productName, unitPrice, thumbnail } = this.props.product;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt="" />
                <p className="mt-2">{productName}</p>
                <p className="title text-right">{unitPrice} THB</p>
                <button className="btn btn-block btn-secondary title" value={unitPrice} onClick={() => this.props.onAddOrder(this.props.product)}>ซื้อ</button>
                <hr />
            </div>
         )
    }
}

export default ProductItem;