// common header for headings

const CommonHeader = ({ title, hr = true, articles = true, length }) => {
  return (
    <>
      {/* top heading and articles */}
      <div className="flex items-center justify-between">
        <p className="capitalize font-semibold text-2xl font-display">{title}</p>
        <p className={`text-gray-400 text-sm ${!articles ? "hidden" : ""}`}>
          {length > 0 ? length > 1 ? `${length} articles` : "1 article" : ""}
        </p>
      </div>

      {/* horizontal sep */}
      <hr className={`border-b border-gray-200/70 mt-3 mb-8 ${!hr ? "hidden" : ""}`} />
    </>
  )
}

export default CommonHeader