import React from 'react';
import {CardBody, CardGroup, CardImg, CardText} from "reactstrap";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

const CardForm = (props) => {
    return (
        <div className="AlbumsItem" key={props._id}>
            <CardGroup>
                <CardForm>
                    <CardImg top width="100%" src={"http://localhost:9000/uploads/" + props.image}
                             alt="Card image cap" />
                    <CardBody>
                        <Link to={/tracks/ + props._id}>
                            {props.name}
                        </Link>
                        <CardText>{props.year}</CardText>
                    </CardBody>
                </CardForm>
            </CardGroup>
        </div>
    );
};

CardForm.propTypes = {
    _id: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

export default CardForm;