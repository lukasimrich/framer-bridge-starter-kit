import * as React from "react"
import * as System from "../../design-system"
import { Frame, addPropertyControls, ControlType } from "framer"

// Learn more: https://framer.com/api

export function Button(props) {
    const { paddingPerSide, pt, pr, pb, pl, padding, bg, color, ...rest } = props

    const paddingProps = paddingPerSide
        ? {
              pt,
              pr,
              pb,
              pl,
          }
        : { p: padding }

    return <System.Button {...(props.variant !== "+" ? { ...rest } : { color, bg, ...paddingProps, ...rest })} />
}

Button.defaultProps = {
    width: 86,
    height: 40,
    disabled: false,
    fluid: false,
    text: "Button",
    // padding: 1,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Button, {
    text: { type: ControlType.String, title: "Text" },
    config: {
        type: ControlType.Boolean,
        title: "Config",
        defaultValue: false,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    disabled: {
        type: ControlType.Boolean,
        title: "⤷ Disabled",
        hidden(props) {
            return !props.config
        },
    },
    fluid: {
        type: ControlType.Boolean,
        title: "⤷ Fluid",
        hidden(props) {
            return !props.config
        },
    },

    variant: {
        type: ControlType.Enum,
        displaySegmentedControl: true,
        options: Object.keys(System.ButtonVariants),
    },

    bg: {
        title: "⤷ Background",
        defaultValue: "#fff",
        type: ControlType.Color,
        hidden(props) {
            return props.variant !== "+"
        },
    },
    color: {
        title: "⤷ Text Color",
        defaultValue: "#000",
        type: ControlType.Color,
        hidden(props) {
            return props.variant !== "+"
        },
    },
    padding: {
        type: ControlType.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per Side"],
        valueKeys: ["pt", "pb", "pl", "pr"],
        valueLabels: ["X(T)", "X(B)", "Y(L)", "Y(R)"],
        min: 0,
        title: "⤷ Padding",
        hidden(props) {
            return props.variant !== "+"
        },
    },
})
