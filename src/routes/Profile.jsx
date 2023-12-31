// import profilePicture from "../assets/profile-picture.jpeg"
import { useState } from "react";
import data from "../data"
import { Link, useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import heartIcon from "../assets/heart-icon.svg"

export default function Profile() {

    const { id } = useParams();

    // Used to obtain the props passed in the Outlet Component
    const [accounts, currentAccount] = useOutletContext();
    // Verify if the item is being hover
    const [isHover, setIsHover] = useState(false);

    // Changes from true to false according with the hover
    function handleMouseEnter() {
        setIsHover(!isHover)
    }

    function handleMouseLeave() {
        setIsHover(!isHover)
    }

    // Style of the status, verifying if it's online or offline
    const styles = {
        backgroundColor: accounts[id].online == true ? "#57bf47" : "#c24652",
        left: isHover ? "-3.5rem" : "0",
        zIndex: 99
    }

    // Style of the hover effect upon the status
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
        zIndex: 99,
    }

    function friendOption() {
        
    }

    function addFriend() {
        
    }

    // Content to be displayed
    return(
        <div className="profile-page">  
            <div className="profile-info">
                <div className="status" style={styles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <p className="status-after" style={after}>{accounts[id].online ? "Online" : "Offline"}</p>
                </div>

                <img src={accounts[id].profilePicture} alt="profile picture" className="profile-picture"/>
                
                <div className="left-side">    
                    <p className="profile-name"><b>{accounts[id].name}</b> </p>
                    <p className="profile-username"><b>@{accounts[id].username}</b></p>
                    <div className="profile-numbers">
                        <p className="profile-stats"><b>{accounts[id].posts.length} posts</b> ● <b>{accounts[id].friends.length} friends</b></p>
                    </div>
                </div>
            </div> 

            <div className="profile-content">
                <hr className="line"/>
                <h2>Posts</h2>
                <div className="posts-list">
                    {
                        accounts[id].posts.map(({text, likes, id, authorId}) => 
                            <div className="post" key={id}>
                                <div className="post-detail">
                                    <img className="post-image" src={accounts[authorId - 1].profilePicture} alt="imagem" />  
                                    <p className="post-author"><b>{accounts[authorId - 1].username}</b></p>
                                </div>
                                <p className="post-text">{text}</p>
                                <div className="post-feedback">
                                    <img className="post-like-icon" src={heartIcon} alt="heart icon" />
                                    <p className="post-likes">{likes}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <hr className="line"/>
                <h2>Friends</h2>
                <div className="friends-list">
                    {
                        accounts[id].friends.map(({id, name}) => 
                            <div className="friend-card" key={id}>
                                <Link to={`/profile/${id - 1}`} style={{display:"flex", gap:"1rem", textDecoration: "none", alignItems: "center"}}>
                                    <img className="friend-profilePicture" src={accounts[id - 1].profilePicture} alt="friend" />
                                    <p className="friend-name">
                                        {
                                            id == currentAccount 
                                            ? <b>me</b>
                                            : <b>{name}</b>
                                        }
                                    </p>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div> 
        </div>
    )
}