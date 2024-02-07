import styled from "styled-components";


export const CommentSty = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #a1a1a1;
    border-radius: 8px;
    box-shadow: 2px 3px 5px black;
    gap: 8px;
    transition: 400ms;
    h3{
        padding: 4px 8px;
        width: 100%;
        border-bottom: 1px solid black;
    }

    p{
        padding: 2px 12px;
    }

    &:hover{
        background-color: #d1d1d1;
    }
`