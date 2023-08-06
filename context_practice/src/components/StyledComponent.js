import react from 'react'
import styles from 'styled-components'

export const Div = styles.div`
    height: 100vh;
    width:100%;
    background-color:#002333;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Card = styles.div`
    width:50%;
    height:50%;
    background-color:#FFFFFF;
    box-shadow:0px 0px 25px 4px #DEEFE7;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:10%;
    @media (max-width: 768px) {
        width:80%;
        height:65%
    };
    @media (max-width:425px){
        width:80%;
        height:65%;
    }
`;

export const Input = styles.input`
    padding:5px;
    border-radius:5px;
    border: 2px solid #0f804b;
    width:70%;
    height:10%;
    margin-top:15px;
    font-size:15px;
    &:focus{
        outline:none;
        box-shadow:0px 0px 10px 4px #86d1ae;
    }
`;

export const Button = styles.button`
    border:3px solid #0f804b;
    background-color:#FFFFFF;
    padding:15px 30px 15px 30px;
    font-size:15px;
    transition:all 0.5s;
    border-radius:5px;
    margin-bottom:10px;
    &:hover{
        border:3px solid #0f804b;
        background-color:#0f804b;
        color:white;
    }
    @media(max-width:786px){
        width:70%;
        border:3px solid #0f804b;
        background-color:#0f804b;
        color:white;
    }
`;

export const Typography = styles.text`
    color:red;
    font-weight:bold;
`