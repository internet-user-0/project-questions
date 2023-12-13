import React, { useEffect, useState } from 'react';
import { selectAllContacts } from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import css from './AllInfo.module.css';

const questions = [
   { textQuest: 'мой вопрос таков 1' },
   { textQuest: 'мой вопрос таков 2' },
   { textQuest: 'мой вопрос таков 3' },
   { textQuest: 'мой вопрос таков 4' },
];
const massages = [
   { textMasage: 'сообщение 1' },
   { textMasage: 'сообщение 2' },
   { textMasage: 'сообщение 3' },
   { textMasage: 'сообщение 4' },
   { textMasage: 'сообщение 4' },
   { textMasage: 'сообщение 4' },
   { textMasage: 'сообщение 4' },
];

export const AllInfo = () => {
   // тут дві колони, на яких будуть колонка з питаннями, і колонка з чатом
   const dispatch = useDispatch();
   const contacts = useSelector(selectAllContacts);

   useEffect(() => {
      dispatch(fetchContacts());
   }, [dispatch]);

   // function changeFilter(e) {
   //    setFilter(e.currentTarget.value);
   // }

   // const normalizeFilter = filter.toLowerCase();

   const visibleContacts =
      contacts &&
      contacts.filter(contact =>
         contact.name.toLowerCase()
      );

   return (
      <main>
         <div className={css.container}>
            <div className={css.container__info}>
               <p className={css.txt}>filter</p>
               <input type="text" />
               <p className={css.txt}>info</p>
               <ul>
                  {questions.map((question, index) => (
                     <li className={css.txt} key={index}>
                        {question.textQuest}
                     </li>
                  ))}
               </ul>
               {visibleContacts &&
               visibleContacts.map(({ id, name, number }) => {
                  return (
                     <li  key={id}>
                        <p>{name}: {number}{' '}</p>
                        <button
                           type="submit"N
                           onClick={e => {
                              e.preventDefault();
                              dispatch(deleteContact(id));
                           }}
                        >
                           delete
                        </button>
                     </li>
                  );
               })}
            </div>
            <div className={css.container__chat}>
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
            </div>
         </div>
      </main>
   );
};
