import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {
    const [show, setShow] = React.useState(false)
    function clicked(){
        setShow(!show)
    }
    const { fullName, bio, profession, handleName } = props
    const Css = {
        color: "white",
        backgroundColor: "black",
        padding: "10px",
        
    };
  return (
    <div style={Css}>
        {show ? <div> <h1 onClick={() => handleName(fullName)}>{fullName}</h1>
            <p>{bio}</p>
            <p>{profession}</p>
            {props.children}
            <button onClick={()=>clicked()}>Click me</button> </div> : <div><button onClick={()=>clicked()}>Click me</button></div>}
        

        </div>
  )
}
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
    children: PropTypes.node
}

Profile.defaultProps = {
    fullName: "Name not provided",
    bio: "Bio not provided",
    profession: "Profession not provided",
    handleName: (name) => console.log(`Name: ${name}`)
}

export default Profile