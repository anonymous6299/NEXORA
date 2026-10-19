import { useState } from "react";
import SVG from "./SVG";


const HomeHeader = () => {
    // dropdown display
    const [DropdownDisplay, setDropdownDisplay] = useState(false);


    // common svg props
    const props = {
        SVGOthers: { fill: "none", strokeWidth: 1.5, stroke: "currentColor" },
        PathOthers: { strokeLinecap: "round", strokeLinejoin: "round" }
    }

    // filter country and language
    const countries = ["India", "France", "Japan", "Brazil", "Germany"];
    const languages = ["Hindi", "French", "Japanese", "Portuguese", "German"];

    return (
        <div className=" border-b border-gray-100 py-5 mb-5 flex justify-between items-start">
            {/* filters */}
            <div>
                <button className="flex items-center justify-between border border-gray-200 hover:border-gray-400 px-3 py-1.5 space-x-2 cursor-pointer transition-colors" onClick={()=>{setDropdownDisplay(pv=>!pv)}}>
                    <SVG
                        className={"size-5"}
                        d={"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"}
                        {...props}
                    />
                    <p className="text-sm">Filter</p>
                </button>



                {/* dropdown of filters button*/}
                <div className={`border border-gray-200 shadow-lg mt-3 p-4 space-y-3 ${!DropdownDisplay?"hidden":"absolute bg-white"}`}>
                    {/* topic */}
                    <div className="space-y-1">
                        <p className="text-xs font-medium uppercase text-gray-500">topic</p>
                        <select name="topic" id="topic" className=" border border-gray-200 focus:border-gray-400 w-full px-2.5 py-1.5 text-sm">
                            {
                                languages.map((ele, pos) => {
                                    return <option value={pos} key={pos}>{ele}</option>
                                })
                            }
                        </select>
                    </div>

                    {/* date */}
                    <div className="space-y-1">
                        <p className="text-xs font-medium uppercase text-gray-500">date</p>
                        {/* before/after */}
                        <select name="date" id="date" className=" border border-gray-200 focus:border-gray-400 px-2.5 w-24 mr-3 py-1.5 text-sm">
                            {
                                ["Before","After"].map((ele, pos) => {
                                    return <option value={pos} key={pos}>{ele}</option>
                                })
                            }
                        </select>
                        {/* date input */}
                        <input type="date" name="date" id="date " className="border border-gray-200 focus:border-gray-400 px-2.5 py-1.5 text-sm" />
                    </div>

                    {/* clear/apply cta */}
                    <div className="flex items-center justify-between">
                        <p className="text-gray-400 hover:text-gray-700 cursor-pointer text-xs transition-colors">Clear filters</p>
                        <button className="bg-gray-800 hover:bg-black text-white p-2 text-sm cursor-pointer px-3 py-1.5">Apply</button>
                    </div>
                </div>
            </div>


            {/* language and country on right side*/}
            <div className="flex justify-between items-start space-x-5">
                <select name="language" id="language" autoComplete="off" className=" border border-gray-200 focus:border-gray-400 px-2.5 py-1.5 text-sm cursor-pointer">
                    {
                        languages.map((ele, pos) => {
                            return <option value={pos} key={pos}>{ele}</option>
                        })
                    }
                </select>
                <select name="country" id="country" autoComplete="off" className=" border border-gray-200 focus:border-gray-400 px-2.5 py-1.5 text-sm cursor-pointer">
                    {
                        countries.map((ele, pos) => {
                            return <option value={pos} key={pos}>{ele}</option>
                        })
                    }
                </select>

            </div>
        </div>
    )
}

export default HomeHeader
