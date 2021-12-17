import React from 'react';
import typography from '../../styles/typography';
import Blog_Image1 from './../../assets/Blog_Image1.png'
import Blog_Image2 from './../../assets/Blog_Image2.png'
import Blog_Image3 from './../../assets/Blog_Image3.png'
import RamBudime from './../../assets/Ram-Budime.jpg'
import Shrishti from './../../assets/Srishti.JPG'
import Vikram from './../../assets/vikram_crop.jpg'
import './styles.css';

const BlogsPage = () => {
    window.scrollTo(0,0);
    const allBlogs = [
        {
            image: Blog_Image1,
            type: 'Article',
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
            type: 'Article',
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
                type: 'Article',
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
                type: 'Article',
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
                type: 'Article',
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
                    type: 'Article',
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
                    type: 'Article',
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
                    type: 'Article',
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
                        type: 'Article',
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
 return(
     <div>
        <div className='blog_page_header'>
            <div className='title-section'>
                <p style={{...typography.h148Px, lineHeight: '60px', color:'#771A23',letterSpacing: '2%', margin: 0}}>Spetrol Publications</p>
                <p className='title-caption' style={{color: '#CA2128'}}>The latest industry news, interviews, technologies, and resources.</p>
            </div>
        </div>
     <div className='blog_page_container'>
        <div className='blogs_page_section'>
            {
                allBlogs.map((blog,index) => {
                    return <div key={index} className="card blogs_page_card shadow bg-white rounded" >
                    <img className="card-img-top" src={blog.image} alt="Card cap" />
                    <div className="card-body">
                        <p className="card-subtitle mb-2" style={{color: '#CA2128', fontWeight: 700}}>{blog.type}</p>
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.content}</p>
                        <section className='author-section'>
                            <img src={blog.author.image} alt="" />
                            <div>
                                <p className='author-title'>{blog.author.name}</p>
                                <p>
                                    {blog.author.published_date} . {blog.author.read_time}
                                </p>
                            </div>

                        </section>
                    </div>
                </div>
                })
            }
        </div>
     </div>
     </div>
 )};

export default BlogsPage;
