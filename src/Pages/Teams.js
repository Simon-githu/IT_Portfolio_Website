import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel';
function Teams() {
    const breakPoints=[
        {width:500,itemsToShow:1},
        {width:768,itemsToShow:3},
      
    ];
    return (
        
    <TeamsSection class="teams" id="teams">
    <MaxWidth class="max-width">
        <Title class="title">My teams</Title>
        <Carousel 
        showArrows="true"
       
        breakPoints={breakPoints}>
            <Card class="card">
                <Box class="box">
                    <Image src="../images/profile-1.jpg" alt=""/>
                    <Text class="text">Simon Baloi</Text>
                    <Paragraph>Freelance Developer</Paragraph>
                    <Paragraph>0814754456</Paragraph>
                </Box>
            </Card>
            <Card class="card">
                <Box class="box">
                    <Image src="images/profile-2.jpeg" alt=""/>
                    <Text class="text">Someone name</Text>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                </Box>
            </Card>
            <Card class="card">
                <Box class="box">
                    <Image src="images/profile-3.jpeg" alt=""/>
                    <Text class="text">Someone name</Text>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                </Box>
         </Card>
        
        </Carousel>
    </MaxWidth>
</TeamsSection>


    )
}

export default Teams
const TeamsSection =styled.div`
  padding: 100px 0;
  font-family: 'Poppins', sans-serif;
  background: #111;
  color: #fff;
`;
const MaxWidth =styled.div`
 max-width: 1300px;
    padding: 0 80px;
    margin: auto;
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

    &::before{
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #fff;
    transform: translateX(-50%);
}
&::after{
    position: absolute;
    bottom: -8px;
    left: 50%;
    font-size: 20px;
    color: green;
    padding: 0 5px;
    background: #111;
    transform: translateX(-50%);
    content: "who with me";
}

`;
const Image =styled.img`
  height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid green;
    transition: all 0.3s ease;
`;
const Card = styled.div`
 background: #222;
    border-radius: 6px;
    padding: 25px 35px;
    text-align: center;
    overflow: hidden;
    width:95%;
    transition: all 0.3s ease;
    &:hover{
        background: green;
    }
    &:hover ${Image}{
        border-color: #fff;
    }
`;
const Box =styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.05);
    }
`;

const Text = styled.div`
 font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;
`;
const Paragraph =styled.p`

`;