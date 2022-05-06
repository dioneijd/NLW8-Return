import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";


export function CloseButton(){
  return ( 
    <Popover.Button 
      className='top-5 right-5 absolute border-2 border-transparent rounded-md outline-none text-zinc-400 hover:text-zinc-100 hover:border-brand-500 focus:text-zinc-100 focus:border-brand-500' 
      title="Fechar Formulario"
    >
      <X weight="bold" className="w-4 h-4 "/>
    </Popover.Button>
  )
}