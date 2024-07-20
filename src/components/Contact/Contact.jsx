import css from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ contact, handleDelete }) => {
  const name = contact.name;
  const number = contact.number;
  const id = contact.id;
  return (
    <div className={css.contactList}>
      <div className={css.contact}>
        <p>
          <FontAwesomeIcon icon={faUser} className={css.icon} />
          {name}
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className={css.icon} />
          {number}
        </p>
      </div>
      <button type="button" className="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
