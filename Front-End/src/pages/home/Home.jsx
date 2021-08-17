import React from 'react'
import FeaturedInfo from '../../compoments/featuredInfo/FeaturedInfo'
import FeaturedInfo2 from '../../compoments/featuredInfo/FeaturedInfo2'
import FeaturedInfo3 from '../../compoments/featuredInfo/Featuredinfo3'
import "./home.css"


export default function Home() {
    return (
        <div className="home">
            <h1 className="featuredTitleTop">Cavite State University</h1>         
            <h2 className="featuredTitleBot">Mandate, Mission, and Vision</h2>
            <FeaturedInfo />
            <FeaturedInfo2 />
            <FeaturedInfo3 />
        </div>
    )
}
