import styled from 'styled-components'

export const Container = styled.div`
 width:90%;
 margin: 0 auto;
 display:grid;
 grid-template-columns: repeat(5,1fr);
 grid-gap: 5px;

`
export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Cards = styled.div`
    width:250px;
    height:350px auto;
    justify-self:center;
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    align-items:center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    h1 {
        font-weight:bold;
        font-size:18px;
    }
`;
export const CardContainer = styled.div`
    padding: 2px 16px;
    width:100%;
    height:100%;
    justify-self:flex-end;
    ul {
        width:100%;
        margin-top: 5px auto 5px auto;
        &li {
            b {
                font-weight:bold;
            }
        }
    }
`