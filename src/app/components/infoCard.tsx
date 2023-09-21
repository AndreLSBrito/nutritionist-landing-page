interface props {
  number: number | string;
  text: string
}

export function InfoCard({number, text}: props){
  return(
    <div className="flex flex-col max-w-[80px] justify-start items-center">
      <div className="text-primary text-xl font-bold">
        +{number}
      </div>

      <p className="text-xs font-bold text-white text-center">
        {text}
      </p>
    </div>
  )
}