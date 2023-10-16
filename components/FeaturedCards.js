import Image from 'next/image'
import React from 'react'

const FeaturedCards = ({FeaturedGridImages}) => {

  return (
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Cards */}
    {FeaturedGridImages?.map((items) => (
      <div
        key={items.sys.id}
        className="bg-white rounded-lg shadow-md p-4 bg-gradient-to-r from-red-200 to-gray-300"
      >
        <Image
          width={items.fields.cardImage.fields?.file?.details?.image?.width}
          height={items.fields.cardImage.fields?.file?.details?.image?.height}
          src={`https:${items.fields.cardImage.fields.file.url}`}
          alt={items.fields.title}
          className="object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2">{items.fields.title}</h2>
        <p className="text-gray-600">{items.fields.description}</p>
      </div>
    ))}
  </div>
  )
}

export default FeaturedCards