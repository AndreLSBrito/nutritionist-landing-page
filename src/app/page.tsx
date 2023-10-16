import Image from 'next/image'
import { Logo } from './components/logo'
import { Button } from './components/button'
import { Separator } from './components/separator'
import { InfoCard } from './components/infoCard'
import olderMan from '../../public/older-man.svg'
import womans from '../../public/womans.svg'
import man from '../../public/man.svg'
import { Carrossel } from './components/carrossel'
import { CheckItem } from './components/checkItem'

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col  bg-grayPrimary">
      <section className='bg-search-background bg-cover bg-center bg-no-repeat lg:bg-none'>
        <div className='flex flex-col gap-2 max-w-md px-10 py-12'>
          <Logo/>
          
          <article className='flex flex-col text-white gap-2'>
            <h1 className='font-bold text-2xl'><span className='text-primary'>APRENDA</span> A COMER DE VERDADE E CONQUISTE A <span className='text-primary'>SAÚDE</span> E O <span className='text-primary'>FÍSICO</span> QUE SEMPRE <span className='text-primary'>DESEJOU</span>.</h1>
  
            <Separator w='45%'/>

            <h3 className='text-sm'>Comendo até um docinho se quiser.</h3> 
    
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
      
      <section className='flex flex-col px-10 py-8 gap-5 w-screen'>
        <div className='flex gap-1 h-52 max-w-max overflow-hidden'>
          <Image 
            src={man} 
            alt='Personal trainer'
          />

          <Image 
            src={womans}
            alt='Mulheres exercitando'
          />
          
          <Image
            src={olderMan} 
            alt='Homem mais velho exercitando'
          />
        </div>

        <article className='flex flex-col text-white gap-4'>
            <h1 className='font-bold text-2xl'>
              PARA QUEM É MEU ACOMPANHAMENTO?
            </h1>

            <CheckItem 
              text="Não aguenta mais treinar sem ter resultados."
            />
            
            <CheckItem 
              text="Já tentou fazer dieta, mas nunca conseguiu seguir por muito tempo."
            />
            
            <CheckItem 
              text="Adultos que estão dispostos a se dedicar ao máximo para obter excelentes resultados."
            />
            
            <CheckItem
             text="Já está cansado de gastar com suplementação, procedimentos e estratégias que não funcionam."
            />
            
            <div className='py-5'>
              <Button/>

            </div>
        </article>
      </section>

      <section className='flex flex-col px-10 py-10 gap-5 w-screen bg-grayLighter text-white'>
        <h1 className='font-bold text-2xl text-primary'>
          "FAZER CERTO A DIETA ERRADA NÃO TE TRARÁ RESULTADOS"
        </h1>

        <p>
          Durante muitos anos eu via pessoas se dedicando aos 
          seus objetivos e esbarrando em estratégias de dieta
          aleatórias.
        </p>

        <p>
          Posso te garantir que não é pro falta de força de vontade
          que os resultados não vem, mas sim, pela ausência de um
          método e de uma organização eficiente.
        </p>

        <p>
          Eu vou te ensinar a comer melhor e te provar que a qualidade
          do que você faz é muito mais importante do que por quanto
          você faz.
        </p>

        <p>
          O grande segredo não está em fazer mais, e sim, em fazer
          MELHOR!
        </p>
      </section>

      <section className='flex flex-col px-10 py-10 gap-5 w-screen text-white'>
        <h1 className='font-bold text-2xl text-primary'>
          O QUE VOCÊ TERÁ NO MEU ACOMPANHAMENTO?
        </h1>

        <div className='border border-primary w-50 h-50'>
          FOTO DO FRED
        </div>

        <CheckItem text='Você terá um nutricionista full time a sua disposição.'/>
        <CheckItem text='Meu compromisso é trazer o máximo de resultado, me doarei 110% para isso.'/>
        <CheckItem text='Protocolo dietético com alimentos que se encaixam na sua rotina, gostos que cabem no seu bolso.'/>
        <CheckItem text='Dieta completa por PDF ou impressa se preferir.'/>
        <CheckItem text='Trocas inteligentes de substitutos para alimentos, facilitando sua vida e evitando que enjoe.'/>
        <CheckItem text='Gráficos de sua evolução através de exames de Bioimpedância elétrica e anamnese.'/>
        <CheckItem text='Consultas online e presencial.'/>
        <CheckItem text='Avaliação física.'/>
        <CheckItem text='Plano de treino específico para seu objetivo.'/>
        
        <Button/>
      </section>

    </main>
  )
}
