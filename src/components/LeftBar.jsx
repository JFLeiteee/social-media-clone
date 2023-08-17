import { Link } from 'react-router-dom';
import homeIcon from '../assets/home-icon.svg'
import configIcon from '../assets/config-icon.svg'

export default function LeftBar() {
    let username = "jf.leiteee";
    let account = [
        { id:1, name: "ze"},
        { id:2, name: "leitee"},
        { id:3, name: "zezinho"},
    ]

    return (
        <>
            <div className="left-bar">
                <select name="profile-selection" id="profile-selection">
                    { account.map(({name}) => (<option value="name">{name}</option>)) }
                    <option value="addAccount">+ add account</option>
                </select>

                <Link to="/profile" className='profile'>
                    <div className='profile-picture'></div>
                    <p className="username">{username}</p>
                </Link>

                <div className="pages">
                    <Link to="/" className='page'> <img src={homeIcon} className='icon'/> Home</Link>
                    <Link to="/config" className='page'> <img src={configIcon} className='icon'/> Configuration</Link>
                </div>
            </div>
        </>
    )
}