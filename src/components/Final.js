import * as React from 'react';
class Final extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (
            <div className="final-container">
                <p className="final-name-container">
                    Your order for <h2 className="selected-coffee-name"> {this.props.selectedCoffee} </h2> is being prepared!!
                </p>
            </div>
        )
    }
}
export default Final