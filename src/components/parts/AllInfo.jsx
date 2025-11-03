// import React, { useEffect } from 'react';
// import { selectAllContacts } from 'redux/contacts/selectors';
// import { fetchContacts, deleteContact } from 'redux/contacts/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import sprite from '../../images/icons/arrow-up2.svg'
import css from './AllInfo.module.css';

const questions = [
   {
      userName: '@name 1',
      textQuest:
         'question 1 Lorem ipsum dolor sit amet consectetur, lirdfdddddddddddddddddddddddddddddddddddddddddddddddd adipisicing elit. Nam molestias amet culpa nobis quaerat aliquid, ipsa molestiae itaque qui tempore voluptas pariatur consectetur porro alias minima, optio illo ullam! Cum!',
   },
   { userName: '@name 2', textQuest: 'question 2' },
   { userName: '@name 3', textQuest: 'question 3' },
   { userName: '@name 4', textQuest: 'question 4' },
   {
      userName: '@name 1',
      textQuest:
         'question 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam molestias amet culpa nobis quaerat aliquid, ipsa molestiae itaque qui tempore voluptas pariatur consectetur porro alias minima, optio illo ullam! Cum!',
   },
   { userName: '@name 2', textQuest: 'question 2' },
   { userName: '@name 3', textQuest: 'question 3' },
   { userName: '@name 4', textQuest: 'question 4' },
   {
      userName: '@name 1',
      textQuest:
         'question 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam molestias amet culpa nobis quaerat aliquid, ipsa molestiae itaque qui tempore voluptas pariatur consectetur porro alias minima, optio illo ullam! Cum!',
   },
   { userName: '@name 2', textQuest: 'question 2' },
   { userName: '@name 3', textQuest: 'question 3' },
   { userName: '@name 4', textQuest: 'question 4' },
   {
      userName: '@name 1',
      textQuest:
         'question 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam molestias amet culpa nobis quaerat aliquid, ipsa molestiae itaque qui tempore voluptas pariatur consectetur porro alias minima, optio illo ullam! Cum!',
   },
   { userName: '@name 2', textQuest: 'question 2' },
   { userName: '@name 3', textQuest: 'question 3' },
   { userName: '@name 4', textQuest: 'question 4' },
];
const discussion = [
   {
      userName: '@name 1',
      textQuest:
         'question 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam molestias amet culpa nobis quaerat aliquid, ipsa molestiae itaque qui tempore voluptas pariatur consectetur porro alias minima, optio illo ullam! Cum!',
   },
   { userName: '@name 2', textQuest: 'question 2' },
   { userName: '@name 3', textQuest: 'question 3' },
   { userName: '@name 4', textQuest: 'question 4' },
   {
      userName: '@name 1',
      textQuest:
         'question 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam molestias amet culpa nobis quaerat aliquid, ipsa molestiae itaque qui tempore voluptas pariatur consectetur porro alias minima, optio illo ullam! Cum!',
   },
   { userName: '@name 2', textQuest: 'question 2' },
   { userName: '@name 3', textQuest: 'question 3' },
   { userName: '@name 4', textQuest: 'question 4' },
   {
      userName: '@name 1',
      textQuest:
         'question 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam molestias amet culpa nobis quaerat aliquid, ipsa molestiae itaque qui tempore voluptas pariatur consectetur porro alias minima, optio illo ullam! Cum!',
   },
   { userName: '@name 2', textQuest: 'question 2' },
   { userName: '@name 3', textQuest: 'question 3' },
   { userName: '@name 4', textQuest: 'question 4' },
   {
      userName: '@name 1',
      textQuest:
         'question 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam molestias amet culpa nobis quaerat aliquid, ipsa molestiae itaque qui tempore voluptas pariatur consectetur porro alias minima, optio illo ullam! Cum!',
   },
   { userName: '@name 2', textQuest: 'question 2' },
   { userName: '@name 3', textQuest: 'question 3' },
   { userName: '@name 4', textQuest: 'question 4' },
];

export const AllInfo = () => {
   // тут дві колони, на яких будуть колонка з питаннями, і колонка з чатом
   // const dispatch = useDispatch();
   // const contacts = useSelector(selectAllContacts);

   // useEffect(() => {
   //    dispatch(fetchContacts());
   // }, [dispatch]);

   // function changeFilter(e) {
   //    setFilter(e.currentTarget.value);
   // }

   // const normalizeFilter = filter.toLowerCase();

   // const visibleContacts =
   //    contacts && contacts.filter(contact => contact.name.toLowerCase());

   const search = e => {
      e.preventDefault();
      const form = e.currentTarget;
      console.log(form.elements.message.value);
   };
   return (
      <main>
         <div className={css.container}>
            <div className={css.container__info}>
               <div className={css.questions}>
                  <form className={css.questions__formfilter} onSubmit={search}>
                     <input
                        name="message"
                        className={css.questions__filter}
                        type="text"
                     />
                     <button className={css.questions__btn} type="submit">
                        {/* <svg className={css.questions__arrow}>
                        <use href={sprite}></use>
                        </svg> */}
                        q&q
                     </button>
                  </form>
                  <ul className={css.listQuestion}>
                     {questions.map((question, index) => (
                        <li className={css.question} key={index}>
                           <div className={css.discussionItem}>
                              <img
                                 className={css.ava}
                                 src="https://www.meme-arsenal.com/memes/c03e7347881e6b8350eab44c1a487ac8.jpg"
                                 alt="ava"
                              />
                              {question.userName}
                           </div>
                           {question.textQuest}
                        </li>
                     ))}
                  </ul>
               </div>
               {/* чат обсуждение */}
               <section className={css.discussionSection}>
                  <ul className={css.discussionList}>
                     {discussion.map((question, index) => (
                        <li className={css.discussion} key={index}>
                           <div className={css.discussionItem}>
                              <img
                                 className={css.ava}
                                 src="https://www.meme-arsenal.com/memes/c03e7347881e6b8350eab44c1a487ac8.jpg"
                                 alt="ava"
                              />
                              {question.userName}
                           </div>
                           {question.textQuest}
                        </li>
                     ))}
                  </ul>
                  <div className={css.sendMassage}>
                     <textarea name="message" cols="100" rows="5"></textarea>
                  </div>
               </section>
               {/* {visibleContacts &&
                  visibleContacts.map(({ id, name, number }) => {
                     return (
                        <li key={id}>
                           <p>
                              {name}: {number}{' '}
                           </p>
                           <button
                              type="submit"
                              N
                              onClick={e => {
                                 e.preventDefault();
                                 // dispatch(deleteContact(id));
                              }}
                           >
                              delete
                           </button>
                        </li>
                     );
                  })} */}
            </div>
            {/* <div className={css.container__chat}>
               <p className={css.txt}>filter</p>
               <input type="text" />
               <p className={css.txt}>chat</p>
               <ul>
                  {massages.map((massages, index) => (
                     <li className={css.txt} key={index}>
                        {massages.textMasage}
                     </li>
                  ))}
               </ul>
            </div> */}
         </div>
      </main>
   );
};
