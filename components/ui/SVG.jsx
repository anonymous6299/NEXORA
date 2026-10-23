// modular svg component

const SVG = ({ className, d, SVGOthers, PathOthers,strokeWidth=1.5,fill=null }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={className}
            strokeWidth={strokeWidth}
            {...SVGOthers}
            {...(fill !== null && { fill })}
        >
            <path d={d}  {...PathOthers}/>
        </svg>
    )
}

export default SVG