import css from './login_register.module.css'

export const Register = () => {
   return (<main>
      <h1 className={css.txt}>Register</h1>
      <form  >
         <label >
            <p >email</p>
            <input  type="email" name="email" />
         </label>
         <label >
            <p >password</p>
            <input
               
               type="password"
               name="password"
            />
         </label>
         <button  type="submit">
            submit
         </button>
      </form>
   </main>);
};
