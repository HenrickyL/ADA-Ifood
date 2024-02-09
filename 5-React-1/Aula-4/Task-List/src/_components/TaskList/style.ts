import styled from "styled-components";
import { Colors } from "../../_middlewares/Colors";



export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    

    &,  td{
        padding: 1rem 8px;
        border: none;
        border-bottom: 1px dotted ${Colors.gray};
    }

    th{
        min-width: 6rem;
    }
`