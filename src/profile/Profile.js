import React from 'react'

import PropTypes from "prop-types";

const Profile = (props) => {


   
    return (
        <div>
            {props.handleName(props.fullName)}
            {props.children}
            <h1>{props.fullName}</h1>
            
            <h2>{props.profession}</h2>
            <p>{props.bio}</p>
        </div>
    )
   
}


Profile.defaultProps={
    fullName:"this is default name"
}

Profile.propTypes={
    fullName:PropTypes.string.isRequired,
    bio:PropTypes.string,
    profession:PropTypes.string,
}
    export default Profile
