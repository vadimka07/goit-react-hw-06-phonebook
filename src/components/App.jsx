import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101',
                padding: 200,
            }}
        >
            <Title title="Phonebook" />
            <ContactForm />
            <Title title="Contacts" />
            <Filter />
            <ContactList />
        </div>
    );
}

export default App;
