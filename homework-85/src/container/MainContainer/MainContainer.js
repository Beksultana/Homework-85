import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchArtists} from "../../store/actions/musicSyncActions";
import {Card, CardBody, CardGroup, CardImg} from "reactstrap";
import './MainContainer.css';
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo";

class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchArtists();
    }

    historyPush = (id) => {
        this.props.history.push(/albums/ + id);
    };

    render() {

        const artists = this.props.artists ? this.props.artists.map(artist => {
            return (
                <div onClick={() => this.historyPush(artist._id)} className="ArtistItem" key={artist._id}>
                    <CardGroup>
                        <Card>
                            <CardImg top width="100%" src={"http://localhost:9000/uploads/" + artist.image}
                                     alt="Card image cap" />
                            <CardBody>
                                <h5><strong>{artist.artists}</strong></h5>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            )
        }) : null;

        const sum = artists.length;

        return (
            <Fragment>
                    <HeaderInfo musicOfNumber="artists" title="Artists" sum={sum}/>
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