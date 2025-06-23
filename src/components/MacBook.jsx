import React, { useState } from 'react'
import { macbookModels } from '../data/index'

const MacBook = () => {
  const [selectedChip, setSelectedChip] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)

  const currentMb = macbookModels[selectedChip]
  const currentColor = currentMb.colors[selectedColor]

  const handleSelectedChip = (index) => {
    setSelectedChip(index)
    setSelectedColor(0)
  }

  return (
    <div className="flex flex-col items-center justify-start bg-white p-4 h-screen overflow-hidden text-sm xl:text-base 2xl:text-lg">
      <div className="w-full max-w-screen-lg">
        <h1 className="text-xl font-semibold text-gray-800 mb-4 text-center xl:text-2xl 2xl:text-3xl">
          Choose your new MacBook Air.
        </h1>

        {/* Chip selection buttons */}
        <div className="flex justify-center mb-4 ">
          {macbookModels.map((mb, index) => (
            <button
              key={index}
              className={`
                w-28 h-12 
                xl:w-32 xl:h-12 
                2xl:w-36 2xl:h-16 
                flex flex-col justify-evenly items-center border 
                ${index === 0 ? 'rounded-l-xl' : 'rounded-r-xl'} 
                ${index === selectedChip ? 'border-2 border-blue-400' : 'border-gray-800'}
              `}
              onClick={() => handleSelectedChip(index)}
            >
              <span className="text-xs xl:text-sm 2xl:text-base font-bold text-gray-800">
                With {mb.chip}
              </span>
              <span className="text-xs xl:text-sm 2xl:text-base text-gray-600">
                {mb.price}
              </span>
            </button>
          ))}
        </div>

        {/* Image + Info */}
        <div className="flex flex-col items-center">
          {/* Image */}
          <div className="w-48 h-32 xl:w-60 xl:h-32 2xl:w-72 2xl:h-48 mb-2">
            <img
              src={currentColor.img}
              alt={`MacBook Air with ${currentMb.chip}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Color label and selection */}
          <span className="text-sm xl:text-base 2xl:text-lg font-medium text-gray-800 mb-1">
            {currentColor.label}
          </span>
          <div className="flex space-x-2 mb-2">
            {currentMb.colors.map((col, index) => (
              <button
                key={index}
                style={{ backgroundColor: col.bg }}
                className={`w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 rounded-full border ${
                  selectedColor === index ? 'border-2 border-blue-400' : 'border-transparent'
                }`}
                onClick={() => setSelectedColor(index)}
              ></button>
            ))}
          </div>

          {/* Chip icon */}
          <img
            src={currentMb.icon}
            alt="Chip Icon"
            className="w-8 h-8 xl:w-10 xl:h-8 2xl:w-12 2xl:h-12 mb-2"
          />

          {/* Specs */}
          <div className="text-center mb-2 space-y-1">
            {currentMb.specs.map((spec, index) => (
              <p
                key={index}
                className="text-xs xl:text-sm 2xl:text-base font-semibold text-gray-800"
              >
                {spec}
              </p>
            ))}
          </div>

          {/* Buy button */}
          <button className="text-xs xl:text-sm 2xl:text-base py-1 px-4 bg-blue-400 rounded-full text-white">
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default MacBook
