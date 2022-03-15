import actions from 'components/redux/actions';
import { getFilteredContacts } from 'components/redux/selectors';

import { useSelector, useDispatch } from 'react-redux';
import { ContactItem } from './ContactItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => {
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

export default ContactList;
