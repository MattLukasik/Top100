import React from 'react';

function AlbumItem(props) {

    //dekonstuuję przekazany w propsie albumItem
    const {albumItem} = props;

    //wyciągam z obiektu albumItem interesujące mnie dane i
    // wypełniam poszczególne kolumny zaplanowanego wcześniej grida, po 4 w rzędzie,

    return (
        <div className="col-sm-3 mb-4">
            <img src={albumItem["im:image"][2].label} className="mx-auto d-block card-img-top"/>
            <div className="card-body bg-light">
                <h1 className="card-title">"{albumItem["im:name"].label}"</h1>
                <h2 className="card-title">{albumItem["im:artist"].label}</h2>
                <p className="card-text">{albumItem["im:releaseDate"].attributes.label}</p>
                <span className="card-text">{albumItem.rights.label}</span><br/>
                <span className="btn btn-primary">Buy: {albumItem["im:price"].label}</span>
            </div>
        </div>
    )
}

export default AlbumItem;