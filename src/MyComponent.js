import React, {Component} from "react";
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps = {
        name: '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };

    render(){
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                이름은 {name} <br></br>
                children {children} <br/>
                숫자는 {favoriteNumber}
            </div>
        );
    }
}

export default MyComponent;