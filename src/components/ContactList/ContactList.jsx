import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {getContacts, getFilter} from "../../redux/selectors";
import {removeContact} from "../../redux/contatctsSlice";

function ContactList() {
    const contacts = useSelector(getContacts);
    const dataFilterSelector = useSelector(getFilter);
    const dispatch = useDispatch();
    const filterData = () => {
        const filterNormalized = dataFilterSelector.toLowerCase();
        return contacts.filter(item =>
            item.name.toLowerCase().includes(filterNormalized)
        );
    };
    const deleteContact = id => {
        dispatch(removeContact(id));
    };
    if (!contacts.length) return
    return(
        <ul>
            { filterData().map( ( { id, name, number } ) => {
                return (
                    <li key={ id } style = {{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems: "center",
                        fontSize: 25
                    }}>
                        { name }: { number }
                        <button onClick={ () => deleteContact( id ) } style={{
                            marginLeft: 15
                        }}>delete</button>
                    </li>
                );
            } ) }
        </ul>
    )

}

export default ContactList;

ContactList.propTypes = {
    listItems:PropTypes.array,
    onDelete:PropTypes.func
}
