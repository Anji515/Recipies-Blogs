'use client'
import { createClient } from '@utils/supabase-browser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'

const RcoveryPage = () => {
   const [recoveryEmail,setRecoveryEmail]=useState('')

   const [supabase]=useState(()=>createClient())

   const handleRecovery=async()=>{
    const { data } = await supabase.auth.resetPasswordForEmail(recoveryEmail)
    console.log('recovery',data)
   }

    return (
    <div className='pt-10 mx-auto min-h-[700px]'>
    <div className='flex w-2/5 flex-col mx-auto items-left justify-between p-24 bg-gray-200 rounded-md m-20 '>
        <h1>Recover your password</h1>
        <p>You will recieve an email to recover your password</p>
        <br/>
        <Label>Recovery Email</Label>
        <Input value={recoveryEmail} placeholder='Enter mail for recovery' onChange={(e)=>setRecoveryEmail(e.target.value)}/>
        <br/>
        <Button onClick={handleRecovery}>Submit</Button>
    </div>
    </div>
  )
}

export default RcoveryPage