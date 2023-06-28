import {filterContact} from "../../redux/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {getContacts, getFilter} from "../../redux/selectors";

function Filter() {

    const filterDispatch = useDispatch();
    const dataFilterSelector = useSelector(getFilter);
    const contacts = useSelector(getContacts);
    const handlerFilter = e => {
        filterDispatch(filterContact(e.target.value))
    };
    if(contacts.length < 2) return
    return (
        <input type="text" name="filter" value={dataFilterSelector} onChange={handlerFilter} />
    );
}

export default Filter;
