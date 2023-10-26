interface TitleProps {
  text: string
  variant: "primary" | "white"
}

export function Title({text, variant}: TitleProps){
  return (
    <h1 className={`font-bold text-2xl text-${variant}`}>
      {text}
    </h1>
  )
}