import * as React from "react"
import { theme } from "../theme"
import styled from "styled-components"
import { space, variant, color } from "styled-system"

// Component
export const Button = ({ text, fluid, disabled, variant, children, ...rest }) => {
    return (
        <StyledButton
            theme={theme}
            disabled={disabled}
            className={`${fluid ? "fluid" : ""}`}
            variant={variant}
            {...rest}
        >
            {text || children}
        </StyledButton>
    )
}

const defaultButtonStyles = {
    px: 3,
    py: 2,
    margin: 0,
    fontSize: 1,
    borderRadius: 2,
    cursor: "pointer",
    borderColor: "transparent",
}

export const variants = {
    1: {
        ...defaultButtonStyles,

        bg: "primary",
        color: "white",
        // States
        "&:hover": {
            backgroundColor: "primaryDark",
        },
        "&:active, &:focus": {
            backgroundColor: "primaryDark",
        },
        "&:disabled": {
            color: "bodyLightest",
            backgroundColor: "background",
        },
        // Extra Styles
        "&.fluid": {
            width: "100%",
        },
    },

    2: {
        ...defaultButtonStyles,

        bg: "background",
        color: "body",
        // States
        "&:hover": {
            backgroundColor: "bodyLightest",
        },
        "&:active, &:focus": {
            backgroundColor: "bodyLightest",
        },
        "&:disabled": {
            color: "bodyLightest",
            backgroundColor: "background",
        },
        // Extra Styles
        "&.fluid": {
            width: "100%",
        },
    },

    3: {
        ...defaultButtonStyles,
    },

    "+": {
        ...defaultButtonStyles,
        bg: "background",
        color: "body",
    },
}

const buttonVariants = variant({
    variants: {
        ...variants,
    },
})

export const buttonVariantsFunc = buttonVariants

// Styles
const StyledButton = styled.button`
    ${buttonVariants}
    ${space}
    ${color}
`
