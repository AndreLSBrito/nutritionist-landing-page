interface props {
  w: number
}

export function Separator({w} :props){
  return(
    <div className={`w-full`}>
      <div className={`w-[${w}%] border-[0.1px]`}>

      </div>
    </div>
  )
}