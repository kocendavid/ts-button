
const colors = {
    primary: "#5516C7",
    bright: "#fff",
    transparent: 'rgba(0 0 0 0)'
}
const radius = {
    full: '50%'
}
const shadows = {

}

export const styleGlobals = {
    colors: colors,
    radius: radius,
    button: {
        primary: {
            color: colors.bright,
            background: colors.primary,
            'border-color': colors.transparent
        },
        secondary: {
            color: colors.primary,
            background: colors.transparent,
            'border-color': colors.primary,
        }
    }
}
