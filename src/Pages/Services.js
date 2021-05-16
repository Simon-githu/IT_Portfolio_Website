import React,{useState} from 'react'
import styled from 'styled-components'
import {FaCode,FaMobile} from 'react-icons/fa'
function Services() {
    const [FaMobileColor,setFaMobileColor]=useState('green');
    const [FaCodeColor,setFaCodeColor]=useState('green');

    const FaCodeStyle={
        color:FaCodeColor,
        fontSize:'50px',
        transition: 'all 0.3s ease',
    }
    
    const FaMobileStyle={
        color:FaMobileColor,
        fontSize:'50px',
        transition: 'all 0.3s ease',
    }
    
    return (    
<ServicesSection  id="services">
    <MaxWidth >
        <Title >My services</Title>
        <ServicesContent >
            <Card onMouseEnter={()=>setFaCodeColor('#fff')} onMouseLeave={()=>setFaCodeColor('green')}>
                <CardBox >
                    <FaCode style={FaCodeStyle}/>
                    <CardText class="text" >Web Development</CardText>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                </CardBox>
            </Card>
            
            <Card  onMouseEnter={()=>setFaMobileColor('#fff')} onMouseLeave={()=>setFaMobileColor('green')}>
                <CardBox >
                   <FaMobile
                      style={FaMobileStyle} 
                   />
                    <CardText class="text">Mobile Development</CardText>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                </CardBox>
            </Card>
            
           </ServicesContent>
        </MaxWidth>
</ServicesSection>
    )
}

export default Services
const ServicesSection =styled.section`
 display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    background: #111;
    color: #fff;
    padding: 100px 0;
`;
const MaxWidth =styled.div`
 
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
const Title =styled.h2`
 position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
    color:#fff;
   overflow: hidden;
&::before{
    content: "";
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #fff;
    transform: translateX(-50%);
}
&::after{
    position: absolute;
    bottom: 0px;
    left: 50%;
    font-size: 20px;
    color: green;
    padding: 0 5px;
    background: #111;
    transform: translateX(-50%);
    content: "what i provide";
}
`;
const ServicesContent =styled.div`
display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  
    `;
const CardBox=styled.div`

 transition: all 0.3s ease;

`;
const Card=styled.div`
    width: calc(33% - 20px);
    background: #222;
    text-align: center;
    border-radius: 6px;
    padding: 20px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
  
&:hover{
    background: green;
${CardBox}{
    transform: scale(1.05);
}
}
&:hover ${CardBox}{
    transition: all 0.3s ease;
    
}
@media(max-width:947px){
    width: calc(50% - 10px);
        margin-bottom: 20px;
}
@media (max-width: 690px) {
   width:100%;
}

`;

const CardText=styled.div`
 font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;
`;




