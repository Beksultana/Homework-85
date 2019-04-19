import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchAlbums} from "../../store/actions/albumsActions";
import {Card, CardBody, CardGroup, CardImg, CardText} from "reactstrap";
import {Link} from "react-router-dom";
import './Albums.css';

class Albums extends Component {

    componentDidMount() {
        this.props.fetchAlbums(this.props.match.params.id);
    }

    render() {
        const albums = this.props.albums ? this.props.albums.map(album => {
            return (
                <div className="AlbumsItem" key={album._id}>
                    <CardGroup>
                        <Card>
                            <CardImg top width="100%" src={"http://localhost:9000/uploads/" + album.image}
                                     alt="Card image cap" />
                            <CardBody>
                                <Link to={/tracks/ + album._id}>
                                    {album.albumName}
                                </Link>
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
                <div className="HeaderTitleInfo">
                    <h2
                        style={{color: '#5e5e5e', fontWeight: "bold"}}
                    >
                        Albums
                    </h2>

                    <p><strong>Number of albums: {sum}</strong></p>
                </div>

                <div className="Albums">
                    {albums}
                </div>
            </Fragment>
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
        fetchAlbums: (id) => dispatch(fetchAlbums(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Albums);