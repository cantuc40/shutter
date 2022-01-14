import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';





const Film = props => (
    <tr>
        <td>{props.film.name}</td>
        <td>{props.film.type}</td>
        <td>{props.film.format}</td>
        <td>{props.film.exposures}</td>
        <td>{props.film.company}</td>
    </tr>
)
















export default class Display extends Component{
    constructor(props) {
        super (props);

        this.DeleteFilm = this.DeleteFilm.bind(this);
        this.EditFilm = this.EditFilm.bind(this);
        this.state = {films: []};

    }


    DeleteFilm(id) {
        axios.delete('http://localhost:3000/films' + id)

            .then(res => console.log(res.data));

        this.setState ({
            films: this.state.films.filter(el => el.id !== id)
        })

    }


    
    EditFilm(id) {

    }
    



    filmList(){
        return this.state.films.map(currentfilm => {
            return <Film film={currentfilm} DeleteFilm={this.DeleteFilm} key={currentfilm._id}/>;
        })
    }
    
    
    
    render() {
        return(
            <div>
                <h3>Film Database</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Format</th>
                            <th>Exposures</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.filmList() }
                    </tbody>
                </table>
            </div>
        );
    }

}