import { useState } from "react";
import { toast } from 'react-toastify';

const USER_API = process.env.NODE_ENV === 'development' ? "http://localhost:5001/api/v1/user" : '/api/v1/user';

function SignUpForm() {
    const [loading, setLoading] = useState(false);

    /** * @param {SubmitEvent} e */
    function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);
      /** * @type {HTMLFormElement} */
      const el = e.target;
      const formData = new FormData(el);
      const data = Object.fromEntries(formData);
  
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      };
      
      fetch(USER_API, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setLoading(false);
            el.reset()
            toast.success('Submitted successfully. Thank you for your response', {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
                });
        })
        .catch(err => {
            console.error(err)
            setLoading(false);
            toast.error('Unexpected error occured', {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
            });
        });
    }
  return (
    <>
        <form className='px-4 py-10 shadow-sm glass' onSubmit={handleSubmit}>
            <h3 className='font-charmonan pb-6 text-center text-2xl font-bold'>SIGN UP</h3>
            <input type="text" name='name' placeholder='Name' className='mb-4 w-full px-4 py-2 shadow-sm' required />
            <input type="email" name='email' placeholder='Email' className='mb-4 w-full px-4 py-2 shadow-sm' required />
            <input type="text" name='business_name' placeholder='Business Name' className='mb-4 w-full px-4 py-2 shadow-sm' required />
            <button disabled={loading} className='font-semibold px-4 py-2 bg-white rounded shadow'>{loading ? 'Please Wait' : 'SUBMIT'}</button>
        </form>
    </>
  )
}

export default SignUpForm