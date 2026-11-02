import { CreatePaymentDto, YookassaWebhookDto } from '@/generated/model'
import { api } from '../../instance'

export type CreatePaymentRequestConfig = RequestConfig<CreatePaymentDto>

export type CreatePaymentResponse = {
   confirmation: {
      confirmation_url: string
   }
}

export const createPayment = ({ params, config }: CreatePaymentRequestConfig) =>
   api.post<CreatePaymentResponse>('/payment', params, config)
