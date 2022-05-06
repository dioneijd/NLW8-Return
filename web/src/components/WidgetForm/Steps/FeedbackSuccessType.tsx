import { CloseButton } from "../../CloseButton";
import successIcon from "../../../assets/greenCheck.svg"

interface FeedbackSuccessStepProps {
  onNewOneClicked: () => void
}

export function FeedbackSuccessStep( { onNewOneClicked }: FeedbackSuccessStepProps) {
  return ( 
    <>
      <header>
        <CloseButton/>
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successIcon} alt="Imagem de confirmação verde" />
        <span className="text-xl mt-2">Agradecemos o Feedback</span>

        <button
          type="button"
          onClick={onNewOneClicked}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
        >
          Quero enviar outro
        </button>


      </div>
    
    </>
  )
}