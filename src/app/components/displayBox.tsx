import React from 'react'

function DisplayBox({ title, value, pause }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 text-lg font-semibold mb-2">
        {title}
      </label>
      {pause ? (
        <input
          type="text"
          className="text-right w-20 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={value}
        />
      ) : (
        <div className="w-20 px-3 py-2">{value}</div>
      )}
    </div>
  )
}

export default DisplayBox
