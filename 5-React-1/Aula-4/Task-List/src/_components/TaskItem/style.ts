import styled from "styled-components";
import { Colors } from "../../_middlewares/Colors";
import { FaTrash } from 'react-icons/fa';
import { FaRegCheckCircle } from "react-icons/fa";

export interface ITaskItemStyProp{
    completed: boolean
}
export const TableRow = styled.tr<ITaskItemStyProp>`
  transition: 400ms;

  &:hover{
    background-color: ${Colors.white1};
    td:first-child{
      border-radius: 12px 0 0 12px;
    }
    td:last-child{
      border-radius: 0 12px 12px 0;
    }
  }
`

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid ${Colors.gray};
  text-align: center;
  transition: 200ms;
`;


export const TableHead = styled.th`
  ${TableCell}
  font-weight: bold;
`;



export const RemoveIcon = styled(FaTrash)`
  transition: 200ms;
  &:hover{ 
    color: red;
  }
`
FaRegCheckCircle

export const CheckIcon = styled(FaRegCheckCircle)`
  transition: 200ms;
  &:hover{ 
    color: green;
  }
`