import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchArtists} from "../../store/actions/musicSyncActions";
import {Button, Card, CardBody, CardGroup, CardImg, CardTitle} from "reactstrap";
import './MainContainer.css';

class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {

        const artists = this.props.artists ? this.props.artists.map(artist => {
            console.log(artist);
            return (
                <div className="ArtistItem" key={artist._id}>
                    <CardGroup>
                        <Card>
                            <img style={{width: "309px", height: '300px'}} src={"http://localhost:9000/uploads/" + artist.image} alt="image"/>
                            <CardBody>
                                <h2>{artist.artists}</h2>
                                <Button outline color="info">MORE</Button>
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
        fetchArtists: () => dispatch(fetchArtists())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);