import React from 'react';
import PropTypes from 'prop-types';
import logoMusic from '../../assets/image/logomusic.png';

const HeaderInfo = (props) => {
    return (
        <div className="HeaderTitleInfo">
            <h2
                style={{
                    color: '#5e5e5e', fontWeight: "bold"}}
            >
                {props.title}
            </h2>
            <img className="logoMusic" src={logoMusic} alt="logo image"/>

            <p><strong>Number of artists: {props.sum}</strong></p>
        </div>
    );
};

HeaderInfo.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number,
};

export default HeaderInfo;