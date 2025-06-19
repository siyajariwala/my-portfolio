import { useState } from 'react';

export default function Involvements() {
  const clubPhotos = [
    '/images/image_1.jpg',
    '/images/image_2.jpg',
    '/images/image_3.jpg',
    '/images/image_4.jpg',
    '/images/image_5.jpg',
    '/images/image_6.jpeg',
    '/images/image_7.jpeg',
    '/images/image_8.jpeg',
    '/images/image_9.jpeg',
    '/images/image_10.jpeg',
    '/images/image_11.jpeg',
    '/images/image_12.jpeg',
    '/images/image_13.jpeg',
    '/images/image_14.jpeg',
    '/images/image_15.jpeg',
    '/images/image_16.jpeg',
    '/images/image_17.JPG',
    '/images/image_18.jpg',
    '/images/image_19.jpg',

  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (

    <div 
    id="involvements"
    className="ml-[20%] w-[80%] min-h-screen bg-gradient-to-br bg-slate-950 py-16 px-4 text-white relative">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-2 tracking-wider mt-12">BUILDING WISE + MY STEM JOURNEY</h1>
        <p className="text-purple-200 text-lg">President – Women in Science and Engineering Club</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2"></div>
      </div>

      {/* Masonry Grid */}
      <div className="w-full px-4 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
        {clubPhotos.map((photo, idx) => (
          <div
            key={idx}
            className="w-full break-inside-avoid cursor-pointer"
            onClick={() => setSelectedImage(photo)}
          >
            <img
              src={photo}
              alt="WISE Club"
              className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>
        ))}

        {/* Spacer to fill uneven column bottom */}
        <div className="w-full h-32 bg-transparent" />
      </div>

      {/* Optional gradient fade to bottom */}
      <div className="w-full h-24 bg-gradient-to-t from-indigo-900 to-transparent mt-12 mb-3" />

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="WISE Club"
              className="w-full rounded-lg transition-transform duration-300 hover:scale-105 break-inside-avoid z-0"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
