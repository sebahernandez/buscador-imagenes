import React, {useState} from 'react'

const Gallery = ({photos}) => {

    const open = (url) => window.open(url)
    console.log(photos)

  return (
    <div className="container mx-auto">
    <article className="pt-10 masonry sm:masonry-sm md:masonry-md">
     {photos.map(photo => 
         <div className="max-w overflow-hidden"  key={photo.id} onClick={() => open(photo.links.html)}>
           <img src={photo.urls.regular} alt="{photo.alt_description}"/>
               <div className="px-6 py-4">
                 <div className="font-bold text-md mb-2">{photo.user.name}</div>
               {/*   <p className="text-gray-700 text-base">{[photo.description, photo.alt_description].join(' - ')}</p> */}
               </div>
         </div>
       )}
    </article>
   </div>
  )
}

export default Gallery;