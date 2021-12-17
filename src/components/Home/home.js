import React from 'react';
import Section1 from './Section1/index';
import Section2 from './Section2/index';
import Section4 from './Section4/index';
import Section5 from './Section5/index';
import Section6 from './Section6/index';
import Section7 from './Section7/index';
import Section8 from './Section8/index';
import banner from './../../assets/iphone_black.svg';
import './styles.css'
import BlogSection from './Blogs-Section/blogs';

const Home = () => {
    return (
        <div> 
            <Section1 />
            <Section2 /> 
            <Section4  />
           <Section8 />
           <Section7 />
           <BlogSection />
           <Section5 img={banner} />
           <Section6 />         
        </div>
    )
}

export default Home;
