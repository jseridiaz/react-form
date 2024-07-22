import { useForm } from 'react-hook-form'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitted, isDirty }
  } = useForm({
    defaultvalues: { username: '', email: '', password: '', terms: false }
  })

  const onSubmit = (e) => {
    console.log(e)
  }

  return (
    <>
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
                draggable={false}
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
                className={isSubmitted && !errors?.username && 'succes'}
                type='text'
                {...register('username', {
                  required: { value: true, message: '*' }
                })}
              />
              {errors.username?.type == 'required' ? (
                <p id='error-username' className='error-required'>
                  {errors.username?.message}
                </p>
              ) : null}
            </fieldset>
            <fieldset>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                className={isSubmitted && !errors?.email && 'succes'}
                {...register('email', {
                  required: { value: true, message: '*' },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Introduce a valid email'
                  }
                })}
              />
              {errors.email?.type == 'required' ? (
                <p
                  id='error-email'
                  className='error-required'
                >{`${errors.email?.message}`}</p>
              ) : null}
              {errors.email?.type == 'pattern' ? (
                <p
                  id='error-email'
                  className='error-type'
                >{`${errors.email?.message}`}</p>
              ) : null}
            </fieldset>
            <fieldset>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                className={isSubmitted && !errors?.password && 'succes'}
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
              {errors.password?.type == 'required' ? (
                <p id='error-password-required' className='error-required'>
                  {errors.password?.message}
                </p>
              ) : null}
              {errors.password?.type == 'minLength' ? (
                <p id='error-password-required' className='error-type'>
                  {errors.password?.message}
                </p>
              ) : null}
              {errors.password?.type == 'pattern' && (
                <p id='error-password-pattern' className='error-type'>
                  {errors.password?.message}
                </p>
              )}
            </fieldset>

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
                {errors.terms ? <p>{errors.terms.message}</p> : null}
              </fieldset>
            </>

            <button type='submit' disabled={!isDirty ? true : false}>
              Sign up
            </button>
          </motion.form>
        </div>
      </article>
    </>
  )
}

export default App
