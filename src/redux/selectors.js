import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);
