import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {addContact} from "../../redux/contatctsSlice";
import {getContacts} from "../../redux/selectors";


function ContactForm() {
    const contactDispatch = useDispatch();
    const contactSelector = useSelector(getContacts);
    const formSubmitHandler = e => {
        e.preventDefault();
        const dataForm = {
            name: e.target.elements.name.value,
            number: e.target.elements.number.value
        }
        if (checkUser(dataForm)) {
            return alert(dataForm.name + 'is already is contacts');
        }
        contactDispatch(addContact(dataForm));
        e.target.reset();
    };
    const checkUser = data => {
        return contactSelector.some(({ name }) => name === data.name);
    };
    return (
        <>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
                onSubmit={formSubmitHandler}
            >
                <label
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: 18,
                    }}
                >
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces.
                            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: 18,
                        marginTop: 20,
                    }}
                >
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button
                    type="submit"
                    style={{
                        marginTop: 20,
                    }}
                >
                    Add contact
                </button>
            </form>
        </>
    );
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};
