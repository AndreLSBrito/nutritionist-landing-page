import Image from "next/image";

export function Logo(){
  return(
    <Image width={100} height={100} color="white" src="/logo.svg" alt="Logo da clínica do nutricionista" />
  )
}