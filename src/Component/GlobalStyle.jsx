import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Serif', serif;
    scroll-behavior: smooth;
/* font-family: 'Nunito', sans-serif; */
  }
  .col-1 {
    width: 8.333333333333333%;
}

.col-2 {
    width: 16.66666666666666%;
}

.col-3 {
    width: 25%;
}

.col-4 {
    width: 33.33333333333333%;
}

.col-5 {
    width: 41.66666666666666%;
}

.col-6 {
    width: 50%;
}

.col-7 {
    width: 58.33333333333333%;
}

.col-8 {
    width: 66.66666666666666%;
}

.col-9 {
    width: 75%;
}

.col-10 {
    width: 83.33333333333333%;
}

.col-11 {
    width: 91.66666666666666%;
}

.col-12 {
    width: 100%;
}
.display-flex{
    display: flex;
    align-items: center;
    justify-content: center;
}
.grid-four-colum{
 grid-template-columns: repeat(4, 1fr);
}
.d-flex{
    display: flex;
}
.flex-wrap{
    flex-wrap: wrap;
}
.item-center{
    align-items: center;
}
.text-center{
    text-align: center;
}
.text-justify{
    text-align: justify;
}
.space-between{
    justify-content: space-between;
}
.space-around{
    justify-content: space-around;
}
.space-evenly{
    justify-content: space-evenly;
}
.flex-column-direction{
    flex-direction: column;
}
.container{
    margin: 0 3%;
}
.t-decoration{
    text-decoration: none;
}
.flex-column{
    flex-direction: column;
}
.display-grid{
    display: grid;
}
.g-1{
    gap: 1rem;
}
.g-2{
    gap: 2rem;
}
.bg-lb{
    background-color: ${({ theme }) => theme.colors.lightBlue};
}
.bg-org{
    background-color: ${({ theme }) => theme.colors.orange};
}
.button{
    border: none;
    outline: none;
    background: none;
    padding:  0.5rem 1rem;
    color: white;
    border-radius: 5px;
}
.btn{
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    border: none;
    height: 2rem;
    cursor: pointer;
    
}
.fs-1-5{
    font-size: 1.5rem;
}
.fs-1-2{
    font-size: 1.2rem;
}
.color-orange{
    color: ${({ theme }) => theme.colors.orange};
}
.color-lightBlue{
    color: ${({ theme }) => theme.colors.lightBlue};
}
.color-white{
    color: ${({ theme }) => theme.colors.white};

}
.border-tool{
position: relative;
}
.border-tool::before{
    content: " ";
    background-color: ${({ theme }) => theme.colors.orange};
    height: 3px;
    position: absolute;
    top: 90%;
    width: 100px;
    margin-top: 10px;
}
.border-tool::after{
    content: " ";
    background-color: ${({ theme }) => theme.colors.orange};
    width: 30px;
    height: 8px;
    position: absolute;
    left: 20px;
    top: 90%;
    border-radius: 5px;
    margin-top: 7px;
}
.column-heading{
    background-color: ${({ theme }) => theme.colors.lightBlue};
    height: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
}
.content-data{
    font-size: 1.5rem;
    padding: 1rem;
    line-height: 2rem;
    border-top: 5px solid ${({ theme }) => theme.colors.orange};
    border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
    background-color: ${({ theme }) => theme.colors.white};
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
    }
} 
.first-column{
            .content-data{
            padding: 1rem 0;
            div{
                transition: all 0.2s;
                padding: 0 1rem;
                 &:hover{
                background-color: ${({ theme }) => theme.colors.orange};
                color: ${({ theme }) => theme.colors.white};
                }

                &:hover a{
                    color: ${({ theme }) => theme.colors.white};
                }
            } 
        }
        }         
`;