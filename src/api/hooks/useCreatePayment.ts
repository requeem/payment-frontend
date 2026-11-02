import { useMutation } from '@tanstack/react-query'
import { createPayment, CreatePaymentRequestConfig } from '../requests/payment/createPayment'

export const useCreatePaymentMutation = (
   settings?: MutationSettings<CreatePaymentRequestConfig, typeof createPayment>
) =>
   useMutation({
      mutationKey: ['createPayment'],
      mutationFn: ({ params, config }) =>
         createPayment({ params, config: { ...settings?.config, ...config } }),
      ...settings?.options
   })
