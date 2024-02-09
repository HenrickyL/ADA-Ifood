import styled from "styled-components";
import { Colors } from "../../_middlewares/Colors";

type ContainerProp = {
    isRow?: boolean,
    color?: string
}

export const Container = styled.div<ContainerProp>`
    display: flex;
    flex-direction: ${prop=> prop.isRow ? 'row' : 'column'};
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background-color: ${prop => prop.color || Colors.background};
    border-radius: 8px;
`