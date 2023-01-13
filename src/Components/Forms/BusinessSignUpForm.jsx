import React from 'react'

export default function BusinessSignUpForm() {

    let firstName = ''
    let lastName = ''
    let businessName = ''
    let email = ''
    let contactNumber = ''

    let password = ''
    let confirmedPassword = ''

    let marketingConsent = ''


    function handleClick(event) {
        console.log(firstName)
        console.log(lastName)
        console.log(businessName)
        console.log(email)
        console.log(contactNumber)
        console.log(password)
        console.log(confirmedPassword)
        console.log(marketingConsent)
    }

  return (
    <>
        <div className=' p-36 m-1'>

        <form>

            <div>
                <h1 className=' text-2xl leading-8 font-bold pb-1'> Business Sign Up </h1>
                <p className='text-sm leading-5 font-normal text-gray-500  pb-1'> Fill in the fields below to get started </p>
            </div>

            {/** FIRST NAME + LAST NAME */}
            <div className='columns-2'>
                <div>
                    <label className=' text-sm leading-5 font-bold pb-2'> First Name </label>
                </div>
                
                <div>
                    <input type="text" placeholder='Placeholder' className=' placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal rounded border-2 border-gray-500 w-full p-3 mb-2' 
                            onChange={ (event) => { firstName =  event.target.value } }></input>
                </div>
                
                <div>
                    <label className=' text-sm leading-5 font-bold pb-1'> Last Name </label>
                </div>

                <div>
                    <input type="text" placeholder='Placeholder' className=' placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal  rounded border-2 border-gray-500 w-full p-3 mb-2'
                            onChange={ (event) => { lastName =  event.target.value } }></input>
                </div>
            </div>

            {/** BUSINESS NAME */}
                <div>
                    <label className=' text-sm leading-5 font-bold'> Business Name </label>
                </div>

                <div>
                    <input type="text" placeholder='Placeholder' className=' placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal  rounded border-2 border-gray-500 w-full p-3 mb-2'
                            onChange={ (event) => { businessName =  event.target.value } }></input>
                </div>

            {/** EMAIL + CONTACT */}
            <div className=' columns-2'>
                <div>
                    <label className=' text-sm leading-5 font-bold '> Email Address </label>
                </div>

                <div>
                    <input type="email" placeholder='Email' className='placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal  rounded border-2 border-gray-500 w-full p-3 mb-2'
                            onChange={ (event) => { email =  event.target.value } }></input>
                </div>

                <div>
                    <label className=' text-sm leading-5 font-bold '> Contact Number </label>
                </div>

                <div>
                    <input type="tel" placeholder='Placeholder' className='placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal  rounded border-2 border-gray-500 w-full p-3 mb-2'
                            onChange={ (event) => { contactNumber =  event.target.value } }></input>
                </div>

            </div>
                
            {/** PASSWORD + CONFIRM PASSWORD */}
            <div className='columns-2'>
                <div>
                        <label className=' text-sm leading-5 font-bold '> Password </label>
                    </div>

                    <div>
                        <input type="password" placeholder='Placeholder' className='placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal  rounded border-2 border-gray-500 w-full p-3 mb-2'
                                onChange={ (event) => { password =  event.target.value } }></input>
                    </div>
                    
                    <div>
                        <label className=' text-sm leading-5 font-bold '> Confirm Password </label>
                    </div>

                    <div>
                        <input type="password" placeholder='Placeholder' className='placeholder:text-cool-gray-400 placeholder:text-sm placeholder:leading-5 placeholder:font-normal  rounded border-2 border-gray-500 w-full p-3 mb-2'
                                onChange={ (event) => { firstName =  event.target.value } }></input>
                </div>
            </div>

            {/** CONSENT TO MARKETING RADIO */}
            <div className=' py-4 items-center p-3 mb-2 space-x-2'>
                    <input type="checkbox" className=' rounded w-4 h-4 align-middle'
                            onChange={ (event) => { marketingConsent =  event.target.value } }></input>
                    <label className=''> I consent to  receiving marketing material. </label>
            </div>

            {/** SIGN UP */}
            <button type='button' className=' border-blue-600 rounded bg-blue-600 w-full h-12 text-white'
                    onClick={ (event) => handleClick(event) }> Sign Up </button>

        </form>



        </div>
        
    </>
)
}
