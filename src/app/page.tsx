'use client'

import { useLogoutUserMutation } from '@/src/api/hooks/useLogoutUserMutation'
import { useUserQuery } from '@/src/api/hooks/useUserQuery'
import { Button } from '@/src/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
   const router = useRouter()
   const { data: user } = useUserQuery()
   const { mutate } = useLogoutUserMutation({
      options: {
         onSuccess: () => router.push('/auth/login')
      }
   })

   return (
      <section>
         {user?.data.email}
         <Button onClick={() => mutate()}>Выйти из аккаунта</Button>
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
