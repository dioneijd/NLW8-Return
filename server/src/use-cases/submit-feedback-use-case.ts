import { MailAdapter } from "../adapters/mail-adapter"
import { FeedbackRepository } from "../repositories/feedbacks-repository"

interface SubmitFeedbackUseCaseRequestData {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackUseCase {

  constructor( 
    private feedbacksRepository: FeedbackRepository,
    private mailAdapter: MailAdapter  
  ){}

  async execute(requestData: SubmitFeedbackUseCaseRequestData) {
    const { type, comment, screenshot } = requestData

    if (screenshot && !screenshot.startsWith('data:imagem/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    if (!type) {
      throw new Error('Type is required')
    }

    if (!comment) {
      throw new Error('Comment is required')
    }


    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`
      ].join('\n')
    
    })
  }
}