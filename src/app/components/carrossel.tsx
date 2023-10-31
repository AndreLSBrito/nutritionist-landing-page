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
    <div>
      <div className='flex items-center'>
        <div className='flex  justify-between items-center text-5xl text-primary'>
          <button onClick={previousImage}>
            <MdKeyboardArrowLeft size={24}/>
          </button>
        </div>

        <div ref={carrossel} className={`${width} flex transition overflow-x-auto ease-out duration-500 [&::-webkit-scrollbar]:hidden md:w-[550px] lg:w-full lg:h-[320px]`}>
          <div className="flex h-full gap-1 [&::-webkit-scrollbar]:hidden" >

          {srcImages.map((src, index) => (
            <Image 
              key={index} 
              ref={image} 
              src={src} 
              alt="imagem em carrossel" 
              width={300} 
              height={500} 
              style={{transform: `translateX(-${currentImage * 102}%)`, }}/>
          ))}
        
          </div>
        </div>

        <div className='flex  justify-between items-center text-5xl text-primary'>
            <button onClick={nextImage}>
              <MdKeyboardArrowRight size={24}/>
            </button>
        </div>  
      </div>
      
      <div 
        
        className='py-4 flex justify-center gap-3 w-full'
      >
        {srcImages.map((src, index) => (
          <div 
            key={"circle" + index}
            onClick={() => {
              setCurrentImage(index)
            }}
            className={`rounded-full w-3 h-3 cursor-pointer ${index == currentImage ? "bg-primary border border-white" : "bg-primary opacity-40 "}`}
          ></div>
        ))}
      </div>

    </div>
  )
}