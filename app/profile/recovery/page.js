'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'

const RcoveryPage = () => {
   const [recoveryEmail,setRecoveryEmail]=useState('')

   const handleRecovery=()=>{
    console.log('recoveryEmail',recoveryEmail);
   }

    return (
    <div className='flex w-2/5 flex-col mx-auto items-left justify-between p-24 bg-gray-500 rounded-md m-20'>
        <h1>Recover your password</h1>
        <p>You will recieve an email to recover your password</p>
        <Label>Recovery Email</Label>
        <Input value={recoveryEmail} placeholder='Enter mail for recovery' onChange={(e)=>setRecoveryEmail(e.target.value)}/>
        <br/>
        <Button onClick={handleRecovery}>Send</Button>
    </div>
  )
}

export default RcoveryPage