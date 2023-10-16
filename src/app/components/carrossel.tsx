import Image from 'next/image'
import olderMan from '../../../public/older-man.svg'
import womans from '../../../public/womans.svg'
import man from '../../../public/man.svg'

export function Carrossel(){
  return(
    <div className="relative w-full min-h-[100vh] flex justify-center items-center overflow-hidden">
      <div className="w-full pt-10 pb-10">
        <div className="w-32 h-100 shadow-2xl rounded-xl flex flex-col justify-end self-start">
          <Image
            className='w-30' 
            src={olderMan} 
            alt='Homem mais velho exercitando'
          />

          <Image 
            src={womans}
            alt='Mulheres exercitando'
          />

          <Image 
            src={man} 
            alt='Personal trainer'
          />
        </div>
      </div>
    </div>
  )
}