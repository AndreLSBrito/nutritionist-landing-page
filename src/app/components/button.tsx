import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  width?: number;
  height?: number;
}

export function Button({width =250, height=90}: ButtonProps){
  return(
    <button>
      <Link href="https://linkedin.com/andrelsbrito">
        <Image src="/button.svg" alt="Quero começar!" width={width} height={height}/>
      </Link>
    </button>
    
  )
}