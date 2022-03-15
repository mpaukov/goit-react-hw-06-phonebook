import actions from 'components/redux/actions';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ContactItem } from './ContactItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const items = useSelector(state =>
    state.contacts.items
      .filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      })
      .sort((a, b) => a.name.localeCompare(b.name)),
  );
  return (
    <ul className={s.list}>
      {items.map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{ id, name, number }}
            key={id}
            onDelete={id => dispatch(actions.contactDelete(id))}
          />
        );
      })}
    </ul>
  );
};

ContactItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
