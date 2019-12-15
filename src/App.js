import React, {Component} from 'react';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import Footer from './components/Footer';
import Search from './components/Search';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
            albumList:[]
        };
    }

    // metoda, która aktualizuje stan albumList (tablica albumów wyszukanych w komponencie Search)
    displayAlbums = albumList => {
        this.setState({
            albumList
        })
    };

    //Tablicę wyszukanych albumów przekazuję w propsie do komponentu AlbumList
    render() {

        return (
            <>
                <Header/>
                <Search albumData={this.state.albumList} displayAlbums={this.displayAlbums}/>
                <AlbumList albumData={this.state.albumList} api={this.state.api}/>
                <Footer/>
            </>
        );
    }
}

export default App;
