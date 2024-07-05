import Image from "next/image";

export function Logo(){
  return(
    <Image width={300} height={300} color="white" src="/Logo-Fred.png" alt="Logo da clínica do nutricionista" />
  )
}