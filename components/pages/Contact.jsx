


// component
const Contact = () => {

  // table data
  const T_Data = [
    { "department": "Computer Science & Technology" },
    { "academic level": "B.Tech · VII Semester" },
    { "project category": "University Minor Project" },
    { "response": "Academic enquiries are reviewed by the student project team" }
  ];


  // contact data
  const C_Data = [
    {
      "gmail": "gauravjoshi1456@gmail.com",
      "description": "Academic and project enquiries"
    },
    {
      "github profile": "github.com/anonymous6299",
      "description": "Development work and technical profile"
    },
    {
      "source repository": "github.com/anonymous6299/NEXORA",
      "description": "Project source code and documentation"
    }
  ];
  return (
    <div className="my-16 flex justify-between items-start px-40">

      {/* left section  */}
      <div className="w-140">
        {/* text */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">contact the project team</p>
          <p className="font-display text-6xl font-semibold leading-tight mb-6">Questions, feedback, or academic review.</p>
          <p className="text-lg w-120 text-gray-500 font-light text-justify">This page supports communication related to NEXORA's seventh-semester minor project, including faculty review, usability feedback, technical discussion, and future development suggestions.</p>
        </div>

        {/* separator */}
        <hr className="mt-14" />

        {/* table */}
        <table className="w-full">
          <tbody>
            {
              T_Data.map((ele, pos) => {
                return <tr key={pos} className="border-b border-gray-200">
                  <td className="text-xs text-gray-400 uppercase tracking-wider w-40 py-4 align-middle">{Object.keys(ele)}</td>
                  <td className="py-4 text-sm to-gray-800">{ele[Object.keys(ele)]}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>

      {/* middle sep */}
      <div className="h-170 border-l border-gray-200 ml-20 mr-10"></div>

      {/* right section */}
      <div>
        {/* text */}
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">direct contact</p>
        <p className="font-display text-3xl font-semibold leading-tight mb-6">Connect with the project.</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-8 w-116">For project discussions, source-code review, or academic feedback, use the direct channels below.</p>

        <hr />

        {/* data */}
        {
          C_Data.map((ele,pos)=>{
            return <div className="border-b border-gray-200 py-6" key={pos}>
              {console.log(Object.keys(ele))}
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">{Object.keys(ele)[0]}</p>
          <p className="text-base font-medium text-gray-900">{ele[Object.keys(ele)[0]]}</p>
          <p className="text-xs text-gray-400 mt-2">{ele.description}</p>
        </div>
          })
        }
      </div>
    </div>
  )
}

export default Contact