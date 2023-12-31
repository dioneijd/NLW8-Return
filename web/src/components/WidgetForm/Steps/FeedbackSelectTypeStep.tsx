import { FeedbackType, feedBackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackSelectTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackSelectTypeStep( { onFeedbackTypeChanged }: FeedbackSelectTypeStepProps ) {
  return (     
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton/>
      </header>

      <div className='flex py-8 gap-2 w-full'>
        { Object.entries(feedBackTypes).map(([ key, value ]) => {
            return (
              <button 
              className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none'
                key={key}
                onClick={() => onFeedbackTypeChanged( key as FeedbackType )}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
          }) 
        }
      </div> 
    </>  
  )
}