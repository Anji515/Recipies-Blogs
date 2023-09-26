
import supabase from '@/app/supabase-server'
// import AccountForm from './account-form'

export default async function Account() {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  console.log('session',session)

  return (
    <>
    </>
  )
}

//   <AccountForm session={session} />