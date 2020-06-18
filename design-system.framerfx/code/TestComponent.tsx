import * as React from "react"
import * as System from "../../design-system"
import { Frame, addPropertyControls, ControlType } from "framer"

// Learn more: https://framer.com/api

export function TestComponent(props) {
    const { paddingPerSide, pt, pr, pb, pl, padding, ...rest } = props

    const paddingProps = paddingPerSide
        ? {
              pt,
              pr,
              pb,
              pl,
          }
        : { p: padding }

    return <System.Button {...(props.variant !== "custom" ? { ...rest } : { ...paddingProps, ...rest })} />
}

TestComponent.defaultProps = {
    width: 150,
    height: 48,
    disabled: false,
    fluid: false,
    text: "Button",
    // padding: 1,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(TestComponent, {
    text: { type: ControlType.String, title: "Text" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    fluid: { type: ControlType.Boolean, title: "Fluid" },
    variant: {
        type: ControlType.Enum,
        options: Object.keys(System.ButtonVariants),
    },
    padding: {
        type: ControlType.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per Side"],
        valueKeys: ["pt", "pr", "pb", "pl"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        title: "Padding",
        hidden(props) {
            return props.variant !== "custom"
        },
    },
})
