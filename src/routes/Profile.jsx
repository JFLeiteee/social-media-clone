// import profilePicture from "../assets/profile-picture.jpeg"
import { useState } from "react";
import data from "../data"
import { useOutletContext } from "react-router-dom";

export default function Profile(props) {
    const [accounts, currentAccount] = useOutletContext();
    const [isHover, setIsHover] = useState(false);

    function handleMouseEnter() {
        setIsHover(!isHover)
    }

    function handleMouseLeave() {
        setIsHover(!isHover)
    }


    const styles = {
        backgroundColor: accounts[currentAccount - 1].online == true ? "#57bf47" : "#c24652",
        left: isHover ? "-3.5rem" : "0",
    }

    const after = {
        display: isHover ? "block" : "none",
        position: "absolute",
        width: "4rem",
        height: "1.5rem",
        top: "-1rem",
        right: "-5rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        borderRadius: "0 10px 10px 0",
        backgroundColor: "#fff",
    }

    return(
        <>  
            <div className="profile-info">
                <div className="status" style={styles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <p className="status-after" style={after}>{accounts[currentAccount - 1].online ? "Online" : "Offline"}</p>
                </div>
                <img src={accounts[currentAccount - 1].profilePicture} alt="profile picture" className="profile-picture"/>
                <p className="profile-username"><b>{accounts[currentAccount - 1].name}</b></p>
            </div>  
        </>
    )
}