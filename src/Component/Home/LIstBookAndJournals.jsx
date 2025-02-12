import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";

const LIstBookAndJournals = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        });
      }, []);
    return (
        <Wrapper>
            <div className="main">
                <div className="container">
                    <div className="heading d-flex item center flex-column col-12">
                        <div className='d-flex item-center col-12'>
                            <h2 className='heading-1' data-aos="fade-right">LIST of</h2>&nbsp;<h2 className='heading-2' data-aos="fade-left"> Book And Journals</h2>
                        </div>
                        <div className='col-12'><h5 data-aos="fade-up">Explore the List</h5></div>
                    </div>
                    <div className="sort-data col-12">
                        <div className="sort-row col-12">
                            <ul className='d-flex item-center col-6 space-between'>
                                <li data-aos="fade-up">All</li>
                                <li data-aos="fade-up">Open Access</li>
                                <li data-aos="fade-up">Books</li>
                                <li data-aos="fade-up">Journals</li>
                                <li data-aos="fade-up">Magazines</li>
                            </ul>
                        </div>

                        <div className="show-data col-12">
                            <div className='d-flex item-center space-between flex-wrap' >
                                <div className="books "data-aos="zoom-out"><img src="./images/books-pic/1.png" alt="" /></div>
                                <div className="books 
                                "data-aos="zoom-out"><img src="./images/books-pic/2.png" alt="" /></div>
                                <div className="books" data-aos="zoom-out"><img src="./images/books-pic/3.png" alt="" /></div>
                                <div className="books" data-aos="zoom-out"><img src="./images/books-pic/4.png" alt="" /></div>
                                <div className="books" data-aos="zoom-out"><img src="./images/books-pic/5.png" alt="" /></div>
                                <div className="books" data-aos="zoom-out"><img src="./images/books-pic/6.png" alt="" /></div>
                                <div className="books" data-aos="zoom-out"><img src="./images/books-pic/7.png" alt="" /></div>
                                <div className="books" data-aos="zoom-out"><img src="./images/books-pic/8.png" alt="" /></div>
                                <div className="books" data-aos="zoom-out"><img src="./images/books-pic/9.png" alt="" /></div>
                                <div className="books" data-aos="zoom-out"><img src="./images/books-pic/2.png" alt="" /></div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .main{

        .container{

            .heading{
                text-transform: uppercase;
                gap: 0.5rem;

                .heading-1{
                    border-bottom: 3px solid ${({ theme }) => theme.colors.orange};

                }
                .heading-2{
                    color: ${({ theme }) => theme.colors.orange};
                }
                
            }
            .sort-data{
                margin: 1rem 0;
                .sort-row{
                    ul{
                        list-style: none;

                        li{
                        cursor: pointer;
                        color: ${({ theme }) => theme.colors.orange};
                        transition: all 0.3s ease;
                            &:hover{
                                transform: scale(1.1);
                            }
                        }
                    }
                }
            
            .show-data{
                
                .books{
                    width: 15%;
                    /* height: 15rem; */
                    /* background-color: aliceblue; */
                     margin: 1rem ;
                     display: flex;
                     flex-wrap: wrap;
                     img{
                        width: 100%;
                        height: 100%;
                     }

                }
            }
        }
        }
        
    }
`;
export default LIstBookAndJournals