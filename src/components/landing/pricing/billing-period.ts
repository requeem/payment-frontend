export type Period = 'MONTHLY' | 'YEARLY'
export type Plan = {
   id: string
   title: string
   description: string
   mountlyPrice: number
   yearlyPrice: number
   features: string[]
   isFeatured: boolean
}
