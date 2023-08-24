import heartIcon from "../assets/heart-icon.svg";
import { Link, useOutletContext } from "react-router-dom";

export default function Home() {
    // Used to obtain the props passed in the Outlet Component
    const [accounts, currentAccount] = useOutletContext();

    return(
        <>
            <h1>See what your friends are thinking!</h1>
            <div className="home-posts">
                {accounts[currentAccount - 1].friends.map(({id}) => 
                    accounts[id - 1].posts.map(({text, likes, id, authorId}) => 
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
                )}
            </div>
        </>
    )
}