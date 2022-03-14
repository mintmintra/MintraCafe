import React, { Component } from 'react';
class Header extends Component{
    constructor(props) {
        super(props);
        this.state = { data: new Date() };
    
        console.log('constructor');
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {
        
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ data: new Date() });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-dark"><img src="/images/logo/logo.png" alt=""/> Mintra Cafe</h1>
                    </div>
                    <div className="col-md-4 text-right">
                       <h5 className="text-muted mt-4">{this.state.data.toLocaleTimeString()}</h5> 
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header;