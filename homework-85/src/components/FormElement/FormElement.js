import React from 'react';
import {Col, FormGroup, Label} from "reactstrap";
import PropTypes from 'prop-types';

const FormElement = (props) => {
    return (
        <FormGroup row>
            <Label for={props.name} sm={3}>{props.title}</Label>
            <Col sm={9}>
                <input className={props.className}
                       type={props.type}
                       name={props.name}
                       placeholder={props.placeholder}
                       value={props.value}
                       onChange={props.onChange}
                />
            </Col>
        </FormGroup>
    );
};

FormElement.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FormElement;