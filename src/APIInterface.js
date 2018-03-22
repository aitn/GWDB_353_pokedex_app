import React, { Component } from 'react';

class APIInterface extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons: [{}],         // o m f g
            pokemon: {}
        };
    }

    componentDidMount() {

        const api_url = "http://127.0.0.1:3001/api/v1/pokemons";

        fetch(api_url)
            .then( function(response) {
                return response.json();
            })
            .then(function(myJson) {
                this.setState({
                    pokemons: myJson,
                    pokemon: myJson.shift()
                });
            }.bind(this));

    }

    render() {

        return (
            <div className="pokemon">

                { /* dont worry about the tabs, */ }
                { /* just put your markup here and add these */ }
                { /* statements in between the divs */ }
                { /* where they need to be */ }

                <div>{this.state.pokemon.title}</div>
                <div>{this.state.pokemon.number}</div>
                <div>{this.state.pokemon.image}</div>
                <div>{this.state.pokemon.poketype}</div>
                <div>{this.state.pokemon.slug}</div>

            </div>
        )

    }

}
export default APIInterface;
