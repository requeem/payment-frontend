'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export function Reveal({
   children,
   className = '',
   delay = 0
}: {
   children: ReactNode
   className?: string
   delay?: number
}) {
   const reduceMotion = useReducedMotion()
   return (
      <motion.div
         className={className}
         initial={reduceMotion ? false : { opacity: 0, y: 28 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.15 }}
         transition={{
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : delay,
            ease: 'easeOut'
         }}
      >
         {children}
      </motion.div>
   )
}
