import React, { useState } from 'react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <>Dark &#x1F315;</> : <> Light &#x2600;</>}
        <style jsx>
          {`
            button {
              border-radius: 8px;
              width: 120px;
              height: 36px;
              margin: 2.5em;
            }

            button:hover {
              cursor: pointer;
            }
          `}
        </style>
      </button>
      {darkMode && (
        <style jsx global>{`
          html * {
            background-color: rgb(41, 41, 41, 0.9) !important;
            color: #dcdcdc !important;
          }

          a {
            color: rgb(211, 138, 138) !important;
          }

          a:visited {
            color: #8db2e5 !important;
          }
        `}</style>
      )}
    </>
  )
}

export default DarkModeToggle
