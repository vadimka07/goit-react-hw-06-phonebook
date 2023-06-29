import {filterContact} from "../../redux/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {getFilter} from "../../redux/selectors";

function Filter() {

    const filterDispatch = useDispatch();
    const dataFilterSelector = useSelector(getFilter);
    const handlerFilter = e => {
        filterDispatch(filterContact(e.target.value))
    };

    return (
        <input type="text" name="filter" value={dataFilterSelector} onChange={handlerFilter} />
    );
}

export default Filter;
