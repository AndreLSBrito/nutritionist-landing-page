import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Button(){
  return(
    <button>
      <Link href="https://linkedin.com/andrelsbrito">
        <Image src="/button.svg" alt="Quero começar!" width={250} height={90}/>
      </Link>
    </button>
    
  )
}