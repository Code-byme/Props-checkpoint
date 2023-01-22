import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {
    const { fullName, bio, profession, handleName } = props
    const Css = {
        color: "white",
        backgroundColor: "black",
        padding: "10px",
        
    };
  return (
    <div style={Css}>
        <h1 onClick={() => handleName(fullName)}>{fullName}</h1>
            <p>{bio}</p>
            <p>{profession}</p>
            {props.children}

        </div>
  )
}
Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func.isRequired,
    children: PropTypes.node
}

Profile.defaultProps = {
    fullName: "Name not provided",
    bio: "Bio not provided",
    profession: "Profession not provided",
    handleName: (name) => console.log(`Name: ${name}`)
}

export default Profile