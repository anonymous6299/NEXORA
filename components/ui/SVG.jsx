// modular svg component

const SVG = ({ className, d, SVGOthers, PathOthers }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={className}
            {...SVGOthers}
        >
            <path d={d}  {...PathOthers}/>
        </svg>
    )
}

export default SVG