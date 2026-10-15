

// mid section 
const AboutSection = () => {
  // static text
  const aboutContent = ["Developed during the seventh semester, NEXORA studies how a digital news platform can reduce information fatigue without taking control away from the reader. The project combines topic, date, language, and country preferences with an editorial reading experience designed around clarity and focus.", " The prototype demonstrates the complete front-end journey: discovering stories, reading an individual article, saving content for later or offline access, and recording concise side notes. It also considers practical interface states such as pagination, loading feedback, empty results, and recoverable errors."]
  const projectFocus = ["Personalized discovery", "Distraction-free reading", "Offline accessibility", "Personal knowledge capture"]



  return <div className="flex items-start justify-start">

    {/* about the project */}
    <div>
      {/* small desc */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">About the project</p>
      {/* main text */}
      <p className="font-display text-3xl font-semibold leading-tight mb-6">Built as a university minor project</p>


      <div className="space-y-5 text-base text-gray-600 leading-8 text-justify">
        {/* para 1 */}
        <p>{aboutContent[0]}</p>
        {/* para 2 */}
        <p>{aboutContent[1]}</p>
      </div>
    </div>


    {/* separator */}
    <div className="h-96 border-l border-gray-200 ml-20 mr-10"></div>

    {/* project focus */}
    <div className="w-full">
      {/* small desc */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">project focus</p>

      {/* points */}
      <div>
        {
          projectFocus.map((ele, pos) => {

            return <div className="flex justify-start items-center w-full space-x-5 border-b border-gray-100 py-5"><p className="text-xs text-gray-300">0{pos + 1}</p> <p key={pos} className="text-sm font-medium text-gray-800">{ele}</p></div>
          })
        }
      </div>
    </div>
  </div>
}


// academic profile
const AcadProfile = () => {
  const data = [
    { "student name": "Gaurav Joshi" },
    { "enrollment number": "02615612723" },
    { "section": "F - 15" },
    { "programme": "Bachelor of Technology" },
    { "branch": "Computer Science & Technology" },
    { "semester": "VII Semester" },
    { "academic session": "2026 — 2027" },
    { "institution": "ADGIPS / GGSIPU" },
    { "project title": "NEXORA — Personalized Information Discovery & Reading Platform" },
  ]
  return (
    <div className="my-16">
      {/* small desc */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">academic profile</p>
      {/* main text */}
      <p className="font-display text-3xl font-semibold leading-tight mb-10 border-b pb-5">Student details</p>

      {/* details grid */}
      <div className="grid grid-cols-3 grid-rows-3 border-t border-l border-gray-200">
        {
          data.map((ele, pos) => {
            return <div className="border-r border-b border-gray-200 p-5">
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
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">seventh semester minor project</p>
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