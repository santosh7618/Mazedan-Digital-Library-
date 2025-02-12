import React from 'react'
import styled from 'styled-components'
import Clock from './Clock';
import { FaEnvelope, FaFacebook, FaHome, FaLinkedinIn, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { MdlLogoIcon, MdlMazedanLogoIcon } from './SvgComponent/MdlSvgIcon';
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
    
    return (
        <Wrapper>
            <div className="header">
                <div className="top-header col-12 ">
                    <div className="container d-flex item-center " style={{ height: 45 }}>
                        <div className="top-contact col-4 d-flex item-center">
                            <NavLink to={"mailto:reseach.mazedan@email.com"} className='display-flex'> <FaEnvelope /> reseach.mazedan@email.com</NavLink>
                            <NavLink to={"tel:994477338822"} className='display-flex'><FaPhoneAlt /> +91 8789999999</NavLink>
                        </div>
                        <div className="clock col-4 text-center">
                            <Clock />
                        </div>
                        <div className="follow-logo col-4 d-flex item-center">
                            <div><NavLink to=""><FaXTwitter className='social-icons' /></NavLink></div>
                            <div><NavLink to=""><FaYoutube className='social-icons' /> </NavLink></div>
                            <div><NavLink to=""><FaLinkedinIn className='social-icons' /></NavLink> </div>
                            <div><NavLink to=""><FaFacebook className='social-icons' /></NavLink></div>
                        </div>
                    </div>
                </div>
                <div className="main-header col-12">
                    <div className="container d-flex item-center" >
                        <div className="head-logo col-4 d-flex item-center">
                            <NavLink to='/' className='display-flex'>
                                {/* <img className='logo-img' src="./images/mazedan_white_logo1.png" alt="" /> */}
                               
                                <MdlMazedanLogoIcon />
                                 <img src="./images/MazedanHead.png" alt="" />
                                                                                                                                    
                            </NavLink>
                        </div>
                        <div className="head-logo2 col-4 display-flex">
                            <NavLink className='t-decoration display-flex flex-column'>
                                <MdlLogoIcon />
                            </NavLink>
                        </div>
                        <div className="head-logo3 col-4 display-flex">
                            <NavLink className='t-decoration display-flex flex-column'>
                                <div><img src="./images/JMS ICON.png" alt="" /></div>
                                <h4>JOURNAL MANAGEMENT SYSTEM</h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='navigation col-12'>
                    <div className="container display-flex">
                        <div className='home-icon'> <NavLink to=''><FaHome /></NavLink></div>
                        <div> <NavLink to={"/about-mazedan"}>ABOUT MAZEDAN</NavLink></div>
                        <div> <NavLink to={'/conference'} >CONFERENCE</NavLink></div>
                        <div> <NavLink to={'/membership'}>MEMBERSHIP</NavLink></div>
                        <div> <NavLink to={'/journals'}>JOURNALS</NavLink></div>
                        <div> <NavLink to={'/publication'}>PUBLICATIONS</NavLink></div>
                        <div> <NavLink to={'/training'}>TRAINING COURSES</NavLink></div>
                        <div> <NavLink to={'awards'}>AWARDS</NavLink></div>
                        <div> <NavLink to={'/contact-us'} >CONTACT US</NavLink></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  .header{

    .top-header{
        background-color: ${({ theme }) => theme.colors.orange};
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.1rem;
            .top-contact{
                gap: 5%;
                a{
                    gap: 10px;
                    white-space: nowrap;
                    text-decoration: none;
                    color: ${({ theme }) => theme.colors.white};
                }
            }
            .clock{
                color: ${({ theme }) => theme.colors.black};
            }
            .follow-logo{
                justify-content: right;
                gap: 5%;
                    .social-icons{
                        color: ${({ theme }) => theme.colors.white};
                        transition: all 0.3s ease 0s;
                        &:hover{
                                transform: scale(1.5);
                            }
                    }
            }
    }
    .main-header{
        background-color: ${({ theme }) => theme.colors.darkBlue};
        height: 8rem;
            .head-logo{
                height: 8rem;
                 a{
                    height: 100%;
                 
                svg{
                    height: 7rem;
                    width: 100%;
                    color: ${({ theme }) => theme.colors.white};
                }}
            }
            .head-logo2{
                height: 8rem;
                    a{
                        color: ${({ theme }) => theme.colors.white};
                    }
                    svg{
                        height: 14rem;
                        width: 100%;
                    }
                    
            }
            .head-logo3{
                height: 8rem;
                justify-content: end;
                a{
                    color: ${({ theme }) => theme.colors.white};

                }

                img{
                    height: 4rem;
                }
            }}
            .navigation{
                height: 45px;
                .container{
                    height: 100%;
                    gap: 2px;
                    .home-icon{
                        font-size: 30px;
                        padding-top: 0.4rem;
                    }
                    div{
                        background-color: ${({ theme }) => theme.colors.orange};
                        height: 100%;
                        width: auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0 1rem;
                        font-size: 16px;
                        a{
                            color: ${({ theme }) => theme.colors.white};
                            text-decoration: none;
                        }
                    }
                }
            }
  }
  
`;
export default Header