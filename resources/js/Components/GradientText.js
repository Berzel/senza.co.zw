export default function GradientText (props) {
    const colorStops = {
        primary: 'from-sky-600 via-sky-700 to-sky-600',
        secondary: 'from-pink-600 via-pink-700 to-pink-600'
    }

    return (
        <span className={`bg-gradient-to-r  bg-clip-text ${colorStops[props.color]} ${props.className}`} style={{WebkitTextFillColor : "transparent"}}>{props.text ?? props.children}</span>
    )
}
