// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import css from './login_register.module.css';

export const Login = () => {
   // форма з логінізацією

   // const dispatch = useDispatch();

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

      // dispatch( // відправка на сервер
      //    logIn({
      //       email: form.elements.email.value,
      //       password: form.elements.password.value,
      //    })
      // );
      form.reset();
   };

   return (
      <main>
         <main>
            <section className={css.section}>
               <div className={css.container_auth}>
                  <h1 className={css.txt}>Login</h1>
                  <form className={css.form} onSubmit={submit}>
                     <label>
                        <p className={css.txt}>email</p>
                        <input type="email" name="email" />
                     </label>
                     <label>
                        <p className={css.txt}>password</p>
                        <input type="password" name="password" />
                     </label>
                     <button className={css.btn_submit} type="submit">
                        submit
                     </button>
                  </form>
               </div>
            </section>
         </main>
      </main>
   );
};
