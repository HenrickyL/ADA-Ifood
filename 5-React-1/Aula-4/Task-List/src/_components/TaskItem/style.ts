import styled from "styled-components";
import { Colors } from "../../_middlewares/Colors";

export interface ITaskItemStyProp{
    completed: boolean
}
export const TableRow = styled.tr<ITaskItemStyProp>`
`

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid ${Colors.gray};
`;