import React from 'react';
import AlbumItem from './AlbumItem';

function AlbumList(props) {

    //dekonstuuję przekazany w propsie albumData
    const {albumData} = props;

    //tworzę wstępny zarys grida, za pomocą mapy wyciągam z "albumData" informacje o poszczególnych albumach
    //i za pomocą propsów przekazuję je do komponentu AlbumItem

    return (
        <div className="py-5 my-5 bg-secondary">
            <div className="container">
                <div className="row">
                    {typeof albumData.error !== "undefined" ? <h3>{albumData.error.message}</h3>:albumData.map(album => <AlbumItem albumItem={album} key={album.id.attributes['im:id']}/>)}
                </div>
            </div>
        </div>
    )
}

export default AlbumList;