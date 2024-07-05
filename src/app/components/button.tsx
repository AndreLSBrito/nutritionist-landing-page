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
      <Link href="https://wa.me/553791981812?text=Ol%C3%A1,%20Fred%20quero%20fazer%20parte%20do%20projeto%2030%20dias">
        <Image src="/button.svg" alt="Quero começar!" width={width} height={height}/>
      </Link>
    </button>
    
  )
}