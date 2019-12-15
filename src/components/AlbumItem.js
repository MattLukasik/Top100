import React from 'react';
import './AlbumItem.scss'

function AlbumItem(props) {

    //dekonstuuję przekazany w propsie albumItem
    const {albumItem} = props;

    //wyciągam z obiektu albumItem interesujące mnie dane i
    // wypełniam poszczególne kolumny zaplanowanego wcześniej grida, po 4 w rzędzie,

    return (
        <div className="col-sm-3 mb-4">
            <img src={albumItem["im:image"][2].label} className="mx-auto d-block card-img-top"/>
            <div className="card-body bg-light">
                <h1 className="card-title name">"{albumItem["im:name"].label}"</h1>
                <h2 className="card-title artist">{albumItem["im:artist"].label}</h2>
                <span className="card-text rights">{albumItem.rights.label}</span>
                <button className="buy">Buy: {albumItem["im:price"].label}</button>
            </div>
        </div>
    )
}

export default AlbumItem;