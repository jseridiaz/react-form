import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { handleSubmit, register, formState, watch } = useForm({
    defaultvalues: { username: '', email: '', password: '' }
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
          />
        </div>
        <div id='form-div-container'>
          <form id='form-register' onSubmit={handleSubmit(onSubmit)}>
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
                {...register('email', {
                  required: { value: true, message: '*' },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:
                      "The email must contain a @ followed by a valid extension '.com/.net/...' "
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
                <p id='error-email className="error-type"'>{`${formState.errors.email?.message}`}</p>
              ) : null}
            </fieldset>
            <fieldset>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                {...register('password', {
                  required: { value: true, message: '*' },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/,
                    message:
                      'The password must contain an uppercase, lowercase word, a special character [@$!%*?&] and a number'
                  },
                  minLength: {
                    value: 7,
                    message: 'the password must contain at least 7 words'
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
            <fieldset>
              {formState.isValid && (
                <input
                  {...register('terms', {
                    required: { value: true, message: '*' }
                  })}
                  className='input-terms-privacity'
                  type='checkbox'
                />
              )}
            </fieldset>
            <button type='submit' disabled={!formState.isDirty ? true : false}>
              Sign up
            </button>
          </form>
        </div>
      </article>
    </>
  )
}

export default App
