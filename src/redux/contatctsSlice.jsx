import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.contacts.push(action.payload);
            },
            prepare: ({ name, number }) => {
                const id = nanoid();
                return { payload: { id, name, number } };
            },
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter(item => {
                return item.id !== action.payload;
            });
        },
    },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
