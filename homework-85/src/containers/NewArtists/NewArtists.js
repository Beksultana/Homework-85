import React, {Component, Fragment} from 'react';
import ArtistsForm from "../../components/ArtistsForm/ArtistsForm";
import {createArtist} from "../../store/actions/musicSyncActions";
import {connect} from "react-redux";

class NewArtists extends Component {

    createArtist = artistData => {
        this.props.onCreateArtist(artistData).then(() => {
            this.props.history.push('/')
        });
    };

    render() {
        return (
            <Fragment>
                <ArtistsForm
                    onSubmit={this.createArtist}/>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onCreateArtist: artistData => dispatch(createArtist(artistData))
});

export default connect(null, mapDispatchToProps)(NewArtists);