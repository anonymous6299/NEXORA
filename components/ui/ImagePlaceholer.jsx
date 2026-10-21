import DATA from "../../data"
import SVG from "./SVG"

// displayed if image not available
const ImagePlaceholer = () => {
    return (
        <div className='bg-gray-100 border border-gray-200 w-full h-100 flex flex-col items-center justify-center'>
            <SVG
            className={"size-32 mb-5 text-gray-400"}
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            strokeWidth={0.3}
            {...DATA.SVG_PROPS}
            />
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.3} stroke="currentColor" className=>
                <path strokeLinecap="round" strokeLinejoin="round"  />
            </svg> */}
            <p className='text-xl font-display font-semibold text-gray-700 mb-2'>Image Unavailable</p>

            <p className='text-sm text-gray-500'>This story is presented without a lead image.</p>

        </div>
    )
}

export default ImagePlaceholer