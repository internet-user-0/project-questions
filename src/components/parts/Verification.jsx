import { NavLink } from 'react-router-dom';
import css from './Verification.module.css';

export const Verification = () => {
   // тут мають бути дві кнопки на весь екран, логінізація, і регістрація
   return (
      <div className={css.container__link}>
         <div className={css.box__link}>
            <NavLink className={css.link} to="/register">
               Register
            </NavLink>
         </div>
         <div className={css.box__link}>
            <NavLink className={css.link} to="/login">
               Login
            </NavLink>
         </div>
         <div className={css.box__link}>
            <NavLink className={css.link} to="/chat">
               logged in
            </NavLink>
         </div>
      </div>
   );
};
