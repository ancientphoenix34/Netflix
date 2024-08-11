import React from 'react'
import './Banner.css'

const Banner = () => {


  const truncate=(string,n)=>{
return string?.lenth>n?string.substr(0,n-1)+'...':string
  }


  return (
    <div className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2001.png")`,
        backgroundPosition:"center center",
    }}>

      <div className="banner-contents">
        <h1 className='banner-title'>Movie-name</h1>
        <div className="banner-buttons">
        <button className='banner-button'>Play</button>
        <button className='banner-button'>My List</button>
        </div>
        <h1 className="banner-description">
          {truncate("Here goes banner description",150)}
        </h1>
      </div>

      <div className="banner-fadebottom"></div>
      
    </div>
  )
}

export default Banner
