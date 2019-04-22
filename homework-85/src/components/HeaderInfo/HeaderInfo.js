import React from 'react';
import PropTypes from 'prop-types';

const HeaderInfo = (props) => {
    return (
        <div className="HeaderTitleInfo">
            <h2
                style={{
                    color: '#5e5e5e', fontWeight: "bold"}}
            >
                {props.title}
            </h2>
            <h3><strong>{props.artistName}</strong></h3>

            <p><strong>Number of {props.musicOfNumber}: {props.sum}</strong></p>
        </div>
    );
};

HeaderInfo.propTypes = {
    artistName: PropTypes.string,
    title: PropTypes.string.isRequired,
    sum: PropTypes.number,
    musicOfNumber: PropTypes.string,
};

export default HeaderInfo;