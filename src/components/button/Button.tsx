import React, {FC} from "react";
import styled from 'styled-components';

interface ButtonFace {
    text?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: string
}

const TYPES = Object.freeze({PRIMARY: 'primary', SECONDARY: 'secondary',})

export const Button: FC<ButtonFace> = ({text, onClick, disabled, type}) => (
    <StyledButton
        onClick={onClick}
        disabled={disabled}
        buttonType={type}
    >
        {text}
    </StyledButton>
);

const StyledButton = styled.button<{buttonType: string}>(({theme}) => {
    console.log(theme)
    return ({
        height: '60px'
    });
})

Button.defaultProps = {
    text: '',
    onClick: undefined,
    disabled: false,
    type: TYPES.PRIMARY
}
Button.TYPES = TYPES;
