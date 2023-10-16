import { FaRegCheckSquare } from "react-icons/fa";

type Props = {
  text: string
}

export function CheckItem({text}:Props){
  return(
    <div className=" flex gap-2 items-center">
      <div className="w-8 h-8">
        <FaRegCheckSquare 
          color="#10958e"
          size="30" 
        />
      </div>

      <p className="text-lg"> {text} </p>
    </div>
  )
}