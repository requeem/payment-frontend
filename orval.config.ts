import { defineConfig } from 'orval'

export default defineConfig({
   client: {
      output: {
         schemas: 'src/api/types',
         target: ''
      },
      input: 'http://localhost:4000/api/docs-json'
   }
})
