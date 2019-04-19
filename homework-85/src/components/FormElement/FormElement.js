import React from 'react';
import {FormGroup} from "reactstrap";
import PropTypes from 'prop-types'

const FormElement = (props) => {
    return (
        <FormGroup>
            <input className={props.className}
                   type={props.type}
                   name={props.name}
                   placeholder={props.placeholder}
                   value={props.value}
                   onChange={props.onChange}
            />
        </FormGroup>
    );
};

FormElement.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FormElement;