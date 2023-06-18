import React from 'react'

function DisplayBox({ title, value, pause, changeTime }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name === 'MM' ? 'm' : 's'
    const value = e.target.value
    changeTime(field, value)
  }

  return (
    <div className="flex flex-col">
      <label className="text-gray-700 text-lg font-semibold mb-2">
        {title}
      </label>
      {pause ? (
        <input
          name={title}
          type="number"
          className="text-right w-20 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={value}
          onChange={handleChange}
        />
      ) : (
        <div className="w-20 px-3 py-2">{value}</div>
      )}
    </div>
  )
}

export default DisplayBox
