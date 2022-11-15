import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/operations/operations'; 
import { useDispatch } from 'react-redux';

export const ContactList = ({filtered}) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {filtered.map(({id, name, phone}) => (
        <li key={id}  className={css.item}>
          {name}: {phone}
          <button
            className={css.deleteBtn}
            type="button"
            onClick={()=>dispatch(deleteContact(id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};
