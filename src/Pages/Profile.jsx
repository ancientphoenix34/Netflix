import React from 'react'
import './Profile.css'
import NavBar from '../NavBar'
import profileLogo from '../assets/avatar.png'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'


const Profile = () => {

    const user = useSelector(selectUser);

  return (
    <div className='profile'>
        <NavBar/>
        <div className="profile-body">
            <h2>Edit profile</h2>
            <div className="profile-info">
                <img src={profileLogo} alt="" />
                <div className="profile-details">
                    <h2>{user.email}</h2>
                    <div className="profile-plans">
                        <label  className="profile-label" htmlFor="">Language</label>
                        <br />
                        <select className="profile-language" name="" id="">
                            <option value="english">English</option>
                            <option value="spanish">el españo </option>
                            <option value="french">français</option>
                            <option value="arabic">عربي</option>
                            <option value="chineese">中國人</option>
                            <option value="hebrew">עִברִית</option>
                            <option value="hindi">हिंदी</option>
                            <option value="indonesia">Indonesia</option>
                            <option value="japanese">日本語</option>
                            <option value="urdu">اردو</option>
                            <option value="turkish">Türkçe</option>
                            <option value="russian">русский</option>
                        </select>
    
                        <h3>Maturity settings</h3>
                        <button className='profile-maturity-button'>ALL MATURITY RATINGS</button>
                        <p className='profile-maturity-p'>Your maturity rating will be used to show you relevant movies.</p>
                        <button className='profile-maturity-edit'>Edit</button>
                       
                        <h3>Autoplay controls</h3>
                        

<div className="autoplay-control">
  <label className="checkbox-label">
    <input className="profile-checkbox" type="checkbox" />
    Autoplay next episode in a series on all devices
  </label>
</div>

<div className="autoplay-control">
  <label className="checkbox-label">
    <input className="profile-checkbox" type="checkbox" />
    Autoplay previews while browsing on all devices
  </label>
</div>

                        <button onClick={()=>auth.signOut()}className='profile-signout'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
