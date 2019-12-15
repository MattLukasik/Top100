import React, {Component} from "react";

import './Search.scss'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
            album: "",
        };
    }

    //pobieram dane na temat albumów
    componentDidMount() {

        fetch(`${this.state.api}`).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("Connection problem");
            }
        }).then(data => {
            this.props.displayAlbums(data.feed.entry);
            // console.log(data.feed.entry);

        }).catch(err => {
            console.log(err);
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    // po kliknięciu w "Search" pobieram dane na temat WYBRANYCH albumów
    //wyszukiwanie jeszcze nie działa, muszę nad tym popracować

    // getAlbum = e => {
    //     e.preventDefault();
    //
    //     const {album} = this.state;
    //
    //     fetch(this.state.api).then(resp => {
    //         if (resp.ok) {
    //             return resp.json();
    //         } else {
    //             throw new Error("Connection problem");
    //         }
    //     }).then(data => {
    //         if (data.feed.entry["im:artist"].label !== album)
    //             throw new Error("Sorry, we can't find your Artist!");
    //
    //         if(data.feed.entry["im:artist"].label === album)
    //         this.props.displayAlbums(data.feed.entry);
    //
    //     }).catch(err => {
    //         console.log(err)
    //     });
    // };


    render() {
        const {album} = this.state;

        return (
            <div className="search_container">
                <form className="search_form" onSubmit={this.getAlbum}>
                    <input type="search" name="album" id="album" value={album} className="search_field"
                           placeholder="Search for your Artist..." onChange={this.handleChange}/>
                    <button className="btn" type="submit">Search</button>
                </form>
            </div>
        )
    }
}


export default Search;