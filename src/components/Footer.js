import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
    
    <PageFooter>
    <Span>Created By <Link href="#">Simon Baloi</Link> | <span class="far fa-copyright"></span> 2021 All rights reserved.</Span>
</PageFooter>
    )
}

export default Footer

const PageFooter =styled.footer`
 background: #111;
    padding: 15px 23px;
    color: #fff;
    text-align: center;
`;
const Span =styled.span`
 color: green;
    text-decoration: none;
`;
const Link =styled.a`
color:white;
&:hover{
    text-decoration: underline;
}
`;