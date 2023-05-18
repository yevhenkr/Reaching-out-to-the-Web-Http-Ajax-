import React,{Component} from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component{
        state ={
            componnet: null
        }
        componentDidMount(){
            importComponent()
            .then(cmp => {
                this.setState({ componnet: cmp.default });
            })
        }
        render(){
            const C = this.state.componnet;
            return C? <C {...this.props}/> : null;
        }
    }
};

export default asyncComponent;