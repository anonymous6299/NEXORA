// imports
import { useState } from "react";
import SVG from "./SVG";
import DATA from "../../data";

// header for home page-shows filter options
const HomeHeader = () => {
    // dropdown display
    const [DropdownDisplay, setDropdownDisplay] = useState(false);

    return (
        <div className=" border-b border-gray-100 py-5 mb-5 flex justify-between items-start">
            {/* filters */}
            <div>
                <button className="flex items-center justify-between border border-gray-200 hover:border-gray-400 px-3 py-1.5 space-x-2 cursor-pointer transition-colors" onClick={() => { setDropdownDisplay(pv => !pv) }}>
                    <SVG
                        className={"size-5"}
                        d={"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"}
                        {...DATA.SVG_PROPS}
                    />
                    <p className="text-sm">Filter</p>
                </button>



                {/* dropdown of filters button*/}
                <div className={`border border-gray-200 shadow-lg mt-3 p-4 space-y-3 ${!DropdownDisplay ? "hidden" : "absolute bg-white"}`}>
                    {/* topic */}
                    <div className="space-y-1">
                        <p className="text-xs font-medium uppercase text-gray-500">topic</p>
                        <select name="topic" id="topic" className=" border border-gray-200 focus:border-gray-400 w-full px-2.5 py-1.5 text-sm">
                            {
                                DATA.languages.map((ele, pos) => {
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
                                ["Before", "After"].map((ele, pos) => {
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
                    <hr className="border-t border-gray-200"/>
                    <button className="transition-colors w-full px-3 py-2 flex justify-center items-center space-x-3 bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-600 hover:text-black" onClick={()=>{localStorage.setItem("recommendations_data",JSON.stringify([]))}}>
                        <SVG 
                        className={"size-4"}
                        d={"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"}
                        {...DATA.SVG_PROPS}
                        />
                        <p className="text-xs">Reset Recommendations</p>
                    </button>
                </div>
            </div>


            {/* language and country on right side*/}
            <div className="flex justify-between items-start space-x-5">
                <select name="language" id="language" autoComplete="off" className=" border border-gray-200 focus:border-gray-400 px-2.5 py-1.5 text-sm cursor-pointer">
                    {
                        DATA.languages.map((ele, pos) => {
                            return <option value={pos} key={pos}>{ele}</option>
                        })
                    }
                </select>
                <select name="country" id="country" autoComplete="off" className=" border border-gray-200 focus:border-gray-400 px-2.5 py-1.5 text-sm cursor-pointer">
                    {
                        DATA.countries.map((ele, pos) => {
                            return <option value={pos} key={pos}>{ele}</option>
                        })
                    }
                </select>

            </div>
        </div>
    )
}

export default HomeHeader
