interface TitleProps {
  text: string
  variant: "primary" | "white"
}

export function Title({text, variant}: TitleProps){
  return (
    <h1 className={`font-extrabold text-2xl text-${variant} text-center lg:text-start`}>
      {text}
    </h1>
  )
}