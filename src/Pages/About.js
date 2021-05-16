import React from 'react'
import styled from 'styled-components'

function About() {
    return (
       
    <AboutSection id="about">
    <MaxWidth >
        <Title >About me</Title>
        <AboutContent >
            <ColumnLeft >
                <img src="../images/simon-1.jpg" alt=""/>
            </ColumnLeft>
            <ColumnRight >
                <Text >I'm Simon and I'm a <span class="typing-2"></span></Text>
                <p> Software Developer dedicated to improving skills through hands-on 
                learning and development work. Proficient in mobile and desktop development environments. 
                Adept at using  Javascript and other programming languages to produce clean code.
                 Well-organized and collaborative team player with strong communication and analytical abilities.</p>
                <a href="#">Download CV</a>
            </ColumnRight>
        </AboutContent>
    </MaxWidth>
 </AboutSection>
    )
}

export default About
const AboutSection =styled.section`
 padding: 100px 0;

h2{
    &::after{
  content:"who am i"
    }
    overflow: hidden;
}
`;
const MaxWidth =styled.div`
  max-width: 1300px;
    padding: 0 80px;
    margin:auto;
    @media (max-width: 991px) {
        padding: 0 50px;
    }
@media (max-width:947px){
    max-width: 930px;
}
@media (max-width: 690px) {
    
    padding: 0 23px;
}
`;
const Title = styled.h2`
position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
    &::before{
        content: "";
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #111;
    transform: translateX(-50%);
    }
    &::after{
        position: absolute;
    bottom: 0px;
    left: 50%;
    font-size: 20px;
    color: green;
    padding: 0 5px;
    background: #fff;
    transform: translateX(-50%);
    }
`;
const AboutContent =styled.div`
display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;
const ColumnLeft =styled.div`
width:45%;
img{
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 6px;
    @media (max-width: 1104px) {
    
        height: 350px;
        width: 350px;
    }
}
@media (max-width:947px){
    width: 100%;
    display: flex;
        justify-content: center;
        margin: 0 auto 60px;
}
`;
const ColumnRight =styled.div`
width:55%;
p{
    text-align:justify;
}
a{
    display: inline-block;
    background: green;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid green;
    transition: all 0.3s ease;
    &:hover{
        color:green;
        background:none;
    }
}
@media (max-width:947px){
  flex:100%;
  width: 100%;
}
`;
const Text =styled.div`
font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
    span{
        color:green;
    }
    @media (max-width: 500px) {
   
   font-size: 19px;
}
`;