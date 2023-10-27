import Link from "next/link";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export function Footer(){
  return (
    <footer className="flex justify-around bg-primary text-xs items-center font-semibold h-6">
      <p>TODOS OS DIREITOS RESERVADOS - 2023 </p>

      <Link href="/">
        <div className="flex gap-1 items-center">
          <p >SUBIR AO TOPO</p>
          <MdKeyboardDoubleArrowUp/>
        </div>
      </Link>
    </footer>
  )
}