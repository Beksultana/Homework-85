import React, {Component, Fragment} from 'react';
import AlbumForm from "../../components/AlbumForm/AlbumForm";
import {createAlbum} from "../../store/actions/albumsActions";
import {connect} from "react-redux";

class NewAlbums extends Component {

    createAlbum = albumData => {
        this.props.createAlbum(albumData).then(() => {
            this.props.history.push('/')
        })
    };

    render() {
        return (
            <Fragment>
                <AlbumForm onSubmit={this.createAlbum}/>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createAlbum: albumData => dispatch(createAlbum(albumData))
});

export default connect(null, mapDispatchToProps)(NewAlbums);