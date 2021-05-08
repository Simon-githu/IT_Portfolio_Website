import React from 'react'
import styled from 'styled-components'

function Skills() {
    return (
    
    <SkillsSection class="skills" id="skills">
    <MaxWidth class="max-width">
        <Title class="title">My skills</Title>
        <SkillsContent class="skills-content">
            <ColumnLeft class="column left">
                <Text class="text">My creative skills & experiences.</Text>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.</Paragraph>
                <Link href="#">Read more</Link>
            </ColumnLeft>
            <ColumnRight class="column right">
                <Bars class="bars">
                    <Info class="info">
                        <span>HTML</span>
                        <span>50%</span>
                    </Info>
                    <LineHtml class="line html"></LineHtml>
                </Bars>
                <Bars class="bars">
                    <Info class="info">
                        <span>CSS</span>
                        <span>50%</span>
                    </Info>
                    <LineCss class="line css"></LineCss>
                </Bars>
                <Bars class="bars">
                    <Info class="info">
                        <span>C# .Net core</span>
                        <span>80%</span>
                    </Info>
                    <LineJs class="line js"></LineJs>
                </Bars>
                <Bars class="bars">
                    <Info class="info">
                        <span>PHP</span>
                        <span>50%</span>
                    </Info>
                    <LinePhp class="line php"></LinePhp>
                </Bars>
                <Bars class="bars">
                    <Info class="info">
                        <span>MySQL</span>
                        <span>70%</span>
                    </Info>
                    <LineSql class="line mysql"></LineSql>
                </Bars>
            </ColumnRight>
        </SkillsContent>
    </MaxWidth>
</SkillsSection>

    )
}

export default Skills
const SkillsSection = styled.div`
font-family: 'Poppins', sans-serif;
padding: 100px 0;
`;
const MaxWidth = styled.div`
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
const SkillsContent = styled.div`
display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
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
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #111;
    transform: translateX(-50%);
}
&::after{
    position: absolute;
    bottom: -8px;
    left: 50%;
    font-size: 20px;
    color: green;
    padding: 0 5px;
    background: #fff;
    transform: translateX(-50%);
    content: "what i know";
}
`;
const ColumnLeft = styled.div`
 width: calc(50% - 30px);
 @media (max-width:947px){
    width: 100%;
        margin-bottom: 35px;
 }
`;
const Text = styled.div`

    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    @media (max-width: 500px) {
   
   font-size: 19px;
}
`;
const Paragraph = styled.p`
text-align: justify;
`;
const Link = styled.a`
display: inline-block;
    background: green;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 16px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid green;
    transition: all 0.3s ease;
    &:hover{
        color: green;
    background: none;
    }
`;
const ColumnRight = styled.div`
 width: calc(50% - 30px);
span{
    font-weight: 500;
    font-size: 18px;
}
@media (max-width:947px){
    width: 100%;
        margin-bottom: 35px;
 }
`;
const Bars =styled.div`
margin-bottom: 15px;
`;
const Info =styled.div`
   display: flex;
    margin-bottom: 5px;
    align-items: center;
    justify-content: space-between;
`;
const LineHtml = styled.div`
   height: 5px;
    width: 100%;
    background: lightgrey;
    position: relative;
    &::before{
        content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: green;
    width: 90%;
    }
`;
const LineCss = styled.div`
   height: 5px;
    width: 100%;
    background: lightgrey;
    position: relative;
    &::before{
        content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: green;
    width: 60%;
    }
`;
const LineJs = styled.div`
   height: 5px;
    width: 100%;
    background: lightgrey;
    position: relative;
    &::before{
        content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: green;
    width: 80%;
}
`;
const LinePhp = styled.div`
   height: 5px;
    width: 100%;
    background: lightgrey;
    position: relative;
    &::before{
        content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: green;
    width: 50%;
}
`;
const LineSql = styled.div`
   height: 5px;
    width: 100%;
    background: lightgrey;
    position: relative;
    ::before{
        content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: green;
    width: 70%;
}
`;