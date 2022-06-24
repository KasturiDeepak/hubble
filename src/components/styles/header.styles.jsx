import styled from "styled-components";

export const StyledHeader = styled.header`
background-color:${({theme})=> theme.colors.header};
padding:3em 1em;
`

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;

@media(max-width:${({theme}) => theme.responsive.mobile}){
    flex-direction:column;
}

`

export const Logo = styled.img`

@media(max-width:${({theme}) => theme.responsive.mobile}){
    margin-bottom:30px
}
`

export const Img  =styled.img`
width: 375px;
margin-left: 40px;

@media(max-width:${({theme}) => theme.responsive.mobile}){
    margin-top:30px;
    margin-left:0;
    text-align:center;
}
`