"use client"

import Image from 'next/image'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"
import {useState, useRef} from 'react'

interface CarrosselProps {
  srcImages: string[];
  width?: string
}


export function Carrossel({srcImages, width}: CarrosselProps){
  
  const carrossel = useRef(null)
  const image = useRef(null)
  
  const [currentImage, setCurrentImage] = useState(0)
  
  function previousImage(){
    if (currentImage === 0) return
    else setCurrentImage(currentImage - 1)
  }
  
  function nextImage(){
    if ((currentImage === srcImages.length - 1) || (srcImages.length * (image.current as any).clientWidth / (carrossel.current as any).clientWidth <= 1)) return 
    else setCurrentImage(currentImage + 1)
  }
  
  return(
    <div className='flex items-center'>
      <div className='flex  justify-between items-center text-5xl text-primary'>
          <button onClick={previousImage}>
            <MdKeyboardArrowLeft/>
          </button>
      </div>

      <div ref={carrossel} className={`${width} h-full flex transition overflow-x-auto ease-out duration-500 md:w-[400px] lg:w-full`}>
        <div className="flex gap-1 [&::-webkit-scrollbar]:hidden" >

        {srcImages.map((src) => (
          <Image ref={image} src={src} alt="Print de conversa de WhatsApp" width={200} height={200} style={{transform: `translateX(-${currentImage * 102}%)`, }}/>
        ))}
      
        </div>
      </div>

      <div className='flex  justify-between items-center text-5xl text-primary'>
          <button onClick={nextImage}>
            <MdKeyboardArrowRight/>
          </button>
      </div>
      
    </div>
  )
}