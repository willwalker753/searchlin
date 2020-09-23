import React from 'react';
// import PropTypes from 'prop-types';

function CurModifiers(props) {
    return (
        <>
            <h3>Searchlin</h3>
            <h3><a href={`/${props.link1}`}>{props.linkLabel1}</a></h3>
        </>
    )
}

// Nav.propTypes = {
//     title: PropTypes.string.isRequired,
// }

export default CurModifiers;
