import { useDispatch } from 'react-redux';
import css from './login_register.module.css';
import { register } from 'redux/auth/operations';

export const Register = () => {
   // форма з регістрацією
   const dispatch = useDispatch();

   const submit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      console.log(e.currentTarget.email.value,
         e.currentTarget.name.value,
         e.currentTarget.password.value)
      if (
         !e.currentTarget.email.value ||
         !e.currentTarget.name.value ||
         !e.currentTarget.password.value
      ) {
         return;
      }
      dispatch(
         register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
         })
      );
      form.reset();
   };
   return (
      <main>
         <h1 className={css.txt}>Register</h1>
         <form  onSubmit={submit}>
            <label >
               <p className={css.txt}>email</p>
               <input  type="email" name="email" />
            </label>
            <label >
               <p className={css.txt}>name</p>
               <input  type="text" name="name" />
            </label>
            <label >
               <p className={css.txt}>password</p>
               <input
                  
                  type="password"
                  name="password"
               />
            </label>
            <button  type="submit">
               submit
            </button>
         </form>
      </main>
   );
};
