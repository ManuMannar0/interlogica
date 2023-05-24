import React from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { SET_INGREDIENTS, SET_INGREDIENTS_BOX_VISIBLE, SET_TITLE } from '../../store/ingredientsDetails/actions';
import useWindowSize from "react-hook-usewindowsize";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.isdesktop ? 'row' : 'column'};
    padding-bottom: 1rem;
`
export const StyledImg = styled.img`
`
export const StyledImgContainer = styled.div`
`
export const StyledTitle = styled.h3`
    padding: 0;
    margin: 0;
`
export const StyledCopyContainer = styled.div`
    padding-left: ${props => props.isdesktop && '1rem'};
`
export const StyledMoreInfoButton = styled.p`
    text-align: end;
    font-weight: bold;
    cursor: pointer;
`

const SweetComp = (props) => {
    const dispatch = useDispatch()
    const mediaQ = 844
    const useWidthWindowSize = () => useWindowSize().width
    const widthWindowSize = useWidthWindowSize()
    return(
        <StyledContainer key={props.i} isdesktop={widthWindowSize >= mediaQ}>
            <StyledImgContainer>
                <StyledImg src={props.img} alt={props.name} title={props.name} />
            </StyledImgContainer>
            <StyledCopyContainer isdesktop={widthWindowSize >= mediaQ}>
                <StyledTitle>{props.name} - ({props.currency}{props.price})</StyledTitle>
                <div className="expandable-area-text">{props.description}</div>
                <StyledMoreInfoButton onClick={() => {
                    dispatch(SET_INGREDIENTS_BOX_VISIBLE(true));
                    dispatch(SET_INGREDIENTS(props.ingredients))
                    dispatch(SET_TITLE(props.name))
                }}>{props.buttonCopy}</StyledMoreInfoButton>
            </StyledCopyContainer>
        </StyledContainer>
    )
}

export default SweetComp;