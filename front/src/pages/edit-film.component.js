import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';



export default class EditFilm extends Component{

    constructor(props) {
        super(props);

        this.ChangeName = this.ChangeName.bind(this);
        this.ChangeFilm_Type = this.ChangeFilm_Type.bind(this);
        this.ChangeFormat = this.ChangeFormat.bind(this);
        this.ChangeExposures = this.ChangeExposures.bind(this);
        this.ChangeCompany = this.ChangeCompany.bind(this);
        this.ChangePrice = this.ChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            film_type: '',
            format: '',
            exposures: 0,
            company: '',
            price: {
                amazon: 0,
                b_h: 0,
                cinestill: 0,
                lomography: 0
            }
        }
    }

    
    componentDidMount() {
        axios.get('http://localhost:3000/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                name: response.data.name,
                film_type: response.data.film_type,
                format: response.data.format,
                exposures: response.data.exposures,
                company: response.data.company,
                price: {
                    amazon: response.data.price.amazon,
                    b_h: response.data.price.b_h,
                    cinestill: response.data.price.cinestill,
                    lomography: response.data.price.lomography
                }
            })
        })
        .catch(function(error) {
            console.log(error);
        })
    }
    
    
    
    render() {
        return(
            <div>
                <form>
                    <label>name: </label>
                    <input>
                    </input>
                </form>
            </div>
        );
    }

}