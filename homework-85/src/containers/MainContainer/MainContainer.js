import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchArtists} from "../../store/actions/musicSyncActions";
import {Button, Card, CardBody, CardGroup, CardImg} from "reactstrap";
import './MainContainer.css';
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo";
import BtnLinks from "../../components/UI/BtnLinks/BtnLinks";
import {Link} from "react-router-dom";

class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        console.log(this.props.artists);
        const artists = this.props.artists ? this.props.artists.map(artist => {
            return (
                <div className="ArtistItem" key={artist._id}>
                    <CardGroup>
                        <Card>
                            <CardImg top width="100%" src={"http://localhost:9000/uploads/" + artist.image}
                                     alt="Card image cap" />
                            <CardBody>
                                <Link to={"/albums/" + artist._id}>{artist.artists}</Link>
                            </CardBody>
                            {
                                this.props.user && this.props.user.username
                                && this.props.user.username === 'admin' ?
                                <div className="btnBlock">
                                    <Button color="danger">Delete</Button>
                                    {
                                        artist.published === false ?
                                            <div><button className="bt danger">Not published</button> </div>:
                                            <div><button className="bt success" >Published</button></div>
                                    }
                                </div> : null
                            }

                        </Card>
                    </CardGroup>
                </div>
            )
        }) : null;

        const sum = artists.length;

        return (
            <Fragment>
                {
                    this.props.user ? <BtnLinks/> : null
                }

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
        artists: state.musicReducers.artists,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchArtists: () => dispatch(fetchArtists()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);