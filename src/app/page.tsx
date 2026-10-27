import { Button } from '@/components/ui/button'

export default function Home() {
   return (
      <section>
         <div>Home Page</div>
         <h1>Buttons : </h1>
         <Button className='' variant='default'>
            Click
         </Button>
         <Button variant='destructive'>Click</Button>
         <Button variant='ghost'>Click</Button>
         <Button variant='link'>Click</Button>
         <Button variant='outline'>Click</Button>
      </section>
   )
}
