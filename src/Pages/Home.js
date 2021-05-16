import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
 margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
`;
function Home() {

    return (
        <>
       <Global/>
    <HomeSection id="home">
    <MaxWidth>
        <HomeContent class="home-content">
            <Text1 class="text-1">Hello, my name is</Text1>
            <Text2 class="text-2">Simon Baloi</Text2>
            <Text3 class="text-3">And I'm a <span class="typing"></span></Text3>
            <a href="#">Hire me</a>
        </HomeContent>
    </MaxWidth>
</HomeSection>
</>
    )
}

export default Home
const HomeSection = styled.section`
    display: flex;
    background: url("images/simon.png") no-repeat center;
    height: 100vh;
    color: #fff;
    min-height: 500px;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu', sans-serif;
    padding: 100px 0;
   @media (max-width:947px){

   }
    
`;
const MaxWidth = styled.div`
    margin: auto 0 auto 30px;
    max-width: 1300px;
    padding: 0 80px;
    @media (max-width: 1300px) {
    margin-left:0px;
  
}
@media (max-width: 991px) {
        padding: 0 50px;
    }    
@media(max-width:947px){
    max-width: 930px;
    
}
@media (max-width: 690px) {
    
    padding: 0 23px;
}
`;
const Text1 = styled.div`
 font-size: 27px;
`;
const Text2 = styled.div`
 font-size: 75px;
    font-weight: 600;
    margin-left: -3px;
    @media(min-width:947px){
        font-size: 70px;
    }
    @media (max-width: 690px) {
    
    font-size:60px;
}
@media (max-width: 500px) {
   
        font-size: 50px;
    }
`;
const Text3 = styled.div`
font-size: 40px;
    margin: 5px 0;
    span{
        color: green;
    font-weight: 500;
    }
    @media(min-width:947px){
        font-size: 35px;
    }
    @media (max-width: 690px) {
    
    font-size:32px;
}
@media (max-width: 500px) {
   
   font-size: 27px;
}
`;
const HomeContent = styled.div`
 
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
   
a{
    display: inline-block;
    background: green;
    color: #fff;
    font-size: 25px;
    padding: 12px 36px;
    margin-top: 20px;
    font-weight: 400;
    border-radius: 6px;
    border: 2px solid green;
    transition: all 0.3s ease;
    &:hover{
        color: green;
    background: none;
    @media(min-width:947px){
        font-size: 23px;
        padding: 10px 30px;
    }
    @media (max-width: 690px) {
    
   font-size:20px;
}
    }
   
}
`;