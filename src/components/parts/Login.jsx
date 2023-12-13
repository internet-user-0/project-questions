import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './login_register.module.css';

export const Login = () => {
   // форма з логінізацією

   const dispatch = useDispatch();

   const submit = e => {
      e.preventDefault();
      const form = e.currentTarget;

      if (!e.currentTarget.email.value || !e.currentTarget.password.value) {
         return;
      }

      console.log({
         email: form.elements.email.value,
         password: form.elements.password.value,
      });

      dispatch(
         logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
         })
      );
      // form.reset();
   };

   return (
      <main>
         <h1 className={css.txt}>Login</h1>
         <form onSubmit={submit}>
            <label>
               <p>email</p>
               <input type="email" name="email" />
            </label>
            <label>
               <p>password</p>
               <input type="password" name="password" />
            </label>
            <button type="submit">submit</button>
         </form>
      </main>
   );
};
