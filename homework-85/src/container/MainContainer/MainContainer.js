import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchArtists} from "../../store/actions/musicSyncActions";
import { Card, CardBody, CardGroup} from "reactstrap";
import './MainContainer.css';
import {Link} from "react-router-dom";

class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {

        const artists = this.props.artists ? this.props.artists.map(artist => {
            return (
                <div className="ArtistItem" key={artist._id}>
                    <CardGroup>
                        <Card>
                            <img style={{width: "309px", height: '300px'}}
                                 src={"http://localhost:9000/uploads/" + artist.image} alt="image"/>
                            <CardBody>
                                <Link to={/artists/ + artist._id}>
                                    {artist.artists}
                                </Link>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            )
        }) : null;

        return (
            <Fragment>
                <div className="Artists">
                    {artists}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        artists: state.musicReducers.artists
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchArtists: () => dispatch(fetchArtists()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);