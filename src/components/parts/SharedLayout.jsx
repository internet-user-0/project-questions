import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import css from './SharedLayout.module.css';

const isLoggedIn = true;
// const isLoggedIn = false;

export const SharedLayout = () => {
   // це верхньє меню, з аватаркою, імям. Іконки, які змінюють блок з питаннями
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
                                 console.log('Q&A');
                              }}
                           >
                              Q&A
                           </button>
                        </li>
                        <li className={css.header__list_item}>
                           <button
                              onClick={e => {
                                 console.log('Chats');
                              }}
                           >
                              Chats
                           </button>
                        </li>
                        <li className={css.header__list_item}>
                           <button
                              onClick={e => {
                                 console.log('click the 3 btn');
                              }}
                           >
                              icon
                           </button>
                        </li>
                     </ul>
                     <div>
                        <ul className={css.info__user}>
                           <li className={css.user_name}>@gmail.com</li>
                           <li className={css.image_menu}>
                              <img
                              className={css.info_image}
                                 src="https://www.meme-arsenal.com/memes/c03e7347881e6b8350eab44c1a487ac8.jpg"
                                 alt="avatar"
                                 width={50}
                              />
                              <div className={css.menu}>
                              <NavLink to="/">go back</NavLink>
                              </div>
                           </li>
                        </ul>
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
