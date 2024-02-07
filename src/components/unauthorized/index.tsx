import React from 'react'
import Link from 'next/link'

type Props = {}

const Unauthorized = (props: Props) => {
  return (
    <div className='p-4 text-center h-screen w-screen flex justify-center flex-col'>
      <h1 className='text-3xl md:6xl'>Unauthorized Access!</h1>
      <p>Please contact Support or your agency to get access.</p>
      <Link href="/">
      Back to Home</Link>
    </div>
  )
}

export default Unauthorized