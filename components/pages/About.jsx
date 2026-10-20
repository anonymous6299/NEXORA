import DATA from "../../data"


// mid section 
const AboutSection = () => {
  return <div className="flex items-start justify-start">

    {/* about the project */}
    <div>
      {/* small desc */}
      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">About the project</p>
      {/* main text */}
      <p className="font-display text-3xl font-semibold leading-tight mb-6">Built as a university minor project</p>


      <div className="space-y-5 text-base text-gray-600 leading-8 text-justify">
        {/* para 1 */}
        <p>{DATA.aboutContent[0]}</p>
        {/* para 2 */}
        <p>{DATA.aboutContent[1]}</p>
      </div>
    </div>


    {/* separator */}
    <div className="h-96 border-l border-gray-200 ml-20 mr-10"></div>

    {/* project focus */}
    <div className="w-full">
      {/* small desc */}
      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">project focus</p>

      {/* points */}
      <div>
        {
          DATA.projectFocus.map((ele, pos) => {

            return <div className="flex justify-start items-center w-full space-x-5 border-b border-gray-100 py-5"><p className="text-xs text-gray-300">0{pos + 1}</p> <p key={pos} className="text-sm font-medium text-gray-800">{ele}</p></div>
          })
        }
      </div>
    </div>
  </div>
}


// academic profile
const AcadProfile = () => {
  return (
    <div className="my-16">
      {/* small desc */}
      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">academic profile</p>
      {/* main text */}
      <p className="font-display text-3xl font-semibold leading-tight mb-10 border-b pb-5">Student details</p>

      {/* details grid */}
      <div className="grid grid-cols-3 grid-rows-3 border-t border-l border-gray-200">
        {
          DATA.data.map((ele, pos) => {
            return <div className="border-r border-b border-gray-200 p-5" key={pos}>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">{Object.keys(ele)}</p>
              <p className="text-base font-medium text-gray-900">{ele[Object.keys(ele)]}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

// component
const About = () => {

  return (

    // parent
    <div className="px-40">

      {/* initial text */}
      <div className="mt-16">
        {/* small desc */}
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">seventh semester minor project</p>
        {/* main text */}
        <p className="font-display text-6xl font-semibold leading-tight mb-6 w-180">Information should feel considered, not overwhelming.</p>
        {/* sub text */}
        <p className="text-xl w-200 text-gray-500 font-light">NEXORA is an academic exploration of personalized news discovery, focused reading, and thoughtful knowledge retention in one minimal interface.</p>
      </div>



      {/* horizontal separation */}
      <hr className="my-16" />



      {/* about section */}
      <AboutSection />


      {/* acad. profile */}
      <AcadProfile />


    </div>
  )
}

export default About