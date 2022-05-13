import exp from "constants"
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create:   createFeedbackSpy},
  { sendMail: sendMailSpy}
)

describe('Submit Feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: 'Example comment',
      screenshot: 'data:imagem/png;base64alksdjlajdnakuduaa'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should be not able to submit a feedback without type', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: '',
      comment: 'Example comment',
      screenshot: 'data:imagem/png;base64alksdjlajdnakuduaa'
    })).rejects.toThrow()
  })

  it('should be not able to submit a feedback without comment', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:imagem/png;base64alksdjlajdnakuduaa'
    })).rejects.toThrow()
  })

  it('should be not able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: 'Example comment',
      screenshot: 'Image.jpg'
    })).rejects.toThrow()
  })

})