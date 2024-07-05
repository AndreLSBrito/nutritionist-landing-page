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
       <div className='animate-bounce flex top-0 right-10 p-5 absolute lg:top-0 lg:right-4'>
          <Logo/>
        </div>
      <section className='flex items-center bg-search-background-mb lg:bg-search-background-dk h-[100vh] w-full bg-cover bg-center bg-no-repeat justify-center lg:items-start lg:justify-start lg:px-40  lg:pt-20'>
       

        <div className='flex flex-col gap-2 max-w-[650px] px-10 py-12 items-center animate-bounce lg:mt-12 lg:items-start'>
          
          <article className='flex flex-col text-white gap-2'>
            <h1 className='font-extrabold text-4xl'>PROJETO <span className='text-primary'>30</span> DIAS</h1>
            <h2 className='font-semibold text-1xl'><span className='text-primary'>APRENDA</span> A COMER DE VERDADE E CONQUISTE A <span className='text-primary'>SAÚDE</span> E O <span className='text-primary'>FÍSICO</span> QUE SEMPRE <span className='text-primary'>DESEJOU</span>.</h2>
  
            <Separator w={45}/>

            <h3 className='text-sm'>O projeto para você que quer alcançar resultados de verdade e a sua melhor versão.</h3> 
    
          </article>

          <Button/>

          <div className='flex flex-row flex-wrap max-w-lg gap-2 justify-center'>
            <InfoCard number={1000} text={'Corpos transformados'}/>
            {/* <InfoCard number={126} text={'Pacientes Ativos'}/> */}
            <InfoCard number={'2.500'} text={'Cardápios entregues'}/>
            {/* <InfoCard number={'1.183'} text={'Avaliações realizadas'}/> */}
            <InfoCard number={13} text={'Anos de experiência'}/>
          </div>
          
        </div>
        
      </section>
      
      <section className='flex flex-col px-10 py-8 gap-5 w-screen items-center lg:px-40 lg:grid lg:grid-cols-[minmax(200px,425px)_500px] max-w-7xl animate-on-enter animate-slideIn group-focus-visible:animate-slideIn'>
        <div className='flex h-[365px] max-w-[480px] overflow-x-hidden lg:justify-end'>
          <Carrossel
            srcImages={['/1.png', '/2.png', '/3.png', '/4.png']}
            width='w-[180px] md:h-[320px] md:w-[180px] lg:w-[full]'
          />
        </div>

        <article className='flex flex-col text-white gap-4 items-center lg:items-start '>
          <Title
            text='PARA QUEM É O PROJETO?'
            variant='white'
          />
          
          <div className='flex flex-col gap-3 mt-5'>
            <CheckItem 
              text="Quer emagrecer de forma saudável."
            />
            
            <CheckItem 
              text="Quer resultados de verdade, em 30 dias."
            />
            
            <CheckItem 
              text="Já tentou emagrecer várias vezes e desistiu."
            />
            
            <CheckItem
            text="Deseja mudanças para hábitos mais saudáveis."
            />
          </div>
            
          <div className='py-5 self-center lg:self-start'>
            <Button/>
          </div>
        </article>
      </section>

      <section className='flex flex-col px-10 py-10 gap-5 w-screen bg-grayLighter text-white lg:px-40 text-center items-center'>
        <Title 
          text='"QUEM É FRED OLIVEIRA?"'
          variant='primary'
        />
          
          <p>Sou um profissional de Educação Física e Nutricionista Esportivo.</p>

          <p>Tenho pós-graduação em Metabolismo e Emagrecimento.</p>

          <p>Também sou pós-graduado em Performance no Esporte.</p>

          <p>Além disso, fui atleta de Fisiculturismo e atualmente sou Coach de Atletas.</p>

          <p> Com mais de 13 anos de experiência na área de saúde, conheço bem o que funciona e o que não funciona.</p>

          <p>Estou aqui para ajudar você a alcançar sua melhor versão em apenas 30 dias.</p>

      </section>

      <section className='flex max-w-7xl flex-col px-10 py-10 gap-5 w-screen text-white items-center lg:px-40 lg:grid lg:grid-cols-2'>
        <div className=' lg:order-2 lg:pl-20'>
          <Image
            src="/fred-apresentation.svg"
            alt='Nutricionista Fred Oliveira'
            width={350}
            height={500}
            sizes='100vw'
            className='w-52 lg:w-auto'
          />
        </div>

        <article className='flex flex-col text-white gap-4 items-center lg:items-start'>
          <Title
            text='O QUE VOCÊ GANHA AO FAZER PARTE DO PROJETO 30 DIAS?'
            variant='white'
          />

          <div className='flex flex-col gap-3 mt-5'>
            <CheckItem text='Um plano alimentar personalizado.'/>

            <CheckItem text='Um plano de treino de musculação.'/>

            <CheckItem text='Livro digital de receitas fitness.'/>

            <CheckItem text='Treino de mobilidade.'/>

            <CheckItem text='Acesso direto comigo no Whatsapp para tirar dúvidas.'/>

            <CheckItem text='Bônus 1: Comunidade no Whatsapp com motivação diária.'/>

            <CheckItem text='Bônus 2: Planilha para regulação do sono.'/>

            <CheckItem text='Bônus 3: Método Exclusivo Emagrecimento Fred Oliveira.'/>
          </div>
       
          <div className='py-5 self-center lg:self-start'>
            <Button/>
          </div>
        </article>

      </section>

      <section className='flex flex-col max-w-[90rem] px-10 pb-10 gap-5 w-screen text-white justify-center items-center lg:items-start lg:px-40 lg:grid lg:grid-cols-[250px_minmax(808px,_1fr)]'>
        <Title
          text='COMO FUNCIONA?'
          variant='white'
        />
   
        <div className="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
          <Image
            src="/card01.svg"
            alt='Escolha o plano ideal para você'
            width={350}
            height={450}
            sizes='100vw'
            
          />

          <Image
            src="/card02.svg"
            alt='Conversa com o nutricionista'
            width={350}
            height={450}
            sizes='100vw'
            
          />

          <Image
            src="/card03.svg"
            alt='Consulta e avaliação'
            width={350}
            height={450}
            sizes='100vw'
          />

          <Image
            src="/card04.svg"
            alt='Planejamento alimentar'
            width={350}
            height={450}
            sizes='100vw'
          />

          <Image
            src="/card05.svg"
            alt='Acompanhamento e suporte'
            width={330}
            height={450}
            sizes='100vw'
          />

          <div className='pl-4 self-center'>
            <Button
              width={300}
              height={200}
            />
          </div>
        </div>
      </section>

      <section className='flex bg-grayLighter flex-col  px-10 py-10 gap-5 w-screen text-white items-center lg:px-40 lg:grid lg:grid-cols-[250px_minmax(400px,_1fr)] lg:items-start'> 
        <Title
          text='O QUE MEUS PACIENTES DIZEM?'
          variant='white'
        />

        <div className=''>
          <Carrossel
            srcImages={['/print1.jpeg', '/print2.jpeg', '/print3.jpeg', '/print4.jpeg', '/print5.jpeg', '/print6.jpeg']}
            width='w-[270px]'
            autoPlay={false}
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
            doubt='COMO FUNCIONA O PROJETO 30 DIAS?'
            answer="O projeto consiste em um acompanhamento durante 30 dias. Onde você irá receber um plano alimentar , uma ficha de treino de musculação e vários conteúdos extras. Que irão te guiar no processo de emagrecimento e garantir seus primeiros resultados em, pelo menos, 30 dias."
          />
          <DoubtCard
            doubt='CASO EU DESISTA, TEREI MEU DINHEIRO DE VOLTA?'
            answer="Você terá seu dinheiro integralmente de volta, caso desista antes de iniciar o projeto e não tenha recebido seu plano alimentar."
          />
          <DoubtCard
            doubt='COMO É FEITA A AVALIAÇÃO?'
            answer="Te enviarei um formulário que contém perguntas relevantes para que eu possa montar seu plano alimentar e de treino, totalmente personalizado para você."
          />
          {/* <DoubtCard
            doubt='COMO É FEITA A CONSULTA ONLINE?'
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora suscipit dicta consequuntur dolore eaque fugit debitis cum magni, esse corporis, fuga sint itaque exercitationem! Magnam totam neque aliquam quos excepturi."
          /> */}
          {/* <DoubtCard
            doubt='QUAL A DIFERENÇA DA CONSULTA PARA O ACOMPANHAMENTO?'
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora suscipit dicta consequuntur dolore eaque fugit debitis cum magni, esse corporis, fuga sint itaque exercitationem! Magnam totam neque aliquam quos excepturi."
          /> */}
          <DoubtCard
            doubt='A DIETA TROCA TODOS OS MESES?'
            answer="O projeto consiste em apenas 30 dias, mas caso opite por participar de uma nova edição, criarei outro plano personalizado para você."
          />
          <DoubtCard
            doubt='A DIETA É MUITO RESTRITIVA?'
            answer="Não, muito pelo contrário, você irá comer de tudo no seu dia a dia, de forma simples e saudável. Contando com meu acompanhamento e do apoio da nossa comunidade no Whatsapp."
          />
          <DoubtCard
            doubt='VOU TER UM SUPORTE DURANTE O PERÍODO DO PROJETO 30 DIAS?'
            answer="Sim. Você irá ter contato direto comigo por Whatsapp e também dentro do nosso grupo vip do Projeto 30 dias."
          />
          <DoubtCard
            doubt='A DIETA E O TREINO SÃO PERSONALIZADOS?'
            answer="Sim. A dieta e o treino são feitos para você conforme as suas respostas no questionário."
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
