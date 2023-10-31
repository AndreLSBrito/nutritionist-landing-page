import Image from 'next/image'
import { Logo } from './components/logo'
import { Button } from './components/button'
import { Separator } from './components/separator'
import { InfoCard } from './components/infoCard'
import { Carrossel } from './components/carrossel'
import { CheckItem } from './components/checkItem'
import { Title } from './components/title'
import { DoubtCard } from './components/doubtCard'

export default function Home() {
  return (
    <main className="flex max-w-full min-h-screen flex-col  bg-grayPrimary overflow-x-hidden">
      <section className='flex items-center bg-search-background h-[100vh] w-full bg-cover bg-center bg-no-repeat lg:bg-none justify-center lg:justify-start lg:px-40 lg:h-auto lg:mt-20'>
        <div className=' flex top-0 left-10 p-5 absolute lg:top-8 lg:left-44'>
          <Logo/>
        </div>

        <div className='flex flex-col gap-2 max-w-[650px] px-10 py-12 items-center lg:mt-12 lg:items-start'>
          
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
        
      </section>
      
      <section className='flex flex-col px-10 py-8 gap-5 w-screen items-center lg:px-40 lg:grid lg:grid-cols-2'>
        <div className='flex h-[365px]  max-w-[480px] overflow-x-hidden lg:justify-end'>
          <Carrossel
            srcImages={['/man.svg', 'womans.svg', 'older-man.svg']}
            width='w-[180px] lg:w-[full]'
          />
        </div>

        <article className='flex flex-col text-white gap-4 items-center lg:items-start'>
          <Title
            text='PARA QUEM É MEU ACOMPANHAMENTO?'
            variant='white'
          />
          
          <div className='flex flex-col gap-3 mt-5'>
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
          </div>
            
          <div className='py-5 self-center lg:self-start'>
            <Button/>
          </div>
        </article>
      </section>

      <section className='flex flex-col px-10 py-10 gap-5 w-screen bg-grayLighter text-white lg:px-40 text-center'>
        <Title 
          text='"FAZER CERTO A DIETA ERRADA NÃO TE TRARÁ RESULTADOS"'
          variant='primary'
        />
          
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

      <section className='flex flex-col px-10 py-10 gap-5 w-screen text-white items-center lg:px-40 lg:grid lg:grid-cols-2'>
        <div className=' lg:order-2 lg:pl-10'>
          <Image
            src="/fred-apresentation.svg"
            alt='Nutricionista Fred Oliveira'
            width={300}
            height={500}
            sizes='100vw'
            className='w-52 lg:w-auto'
          />
        </div>

        <article className='flex flex-col text-white gap-4 items-center lg:items-start'>
          <Title
            text='O QUE VOCÊ TERÁ NO MEU ACOMPANHAMENTO?'
            variant='white'
          />

          <div className='flex flex-col gap-3 mt-5'>
            <CheckItem text='Você terá um nutricionista full time a sua disposição.'/>

            <CheckItem text='Meu compromisso é trazer o máximo de resultado, me doarei 110% para isso.'/>

            <CheckItem text='Protocolo dietético com alimentos que se encaixam na sua rotina, gostos que cabem no seu bolso.'/>

            <CheckItem text='Dieta completa por PDF ou impressa se preferir.'/>

            <CheckItem text='Trocas inteligentes de substitutos para alimentos, facilitando sua vida e evitando que enjoe.'/>

            <CheckItem text='Gráficos de sua evolução através de exames de Bioimpedância elétrica e anamnese.'/>

            <CheckItem text='Consultas online e presencial.'/>

            <CheckItem text='Avaliação física.'/>

            <CheckItem text='Plano de treino específico para seu objetivo.'/>
          </div>
       
          <div className='py-5 self-center lg:self-start'>
            <Button/>
          </div>
        </article>

      </section>

      <section className='flex flex-col px-10 pb-10 gap-5 w-screen text-white justify-center items-center lg:items-start lg:px-40 lg:grid lg:grid-cols-[250px_minmax(808px,_1fr)]'>
        <Title
          text='COMO FUNCIONA?'
          variant='white'
        />
   
        <div className="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
          <Image
            src="/card01.svg"
            alt='Escolha o plano ideal para você'
            width={400}
            height={500}
            sizes='100vw'
            
          />

          <Image
            src="/card02.svg"
            alt='Conversa com o nutricionista'
            width={400}
            height={500}
            sizes='100vw'
            
          />

          <Image
            src="/card03.svg"
            alt='Consulta e avaliação'
            width={400}
            height={500}
            sizes='100vw'
          />

          <Image
            src="/card04.svg"
            alt='Planejamento alimentar'
            width={400}
            height={500}
            sizes='100vw'
          />

          <Image
            src="/card05.svg"
            alt='Acompanhamento e suporte'
            width={400}
            height={500}
            sizes='100vw'
          />

          <Button
            width={400}
            height={200}
          />
        </div>
      </section>

      <section className='flex bg-grayLighter flex-col  px-10 py-10 gap-5 w-screen text-white items-center lg:px-40 lg:grid lg:grid-cols-[250px_minmax(400px,_1fr)] lg:items-start'> 
        <Title
          text='O QUE MEUS PACIENTES DIZEM?'
          variant='white'
        />

        <div className=''>
          <Carrossel
            srcImages={['/print1.jpg', '/print2.jpg', '/print3.jpg', '/print1.jpg', '/print2.jpg', '/print3.jpg']}
            width='w-[270px]'
          />
        </div>
      </section>

      <section className='flex flex-col px-10 py-10 gap-5 w-screen text-white justify-center items-center lg:px-40'>

        <div className='flex flex-col gap-5 w-full lg:grid lg:grid-cols-2 lg:col-span-2'>
          <Title
            text='PRINCIPAIS DÚVIDAS'
            variant='white'
          />

          <DoubtCard
            doubt='QUAL O PRAZO DE ENTREGA DA DIETA?'
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora suscipit dicta consequuntur dolore eaque fugit debitis cum magni, esse corporis, fuga sint itaque exercitationem! Magnam totam neque aliquam quos excepturi."
          />
          <DoubtCard
            doubt='CASO EU DESISTA, TEREI MEU DINHEIRO DE VOLTA?'
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora suscipit dicta consequuntur dolore eaque fugit debitis cum magni, esse corporis, fuga sint itaque exercitationem! Magnam totam neque aliquam quos excepturi."
          />
          <DoubtCard
            doubt='QUAIS OS LOCAIS DE ATENDIMENTO PRESENCIAL?'
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora suscipit dicta consequuntur dolore eaque fugit debitis cum magni, esse corporis, fuga sint itaque exercitationem! Magnam totam neque aliquam quos excepturi."
          />
          <DoubtCard
            doubt='COMO É FEITA A CONSULTA ONLINE?'
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora suscipit dicta consequuntur dolore eaque fugit debitis cum magni, esse corporis, fuga sint itaque exercitationem! Magnam totam neque aliquam quos excepturi."
          />
          <DoubtCard
            doubt='QUAL A DIFERENÇA DA CONSULTA PARA O ACOMPANHAMENTO?'
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora suscipit dicta consequuntur dolore eaque fugit debitis cum magni, esse corporis, fuga sint itaque exercitationem! Magnam totam neque aliquam quos excepturi."
          />
          <DoubtCard
            doubt='A DIETA TROCA TODOS OS MESES?'
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora suscipit dicta consequuntur dolore eaque fugit debitis cum magni, esse corporis, fuga sint itaque exercitationem! Magnam totam neque aliquam quos excepturi."
          />
          <DoubtCard
            doubt='A DIETA É MUITO RESTRITIVA?'
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora suscipit dicta consequuntur dolore eaque fugit debitis cum magni, esse corporis, fuga sint itaque exercitationem! Magnam totam neque aliquam quos excepturi."
          />

        </div>
      </section>

      <article className='flex flex-col px-10 py-10 gap-5 w-screen text-white justify-center items-center text-center max-w-2xl self-center'>
        <Title
          text='AGORA VOCÊ TEM APENAS 2 OPÇÕES'
          variant='white'
        />

        <h2 className='text-primary text-lg font-bold mt-[-20px]'>FECHAR ESSA PÁGINA E CONTINUAR COMO ESTÁ...</h2>

        
        <p>Você pode simplesmente fechar essa página e continuar tendo os mesmo resultados, ou, infelizmente, não tendo resultado algum...</p>  
        <p>Pode ignorar essa oportunidade de ter um acompanhamento personalizado, conseguir transformar o seu corpo e poder olhar no espelho novamente, se sentindo feliz com o que vê... OU </p>  
        

        <Title
          text='COMEÇAR AGORA MESMO, SEM NENHUM RISCO.'
          variant='primary'
        />

        <p>Você pode começar agora mesmo em nossa turma e ter a transformação que você tanto quer no seu corpo sem NENHUM RISCO!</p>

        <div className='py-5 self-center'>
          <Button/>
        </div>
      </article>

    </main>
  )
}
