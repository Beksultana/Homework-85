import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchArtists} from "../../store/actions/musicSyncActions";
import {Card, CardBody, CardGroup, CardImg} from "reactstrap";
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
                            <CardImg top width="100%" src={"http://localhost:9000/uploads/" + artist.image}
                                     alt="Card image cap" />
                            <CardBody>
                                <Link to={/albums/ + artist._id}>
                                    {artist.artists}
                                </Link>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            )
        }) : null;

        const sum = artists.length;

        return (
            <Fragment>
                <div className="HeaderTitleInfo">
                    <h2
                        style={{color: '#5e5e5e', fontWeight: "bold"}}
                    >
                        Artists
                    </h2>

                    <p><strong>Number of artists: {sum}</strong></p>
                </div>
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