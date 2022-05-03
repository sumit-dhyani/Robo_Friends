import React, {Component}  from 'react';
import { Fragment } from 'react';
import 'tachyons';
import Scroll from './components/scroll';
import Errorboundary from './components/errorboundary';
import Cardlist from './components/cardlist';
import Searchbox from './components/search_robo';
import './App.css'


class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }

    OnsearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
        
       

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
        
        
    }
    render(){
        const filteredrobos= this.state.robots.filter( robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
        if (this.state.robots.length===0){
            return(<Fragment>
                <div className='tc bb'>
                <h1 className='ttu f1'>RoboFriends</h1>
                <Searchbox searchchange={this.OnsearchChange} />
                </div>
                <h1 className='tc'> Loading....</h1>
                </Fragment>)
        }
        else{
            return(<Fragment>
                <div className='tc '>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchchange={this.OnsearchChange} />
                </div>
                <Scroll>
                    <Errorboundary>
                <Cardlist  robots={filteredrobos}/></Errorboundary>
                </Scroll>
                
                </Fragment>
            )
            }
        }
}
export default App;
