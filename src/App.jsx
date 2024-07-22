import { useForm } from 'react-hook-form'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const { handleSubmit, register, formState } = useForm({
    defaultvalues: { username: '', email: '', password: '', terms: false }
  })

  const onSubmit = (e) => {
    console.log(e)
  }

  return (
    <>
      {console.log(formState)}
      <article id='formular-page'>
        <div id='img-general-form'>
          <img
            src='https://res.cloudinary.com/ddybbosdk/image/upload/v1721636861/proyect-practice-react/all-picture-img_wjen6u.png'
            loading='lazy'
            alt='main-page-picture'
            draggable={false}
          />
        </div>
        <div id='form-div-container'>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id='form-register'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <img
                id='logo-all-picture-form'
                src='https://res.cloudinary.com/ddybbosdk/image/upload/v1712390544/Logo_Fotogallery_wm24qa.png'
                alt='logo-all-pictures'
              />
              <h2>Create an Account</h2>
              <p className='parraf-info-form'>
                Sign up to get started with your Account
              </p>
            </div>
            <fieldset>
              <label htmlFor='name'>Username</label>
              <input
                id='name'
                className={
                  formState.isSubmitted && !formState.errors?.username
                    ? 'succes'
                    : null
                }
                type='text'
                {...register('username', {
                  required: { value: true, message: '*' }
                })}
              />
              {formState.errors.username?.type == 'required' ? (
                <p id='error-username' className='error-required'>
                  {formState.errors.username?.message}
                </p>
              ) : null}
            </fieldset>
            <fieldset>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                className={
                  formState.isSubmitted && !formState.errors?.email
                    ? 'succes'
                    : null
                }
                {...register('email', {
                  required: { value: true, message: '*' },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Introduce a valid email'
                  }
                })}
              />
              {formState.errors.email?.type == 'required' ? (
                <p
                  id='error-email'
                  className='error-required'
                >{`${formState.errors.email?.message}`}</p>
              ) : null}
              {formState.errors.email?.type == 'pattern' ? (
                <p
                  id='error-email'
                  className='error-type'
                >{`${formState.errors.email?.message}`}</p>
              ) : null}
            </fieldset>
            <fieldset>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                className={
                  formState.isSubmitted && !formState.errors?.password
                    ? 'succes'
                    : null
                }
                {...register('password', {
                  required: { value: true, message: '*' },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/,
                    message:
                      'Password must contain an uppercase, lowercase, special character and a number'
                  },
                  minLength: {
                    value: 7,
                    message: 'Password must contain at least 7 words'
                  }
                })}
              />
              {formState.errors.password?.type == 'required' ? (
                <p id='error-password-required' className='error-required'>
                  {formState.errors.password?.message}
                </p>
              ) : null}
              {formState.errors.password?.type == 'minLength' ? (
                <p id='error-password-required' className='error-type'>
                  {formState.errors.password?.message}
                </p>
              ) : null}
              {formState.errors.password?.type == 'pattern' && (
                <p id='error-password-pattern' className='error-type'>
                  {formState.errors.password?.message}
                </p>
              )}
            </fieldset>
            {console.log(formState.errors)}
            <>
              <fieldset className='flex-container'>
                <div className='flex-container'>
                  <label htmlFor='terms-box'>Accept Terms and Conditions</label>
                  <input
                    type='checkbox'
                    id='terms-box'
                    {...register('terms', {
                      required: {
                        value: true,
                        message: 'Terms and conditions need to be accepted'
                      }
                    })}
                  />
                </div>
                {formState.errors.terms ? (
                  <p>{formState.errors.terms.message}</p>
                ) : null}
              </fieldset>
            </>

            <button type='submit' disabled={!formState.isDirty ? true : false}>
              Sign up
            </button>
          </motion.form>
        </div>
      </article>
    </>
  )
}

export default App
