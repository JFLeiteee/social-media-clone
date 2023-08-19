// import profilePicture from "../assets/profile-picture.jpeg"
import data from "../data"
import { useOutletContext } from "react-router-dom";

export default function Profile(props) {
    const [accounts, currentAccount] = useOutletContext();

    const styles = {
        backgroundColor: accounts[currentAccount - 1].online == true ? "#57bf47" : "#c24652"
    }

    return(
        <>  
            <div className="profile-info">
                <div className="status" style={styles}></div>
                <img src={accounts[currentAccount - 1].profilePicture} alt="profile picture" className="profile-picture"/>
                <p className="profile-username"><b>{accounts[currentAccount - 1].name}</b></p>
            </div>  
        </>
    )
}