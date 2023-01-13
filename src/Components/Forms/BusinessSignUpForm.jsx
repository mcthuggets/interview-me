import React from 'react'

export default function BusinessSignUpForm() {
  return (
    <>
        <div className=' p-60 m-1'>

        <form>

            <div>
                <h1 className=' text-2xl leading-8 font-semibold '> Business Sign Up </h1>
                <p className='text-sm leading-5 font-normal text-gray-500 '> Fill in the fields below to get started </p>
            </div>

            {/** FIRST NAME + LAST NAME */}
            <div className='columns-2'>
                <div>
                    <label className=' text-sm leading-5 font-semibold '> First Name </label>
                </div>
                
                <div>
                    <input type="text" placeholder='Placeholder' className=' placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal p-1 rounded border-2 border-gray-500 w-full'></input>
                </div>
                
                <div>
                    <label className=' text-sm leading-5 font-semibold '> Last Name </label>
                </div>

                <div>
                    <input type="text" placeholder='Placeholder' className=' placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal p-1 rounded border-2 border-gray-500 w-full'></input>
                </div>
            </div>

            {/** BUSINESS NAME */}
                <div>
                    <label className=' text-sm leading-5 font-semibold '> Business Name </label>
                </div>

                <div>
                    <input type="text" placeholder='Placeholder' className=' placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal p-1 rounded border-2 border-gray-500 w-full w-full'></input>
                </div>

            {/** EMAIL + CONTACT */}
            <div className=' columns-2'>
                <div>
                    <label className=' text-sm leading-5 font-semibold '> Email Address </label>
                </div>

                <div>
                    <input type="email" placeholder='Email' className='placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal p-1 rounded border-2 border-gray-500 w-full'></input>
                </div>

                <div>
                    <label className=' text-sm leading-5 font-semibold '> Contact Number </label>
                </div>

                <div>
                    <input type="tel" placeholder='Placeholder' className='placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal p-1 rounded border-2 border-gray-500 w-full'></input>
                </div>

            </div>
                
            {/** PASSWORD + CONFIRM PASSWORD */}
            <div className='columns-2'>
                <div>
                        <label className=' text-sm leading-5 font-semibold '> Password </label>
                    </div>

                    <div>
                        <input type="password" placeholder='Placeholder' className='placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal p-1 rounded border-2 border-gray-500 w-full'></input>
                    </div>
                    
                    <div>
                        <label className=' text-sm leading-5 font-semibold '> Confirm Password </label>
                    </div>

                    <div>
                        <input type="password" placeholder='Placeholder' className='placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal p-1 rounded border-2 border-gray-500 w-full'></input>
                </div>
            </div>

            {/** CONSENT TO MARKETING RADIO */}
            <div className=' py-4 items-center '>
                    <input type="checkbox" className=' rounded w-4 h-4'></input>
                    <label> I consent to  receiving marketing material. </label>
            </div>

            {/** SIGN UP */}
            <button className=' border-blue-600 rounded bg-blue-600 w-full h-10 text-white'> Sign Up </button>

        </form>



        </div>
        
    </>
)
}
