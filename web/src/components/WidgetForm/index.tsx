import { useState } from 'react'
import { FeedbackSelectTypeStep } from './Steps/FeedbackSelectTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import bug from '../../assets/bug.svg'
import idea from '../../assets/idea.svg'
import thought from '../../assets/thought.svg'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessType'

export const feedBackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bug,
      alt: 'imagem de um inseto'
    }
  },
  IDEIA: {
    title: 'Ideia',
    image: {
      source: idea,
      alt: 'imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thought,
      alt: 'imagem de uma nuvem de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedBackTypes

export function WidgetFrom(){
  const [feedbackTypeSelected, setFeedbackTypeSelected] = useState<null|FeedbackType>(null)
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false)

  function handleResetFeedback(){
    setFeedbackTypeSelected(null)
    setFeedbackSent(false)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSent ? (
        <FeedbackSuccessStep onNewOneClicked={handleResetFeedback}/>
      ) : (
        <>
          {!feedbackTypeSelected ? (
            <FeedbackSelectTypeStep onFeedbackTypeChanged={setFeedbackTypeSelected} />
          ) : (
            <FeedbackContentStep 
              feedbackTypeSelected={feedbackTypeSelected} 
              onReturnClicked={handleResetFeedback}
              onSendButtonClicked={setFeedbackSent}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ❤️ pela <a className="underline underline-offset-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none rounded-md" href='#'>Rockeseat</a> 
      </footer>
    </div>
  )
}