import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiUserGroup } from 'react-icons/hi';
import { BsFileEarmarkArrowDownFill, BsLock } from 'react-icons/bs'
import { FaGlobeAsia } from 'react-icons/fa';
import HomeContent from './HomeContent';
import LIstBookAndJournals from './LIstBookAndJournals';
import { HashLink } from 'react-router-hash-link';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      
      duration: 700,
      
    });
  }, []);
  return (
    <Wrapper>
      <div className='main-home col-12'>
        <div className="slider display-flex flex-column">
          <div className="slider-back display-flex">
            <div className="slider-text display-flex flex-column col-12">
              <div className='mazedan-heading display-flex flex-column col-6'>
                <div className='display-flex'><h1 className='welcome-heading'>WELCOME TO</h1> &nbsp; <h1> MAZEDAN</h1></div>
                <div className='text-center'><p>Mazedan International Research Academy is an association of international scholars aimed at promoting research and development.</p></div>
              </div>
              <div className="slider-buttons col-6 display-flex">
                <NavLink><button className='button'>Submit Paper</button></NavLink>
                <NavLink><button className='button'>Join Mazedan</button></NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section2">
          <div className="container">
            <div className='col-12 display-flex'><h4>TAKE A LOOK</h4></div>
            <div className="section-icons col-12 display-flex">
              <div className='circle-icons col-3 '>
                <div style={{ animationDelay: "0.3s" }}>
                  <BsFileEarmarkArrowDownFill />
                  <p>100<sup>+</sup></p>
                </div>
                <h5>Article Archived</h5>
              </div>
              <div className='circle-icons col-3'>
                <div style={{ animationDelay: "0.5s" }}>
                  <HiUserGroup style={{ color: "#1f4e79" }} />
                  <p>1300<sup>+</sup></p>
                </div>
                <h5>Member Associate</h5>
              </div>
              <div className='circle-icons col-3'>
                <div style={{ animationDelay: "0.7s" }}>
                  <FaGlobeAsia style={{ color: "#79999f" }} />
                  <p>100<sup>+</sup></p>
                </div>
                <h5>Country Participate</h5>
              </div>
              <div className='circle-icons col-3'>
                <div style={{ animationDelay: "1s" }}>
                  <BsLock />
                  <p>10<sup>+</sup></p>
                </div>
                <h5> Journal Registered</h5>
              </div>
            </div>
          </div>
        </div>
        <HomeContent />
        <LIstBookAndJournals />
        <div className="container">
          <div className="links col-12 display-flex">
            <div className="column1 col-6 d-flex item-center flex-column">
              <div className='col-12 border-tool' >
                <NavLink to='' data-aos="fade-right" data-aos-easing="ease-in-sine"> <h2 className=''>Our</h2>&nbsp;<h2>services</h2></NavLink>
              </div>
              <div className='col-12 border-tool'>
                <NavLink to=''data-aos="fade-right" data-aos-easing="ease-in-sine"><h2 className=''>Invention</h2>&nbsp;<h2>That Change The World</h2></NavLink>
              </div>
              <div className='col-12 border-tool'>
                <NavLink to=""data-aos="fade-right" data-aos-easing="ease-in-sine"><h2 className=''>What</h2>&nbsp;<h2>People Say</h2></NavLink>
              </div>
            </div>
            <div className="column2 col-6 d-flex item-center flex-column">
              <div className='col-12 border-tool'>
                <HashLink to={'/training/#training-courses'} data-aos="fade-left" data-aos-easing="ease-in-sine"><h2 className=''>Popular</h2>&nbsp;<h2>Courses</h2></HashLink>
              </div>
              <div className='col-12 border-tool'>
                <NavLink to="" data-aos="fade-left" data-aos-easing="ease-in-sine"> <h2 className=''>Quick</h2>&nbsp;<h2>Links</h2></NavLink>
              </div>
              <div className='col-12 border-tool'>
                <NavLink to='' data-aos="fade-left" data-aos-easing="ease-in-sine"><h2 className=''>Frequently</h2>&nbsp;<h2>Ask Questions</h2></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .main-home{
  .slider{
    background-image:  url(./images/Slider_images/Slider1.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;
    animation: imgSlider 50s linear infinite  ;
    color: ${({ theme }) => theme.colors.white};
      .slider-back{
        width: 100%;
        height: 100%;
        background: #0707733b;
      }
      .slider-text{
        .mazedan-heading{
              .welcome-heading{
                color: ${({ theme }) => theme.colors.yellow};
              }
              h1{
                font-size: 3rem;
              }
              p{
                font-size: 18px;
              }
        }
      .slider-buttons{
        margin-top: 10rem;
        justify-content: space-around;
        
        button{
          border: 1px solid ${({ theme }) => theme.colors.white};
          font-size: 18px;
          transition: ease 0.6s;
          cursor: pointer;
            &:hover{
              background-color: ${({ theme }) => theme.colors.orange};
              border: none;
            }
        }
      }}
  }

  @keyframes imgSlider {
    0%{
      background-image: url(./images/Slider_images/Slider1.jpg);
    }
    50%{
      background-image: url(./images/Slider_images/Slider3.jpg);
    }
    100%{
      background-image: url(./images/Slider_images/Slider4.jpg);
    }
  }
  .home-section2{
    padding:  1rem 0;
    background-color: ${({ theme }) => theme.colors.MinDarkWhite};
      .section-icons{
          margin-top: 5rem;
        .circle-icons{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          div{
            animation: imgUp 0.9s linear infinite alternate;
            border: 8px solid ${({ theme }) => theme.colors.orange};
            color: ${({ theme }) => theme.colors.orange};
            border-radius: 50%;
            padding: 1rem;
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 3rem;
          }
          p{
            font-size: 12px;
            margin-top: 0.3rem;
            color: ${({ theme }) => theme.colors.black};
          }
        }
      }
  }
  .links{
      margin-bottom: 1rem;
      a{
          text-decoration: none;
          display: flex;
          align-items:center;
          font-size: 1.2rem;
          margin: 1rem 0;
          text-transform: uppercase;
            h2:first-child{
              color: ${({ theme }) => theme.colors.lightBlue};
            }
            h2:last-child{
                color: ${({ theme }) => theme.colors.orange};
                transform: translateY(-1px);
            }
      }
        }
}
@keyframes imgUp{
  to{
    transform: translateY(-10px);
  }
} 

`;

export default Home;