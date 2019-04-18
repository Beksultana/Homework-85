import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchAlbums} from "../../store/actions/albumsActions";
import {Card, CardBody, CardGroup} from "reactstrap";
import {Link} from "react-router-dom";
import './Albums.css';

class Albums extends Component {

    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        const albums = this.props.albums ? this.props.albums.map(album => {
            return (
                <div className="AlbumsItem" key={album._id}>
                    <CardGroup>
                        <Card>
                            <img style={{width: "309px", height: '300px'}}
                                 src={"http://localhost:9000/uploads/" + album.image} alt="image"/>
                            <CardBody>
                                <Link to={/album/ + album._id}>
                                    {album.albumName}
                                </Link>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            )
        }) : null;
        return (
            <div className="Albums">
                {albums}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        albums: state.musicReducers.albums
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAlbums: () => dispatch(fetchAlbums())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Albums);