import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Button(){
  return(
    <button>
      <Link href="https://linkedin.com/andrelsbrito">
        <Image src="/button.svg" alt="imagem" width={180} height={50}/>
      </Link>
    </button>
    
  )
}