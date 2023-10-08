import css from './AllInfo.module.css';

export const AllInfo = () => {
   return (
      <main>
         <div className={css.container}>
            <div className={css.container__info}>
               <p className={css.txt}>info</p>
            </div>
            <div className={css.container__chat}>
               <p className={css.txt}>chat</p>
            </div>
         </div>
      </main>
   );
};
