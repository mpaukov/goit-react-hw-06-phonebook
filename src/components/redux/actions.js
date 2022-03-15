import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contact/change_filter');
const contactAdd = createAction('contact/add');
const contactDelete = createAction('contact/delete');

// eslint-disable-next-line import/no-anonymous-default-export
export default { changeFilter, contactAdd, contactDelete };
