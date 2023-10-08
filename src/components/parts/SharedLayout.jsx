import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import css from './SharedLayout.module.css';

const isLoggedIn = true;
// const isLoggedIn = false;

export const SharedLayout = () => {
   return (
      <div>
         {isLoggedIn ? (
            <header className={css.header}>
               <div>
                  <nav className={css.header__nav}>
                     <ul className={css.header__list}>
                        <li className={css.header__list_item}>
                           <button
                              onClick={e => {
                                 console.log('click the 1 btn');
                              }}
                           >
                              icon 1
                           </button>
                        </li>
                        <li className={css.header__list_item}>
                           <button
                              onClick={e => {
                                 console.log('click the 2 btn');
                              }}
                           >
                              icon 2
                           </button>
                        </li>
                        <li className={css.header__list_item}>
                           <button
                              onClick={e => {
                                 console.log('click the 3 btn');
                              }}
                           >
                              icon 3
                           </button>
                        </li>
                     </ul>
                     <div>
                     <ul className={css.info__user}>
                        <li>face</li>
                        <li>name-email</li>
                     </ul>
                     <NavLink to="/">go back</NavLink>
                     </div>
                  </nav>
               </div>
            </header>
         ) : (
            <></>
         )}
         <div className={css.container}>
            <Suspense fallback={<div>Loading page...</div>}>
               <Outlet />
            </Suspense>
         </div>
      </div>
   );
};
