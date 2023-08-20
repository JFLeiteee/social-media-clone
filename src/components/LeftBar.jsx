import { useState } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/home-icon.svg'
import configIcon from '../assets/config-icon.svg'
import data from '../data';

export default function LeftBar(props) {

    return (
        <>
            <div className="left-bar">
                <select name="profile-selection" id="profile-selection" onChange={props.handleChange}>
                    {/* Change the account */}
                    { props.accounts.map(({username, id}) => (<option value={id} key={id}>{username}</option>)) }
                    <option value="addAccount">+ add account</option>
                </select>
                
                {/* Send to the profile page */}
                <Link to={`/profile/${props.currentAccount - 1}`} className='profile'>
                    <img src={props.accounts[props.currentAccount - 1].profilePicture} alt="profile-picture" className='account-picture'/>
                    <p className="username">{props.accounts[props.currentAccount - 1].username}</p>
                </Link>

                {/* Navigate for other pages */}
                <div className="pages">
                    <Link to="/" className='page'> <img src={homeIcon} className='icon'/> Home</Link>
                    <Link to="/config" className='page'> <img src={configIcon} className='icon'/> Configuration</Link>
                </div>
            </div>
        </>
    )
}