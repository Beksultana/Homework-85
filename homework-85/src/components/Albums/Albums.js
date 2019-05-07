import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {deleteAlbum, fetchAlbum} from "../../store/actions/albumsActions";
import {Button, Card, CardBody, CardGroup, CardImg, CardText} from "reactstrap";
import './Albums.css';
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import {Link} from "react-router-dom";

class Albums extends Component {

    componentDidMount() {
        this.props.fetchAlbums(this.props.match.params.id)
    }

    render() {

        let artists = '';
        const albums = this.props.albums ? this.props.albums.map(album => {
            artists = album.artists.artists;

            return (
                <div className="AlbumsItem" key={album._id}>
                    <CardGroup>
                        <Card>
                            <CardImg top width="100%" src={"http://localhost:9000/uploads/" + album.image}
                                     alt="Card image cap" />
                            <CardBody>
                                <Link to={"/tracks/" + album._id}>{album.albumName}</Link>
                                <CardText>{album.year}</CardText>
                            </CardBody>
                            {
                                this.props.user && this.props.user.username
                                && this.props.user.username === 'admin' ?
                                    <Button onClick={() => this.props.deleteAlbum(album._id)} color="danger">
                                        Delete
                                    </Button> : null
                            }


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
    albums: state.musicReducers.album,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    fetchAlbums: (id) => dispatch(fetchAlbum(id)),
    deleteAlbum: id => dispatch(deleteAlbum(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Albums);