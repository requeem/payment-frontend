import { PlanResponseDto } from '@/generated/model'
import { api } from '../../instance'

export type AllPlansRequestConfig = RequestConfig

export const getAllPlans = (requestConfig?: AllPlansRequestConfig) =>
   api.get<PlanResponseDto[]>('/plan/all', requestConfig?.config)
