import React from 'react';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from 'redux/store';
import { fetchContacts } from 'redux/operations/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, items } = useSelector(state => state.myContacts);
  const filter = useSelector(state => state.filterTask);
  const inputFilter = e => {
    dispatch(filterValue(e.target.value));
  };

  const filterContacts = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter inputFilter={inputFilter} value={filter} />
      {isLoading && <h3>Loading...</h3>}
      {items && <ContactList filtered={filterContacts()} />}
    </div>
  );
};
