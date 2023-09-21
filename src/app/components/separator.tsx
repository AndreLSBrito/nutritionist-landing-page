interface props {
  w: string
}

export function Separator({w} :props){
  return(
    <div className={`border w-[${w}]`}/>
  )
}