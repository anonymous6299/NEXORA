// common header for home and saved

const CommonHeader = ({title,hr=true,articles=true}) => {
  return (
    <>
      {/* top heading and articles */}
      <div className="flex items-center justify-between">
        <p className="capitalize font-semibold text-2xl font-display">{title}</p>
        <p className={`text-gray-400 text-sm ${!articles?"hidden":""}`}>2 article(s)</p>
      </div>

      {/* horizontal sep */}
      <hr className={`border-b border-gray-200/70 mt-3 mb-8 ${!hr?"hidden":""}`} />
    </>
  )
}

export default CommonHeader