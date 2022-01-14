import React, {Component} from 'react';


export default class Regster extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            test: null
        }
    }

    onSubmit(){
        
    }

    render(){
        return(
            <div>
                <h1>Register</h1>

            </div>
        )
    }
}