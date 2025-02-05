import React from 'react'

const LiveMatches = () => {
  return (
    <>
    <div className=' flex overflow-auto gap-3'>
        <div className='flex w-[100vw] justify-center'>
            <div className='bg-white w-[350px] h-[165px] rounded-md mt-2'>
                <h3 className='text-center font-medium  text-blue-700 '>Indian Premier League</h3>
                <p className='text-center text-[14px] '>Arun jaitley Stadium</p>
                        <hr className='text-orange-500' />
                <div className='flex'>
                    <div className='w-[180px] p-2'> 
                        <div className='flex gap-2'>
                            <img src="https://g.cricapi.com/iapi/23-637877072894080569.webp?w=48" alt="" className='w-[30px]' />
                            <h4>England</h4>
                        </div>

                        <div className='flex mt-3 gap-2'>
                            <img src="https://g.cricapi.com/iapi/31-637877061080567215.webp?w=48" alt="" className='w-[30px]' />
                            <h4>India</h4>
                        </div>
                        
                    </div>

                    <div className='w-[170px] p-2'>
                        <p>Date</p>
                        <p>ODI</p>
                    </div>
                </div>
                 <p className='text-center text-green-700 font-medium'>CSK won by 5 wickets</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default LiveMatches