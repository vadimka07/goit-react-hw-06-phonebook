export const  getContacts =  (state) =>  {
    const {contacts:{contacts}} = state;
    return contacts;
}
export const  getFilter =  (state) =>  {
    const {filter:{filter}} = state;
    return filter;
}

