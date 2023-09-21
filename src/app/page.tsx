import Image from 'next/image'
import { Logo } from './components/logo'
import { Button } from './components/button'
import { Separator } from './components/separator'
import { InfoCard } from './components/infoCard'

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col  bg-grayPrimary">
      <section className='bg-search-background bg-cover bg-center bg-no-repeat lg:bg-none'>
        <div className='flex flex-col gap-2 max-w-md px-10 py-12'>
          <Logo/>
          
          <article className='flex flex-col text-white gap-2'>
            <p className='font-bold'><span className='text-primary'>APRENDA</span> A COMER DE VERDADE E CONQUISTE A <span className='text-primary'>SAÚDE</span> E O <span className='text-primary'>FÍSICO</span> QUE SEMPRE <span className='text-primary'>DESEJOU</span>.</p>
  
            <Separator w='45%'/>

            <p className='text-sm'>Comendo até um docinho se quiser.</p> 
    
          </article>

          <Button/>

          <div className='flex flex-row flex-wrap max-w-lg gap-2'>
            <InfoCard number={800} text={'Atendimentos'}/>
            <InfoCard number={126} text={'Pacientes Ativos'}/>
            <InfoCard number={'1,276'} text={'Cardápios entregue'}/>
            <InfoCard number={'1,183'} text={'Avaliações realizadas'}/>
          </div>
        </div>
        
        <div className='absolute -z-1 backg'>
          {/* <Image src="/background.svg" alt="imagem de background" width={400} height={500} className='opacity-25'/> */}
        </div>

        <Separator w='90%'/>
      </section>
    </main>
  )
}
