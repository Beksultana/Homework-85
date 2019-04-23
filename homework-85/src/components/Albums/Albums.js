import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchAlbums} from "../../store/actions/albumsActions";
import {Card, CardBody, CardGroup, CardImg, CardText} from "reactstrap";
import './Albums.css';
import HeaderInfo from "../HeaderInfo/HeaderInfo";

class Albums extends Component {

    componentDidMount() {
        this.props.fetchAlbums(this.props.match.params.id)
    }

    historyPush = (id) => {
        this.props.history.push(/tracks/ + id);
    };

    render() {

        let artists = '';
        const albums = this.props.albums ? this.props.albums.map(album => {
            artists = album.artists.artists;

            return (
                <div onClick={() => this.historyPush(album._id)} className="AlbumsItem" key={album._id}>
                    <CardGroup>
                        <Card>
                            <CardImg top width="100%" src={"http://localhost:9000/uploads/" + album.image}
                                     alt="Card image cap" />
                            <CardBody>
                                <h5><strong>{album.albumName}</strong></h5>
                                <CardText>{album.year}</CardText>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            )
        }) : null;

        const sum = albums.length;

        return (
            <Fragment>
                <HeaderInfo artistName={artists} title="Albums" sum={sum} musicOfNumber="albums"/>

                <div className="Albums">
                    {albums}

                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.musicReducers.albums
});

const mapDispatchToProps = dispatch => ({
    fetchAlbums: (id) => dispatch(fetchAlbums(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Albums);