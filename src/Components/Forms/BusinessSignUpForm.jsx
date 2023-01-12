import React from 'react'

export default function BusinessSignUpForm() {
  return (
    <>
        <form className=''>

            <h1 className=' text-2xl leading-8 font-semibold '> Business Sign Up </h1>
            <p className='text-sm leading-5 font-normal text-gray-500 '> Fill in the fields below to get started </p>

            <div className='columns-2'>
                <div>
                    <label className=' text-sm leading-5 font-semibold '> First Name </label>
                    <label className=' text-sm leading-5 font-semibold '> Last Name </label>
                </div>
                
                <div>
                    <input type="text" placeholder='Placeholder' className=' placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal p-1 rounded border-2 border-gray-500'></input>
                    <input type="text" placeholder='Placeholder'></input>
                </div>
            </div>

            <div>
                <label className=' text-sm leading-5 font-semibold '> Business Name </label>
                <input type="text" placeholder='Placeholder' className='max-w'></input>
            </div>

            <div className='columns-2'>
                <div>
                    <label className=' text-sm leading-5 font-semibold '> Email Address </label>
                    <input type="email" placeholder='Placeholder'></input>
                </div>
                
                <div>
                    <label className=' text-sm leading-5 font-semibold '> Contact Number </label>
                    <input type="tel" placeholder='Placeholder'></input>
                </div>
            </div>

            <div className='columns-2'>
                <div>
                    <label className=' text-sm leading-5 font-semibold '> Password </label>
                    <input type="password" placeholder='Placeholder'></input>
                </div>
                
                <div>
                    <label className=' text-sm leading-5 font-semibold '> Confirm Password </label>
                    <input type="password" placeholder='Placeholder'></input>
                </div>
            </div>


            <div className=''>
                    <input type="radio"></input>
                    <label> I consent to  receiving marketing material. </label>
            </div>

        </form>
    </>
)
}
