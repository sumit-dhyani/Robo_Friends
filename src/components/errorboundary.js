import React, {Component} from 'react';


class Errorboundary extends Component{
    constructor(props){
        super(props);
        this.state={
            error:false
        }
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({error:true})
      }
    render(){
        if(this.state.error){
            return <h1> Oops... Something went wrong!!</h1>
        }
        return this.props.children;
    }
}
export default Errorboundary;