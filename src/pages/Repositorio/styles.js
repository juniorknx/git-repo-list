import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    max-width:700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0, 0.2);
    padding: 30px 30px;
    margin:80px auto;
`;

export const Owner = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    img {
        width:150px;
        border-radius: 20%;
        margin: 20px 0;
    }

    h1 {
        font-size:30px;
        color:#0D2636;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        text-align:center;
        line-height: 1.4;
        max-width:400px;
    }
`;

export const BackButton = styled(Link)`
    border:0;
    outline:0;
    background: transparent;
`;

export const IssuesList = styled.ul`
    margin-top:30px;
    padding-top:30px;
    border-top: 1px solid #eee;
    list-style:none;

    li {
        display: flex;
        padding:15px 10px;
        align-items:center;
    }

    & + li {
        margin-top:12px;
    }

    img {
        max-width:15%;
        border-radius:50%
    }

    div {
        flex:1;
        margin-left:12px;

        strong {
            font-size:15px;

            a {
                text-decoration:none;
                color: #222;
                transition: 0.5s;

                &:hover {
                    color:#0071db;
                }
            }

            span {
                background: #3f51b5;
                color:#FFF;
                border-radius:12px;
                font-size:12px;
                font-weight:600;
                padding: 4px 7px;
                margin-left:10px;
                display:flex;
                flex-basis:auto;
                width:16.9em;
                justify-content:space-around;
                margin:0.8em;
                flex-direction:column;
            }
        }

        p {
            margin-top:10px;
            font-size:12px;
            color:#000;
            font-weight:500;
        }
    }
`;

export const PageActions = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;

    button {
        outline:0 ;
        border:0;
        background:#18a118;
        border-radius:4px;
        color:#fff;
        padding:0.5em;
        transition: 0.5s;

            &:hover {
                background-color:#197019;
            }

            &:disabled{
                cursor:not-allowed;
                opacity:0.5;
            }
        }
`;