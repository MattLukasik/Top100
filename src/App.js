import React, {Component} from 'react';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import Footer from './components/Footer';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
            albumList: []
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
            this.setState({
                albumList: data.feed.entry
            });
        }).catch(err => console.log(err));
    };

    //Tablicę obiektów przekazuję w propsie do komponentu AlbumList
    render() {

        return (
            <>
                <Header/>
                <AlbumList albumData={this.state.albumList}/>
                <Footer/>
            </>
        );

    }

}

export default App;
