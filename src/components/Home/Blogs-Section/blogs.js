import React from 'react';
import typography from '../../../styles/typography';
import Blog_Image1 from './../../../assets/Blog_Image1.png'
import Blog_Image2 from './../../../assets/Blog_Image2.png'
import Blog_Image3 from './../../../assets/Blog_Image3.png'
import RamBudime from './../../../assets/Ram-Budime.jpg'
import Shrishti from './../../../assets/Srishti.JPG'
import Vikram from './../../../assets/vikram_crop.jpg'
import './styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BlogSection = () => {
    const allBlogs = [
        {
            image: Blog_Image1,
            type: 'Article1',
            title: 'Boost your conversion rate',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
            author: {
                name: 'Roel Aufderehar',
                image: RamBudime,
                published_date: 'Mar 16, 2021',
                read_time: '6 min read'
            }
        },
        {
            image: Blog_Image2,
            type: 'Article2',
            title: 'Boost your conversion rate',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
            author: {
                name: 'Roel Aufderehar',
                image: Shrishti,
                published_date: 'Mar 16, 2021',
                read_time: '6 min read'
            }
        },   
            {
                image: Blog_Image3,
                type: 'Article3',
                title: 'Boost your conversion rate',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
                author: {
                    name: 'Roel Aufderehar',
                    image: Vikram,
                    published_date: 'Mar 16, 2021',
                    read_time: '6 min read'
                }
            },
            {
                image: Blog_Image1,
                type: 'Article4',
                title: 'Boost your conversion rate',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
                author: {
                    name: 'Roel Aufderehar',
                    image: RamBudime,
                    published_date: 'Mar 16, 2021',
                    read_time: '6 min read'
                }
            },
            {
                image: Blog_Image2,
                type: 'Article5',
                title: 'Boost your conversion rate',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
                author: {
                    name: 'Roel Aufderehar',
                    image: Shrishti,
                    published_date: 'Mar 16, 2021',
                    read_time: '6 min read'
                }
            },   
                {
                    image: Blog_Image3,
                    type: 'Article6',
                    title: 'Boost your conversion rate',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
                    author: {
                        name: 'Roel Aufderehar',
                        image: Vikram,
                        published_date: 'Mar 16, 2021',
                        read_time: '6 min read'
                    }
                },
                {
                    image: Blog_Image1,
                    type: 'Article7',
                    title: 'Boost your conversion rate',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
                    author: {
                        name: 'Roel Aufderehar',
                        image: RamBudime,
                        published_date: 'Mar 16, 2021',
                        read_time: '6 min read'
                    }
                },
                {
                    image: Blog_Image2,
                    type: 'Article8',
                    title: 'Boost your conversion rate',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
                    author: {
                        name: 'Roel Aufderehar',
                        image: Shrishti,
                        published_date: 'Mar 16, 2021',
                        read_time: '6 min read'
                    }
                },   
                    {
                        image: Blog_Image3,
                        type: 'Article9',
                        title: 'Boost your conversion rate',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
                        author: {
                            name: 'Roel Aufderehar',
                            image: Vikram,
                            published_date: 'Mar 16, 2021',
                            read_time: '6 min read'
                        }
                    }
    ]
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          paritialVisibilityGutter: 60
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          paritialVisibilityGutter: 50
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          paritialVisibilityGutter: 30
        }
      };
 return(
     <div className='blogs_container'>
        <div className='blogs_section_header'>
            <div className='title-section'>
                <p className='fontsize36px lineheight40px' style={{...typography.h136Px, lineHeight: '40px', margin: 0}}>Our Blogs</p>
                <p className='title-caption fontsize18px lineheight26px'>We always want to share our thoughts with our customers.</p>
            </div>
            {/* <Link className="btn btn-outline-custom" to='/blogs'>Read more blogs</Link> */}
        </div>
        <Carousel
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            responsive={responsive}
            >
      {allBlogs.slice(0, allBlogs.length).map((blog,index) => {
        return (
            <div key={index} className="card blogs_section_card shadow bg-white rounded" >
                 <img className="card-img-top" src={blog.image} alt="Card cap" />
                 <div className="card-body padding20">
                        <p className="card-subtitle fontsize16px marginBottom8" style={{color: '#CA2128', fontWeight: 700, fontSize:'16px'}}>{blog.type}</p>
                        <h5 className="card-title fontsize20px marginBottom12" style={{fontSize:'20px'}}>{blog.title}</h5>
                        <p className="card-text fontsize18px marginBottom16" style={{fontSize:'18px'}} >{blog.content}</p>
                        <section className='author-section'>
                            <img src={blog.author.image} alt="" />
                            <div>
                                <p className='author-title fontsize14px'>{blog.author.name}</p>
                                <p className='fontsize14px'>
                                    {blog.author.published_date} . {blog.author.read_time}
                                </p>
                            </div>

                        </section>
                    </div>
            </div>
        );
      })}
    </Carousel>

        </div>
 )};

export default BlogSection;
