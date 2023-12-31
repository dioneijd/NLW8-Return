import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedBackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackTypeSelected: FeedbackType
  onReturnClicked: () => void
  onSendButtonClicked: (value: boolean) => void
}

export function FeedbackContentStep( {feedbackTypeSelected, onReturnClicked , onSendButtonClicked}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<null|string>(null)
  const [comment, setComment] = useState<string>('')
  
  const feedbackType = feedBackTypes[feedbackTypeSelected]

  function handleFeedbackSubmit(event: FormEvent){
    event.preventDefault()

    console.log({
      comment,
      screenshot
    })

    onSendButtonClicked(true)
  }

  return (        
    <>
      <header>
        <button 
          className="top-5 left-5 absolute outline-none border-2 border-transparent rounded-md text-zinc-400 hover:text-zinc-100 hover:border-brand-500 focus:text-zinc-100 focus:border-brand-500"
          onClick={onReturnClicked}
        >
          <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackType.image.source} alt={feedbackType.image.source} className='h-6 w-6'/>
          {feedbackType.title}
        </span>
        <CloseButton/>
      </header>

      <form onSubmit={handleFeedbackSubmit} className="my-4 w-full" >

        <textarea 
          className="min-w-[304px] w-full min-h-[112px] text-sm text-zinc-100 placeholder-zinc-400 bg-transparent rounded-md resize-none outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhe o que está acontecendo"
          onChange={event => setComment(event.target.value)}          
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton onClickSetScreenshot={setScreenshot} screenshotTook={screenshot}/>
          <button 
            type="submit" 
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500" 
            disabled={comment.length == 0}
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  )
}