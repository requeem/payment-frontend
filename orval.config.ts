import { defineConfig } from 'orval'

export default defineConfig({
   api: {
      input: {
         target: 'http://localhost:4000/api/docs-json'
      },
      output: {
         mode: 'split',
         target: './generated/api.ts',
         schemas: './generated/model',
         clean: true
      }
   }
})
