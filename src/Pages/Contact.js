import React from 'react'
import styled from 'styled-components'
import {FaUser,FaMapMarkerAlt,FaEnvelope} from 'react-icons/fa'
function Contact() {
    return (
    
    <ContactSection class="contact" id="contact">
    <MaxWidth class="max-width">
        <Title class="title">Contact me</Title>
        <ContactContent class="contact-content">
            <ColumnLeft class="column left">
                <Text class="text">Get in Touch</Text>
                <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</Paragraph>
                <Icons class="icons">
                    <Row class="row">
                        <FaUser
                            style={{fontSize: '25px',
                                   color: 'green'}}
                        />
                        <Info class="info">
                            <Head class="head">Name</Head>
                            <Subtitle class="sub-title">Phillip Sibiya</Subtitle>
                        </Info>
                    </Row>
                    <Row class="row">
                        <FaMapMarkerAlt
                            style={{fontSize: '25px',
                                   color: 'green'}}
                        />
                        <Info class="info">
                            <Head class="head">Address</Head>
                            <Subtitle class="sub-title">44 center street</Subtitle>
                            <Subtitle class="sub-title">Centurion</Subtitle>
                        </Info>
                    </Row>
                    <Row class="row">
                        <FaEnvelope
                        style={{fontSize: '25px',
                                color: 'green'}}
                        />
                        <Info class="info">
                            <Head class="head">Email</Head>
                            <Subtitle class="sub-title">phillipsibiya@gmail.com</Subtitle>
                        </Info>
                    </Row>
                </Icons>
            </ColumnLeft>
            <ColumnRight class="column right">
                <Text class="text">Message me</Text>
                <Form action="#">
                    <Fields class="fields">
                        <FieldName class="field name">
                            <InputName type="text" placeholder="Name" required/>
                        </FieldName>
                        <FieldEmail class="field email">
                            <InputEmail type="email" placeholder="Email" required/>
                        </FieldEmail>
                    </Fields>
                    <Field class="field">
                        <InputSubject type="text" placeholder="Subject" required/>
                    </Field>
                    <FieldTextArea class="field textarea">
                        <TextArea cols="30" rows="10" placeholder="Message.." required></TextArea>
                    </FieldTextArea>
                    <ButtonDiv class="button">
                        <Button type="submit">Send message</Button>
                    </ButtonDiv>
                </Form>
            </ColumnRight>
        </ContactContent>
    </MaxWidth>
</ContactSection>

    )
}

export default Contact
const ContactSection=styled.div`
 padding: 100px 0;
 font-family: 'Poppins', sans-serif;
 
`;
const MaxWidth=styled.div`
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
    overflow-y: hidden;
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
    content: "get in touch";
}
`;
const ContactContent=styled.div`
 display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  
`;
const Form = styled.form``;
const ButtonDiv=styled.div`
   height: 47px;
    width: 170px;
    overflow-y: hidden;
    margin-top:10px
`;
const Button =styled.button`
 width: 100%;
    height: 100%;
    border: 2px solid green;
    background: green;
    color: #fff;
    outline: none;
    font-size: 20px;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 15px;
    
    &:hover{
        color: green;
    background: none;
    }
`;
const FieldTextArea=styled.div`
 height: 80px;
    width: 100%;
    overflow-y: hidden;
`;
const TextArea =styled.textarea`
 height: 100%;
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 6px;
    outline: none;
    padding: 0 15px;
    font-size: 17px;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    padding-top: 10px;

    resize: none;
    &:focus{
        border-color: green;}
`;
const Field =styled.div`
  height: 45px;
    width: 100%;
    margin-bottom: 15px;
`;
const InputName = styled.input`

  height: 100%;
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 6px;
    outline: none;
    padding: 0 15px;
    font-size: 17px;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    &:focus{
        border-color: green;}
      
`;
const InputEmail = styled.input`
 
  height: 100%;
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 6px;
    outline: none;
    padding: 0 15px;
    font-size: 17px;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    &:focus{
        border-color: green;}
        @media (max-width:500px){
    margin-left:-10px;
}
     
`;
const InputSubject =styled.input`
 height: 100%;
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 6px;
    outline: none;
    padding: 0 15px;
    font-size: 17px;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
   
    &:focus{
        border-color: green;}
`;
const FieldEmail =styled.div`
 margin-left: 10px;
height: 45px;
    width: 100%;
    margin-bottom: 15px;


`;
const FieldName =styled.div`
margin-right: 10px;
height: 45px;
    width: 100%;
    margin-bottom: 15px;

`;
const Fields =styled.div`
display: flex;

    @media(max-width:500px){
       flex-direction:column;
      
    }
`;
const Row =styled.div`
 display: flex;
    height: 65px;
    align-items: center;
`;
const ColumnRight =styled.div`
width: calc(50% - 30px);
@media (max-width:947px){
    width: 100%;
        margin-bottom: 35px;
 }
`;
const ColumnLeft =styled.div`
width: calc(50% - 30px);
@media (max-width:947px){
    width: 100%;
        margin-bottom: 35px;
 }
`;
const Info =styled.div`
 margin-left: 30px;
`;
const Head =styled.div`
   font-weight: 500;
`;
const Subtitle =styled.div`
 color: #333;
`;
const Text =styled.div`
 font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
`;
const Icons =styled.div`
margin: 10px 0;
`;
const Paragraph =styled.p`
text-align: justify;
`;