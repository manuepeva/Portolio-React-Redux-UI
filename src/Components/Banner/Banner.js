import React from 'react'
import styles from './stylesBanner.scss'
import productivity from '../../img/productivity.png'
import AttentionG from '../../img/attentionGraber.png'
const Banner = () => {
    return (
       <div className="banner">
           <div><img className="imgBanner" src={productivity} alt="Productivity in software development"></img></div>
           <div className="bannerT">
           <h1>Frontend Developer</h1>
           <p className="subTitle">Hi, I´m Manuel. I develop & build with ReactJS</p>
           </div> 
           <div className="AttentionG"><img src={AttentionG} alt="Attention Graver"></img></div>
       </div>
    )
}

export default Banner
