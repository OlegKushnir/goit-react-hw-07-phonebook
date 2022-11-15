import axios from 'axios';
axios.defaults.baseURL = 'https://63723fe107858778618eba8e.mockapi.io/';

export async function fetchContactsAPI() {
  try {
    const result = await axios.get('contacts');
    const contacts = result.data;
    if (contacts.length > 0) {
      return contacts;
    }
  } catch (er) {
    console.log(er.message);
    throw new Error();
  }
}

export async function addContactAPI(contact) {
  try {
    const response = await axios.post('contacts', contact);
    return response.data;
  } catch (er) {
    console.log(er.message);
    throw new Error();
  }
}
export async function deleteContactAPI(id) {
  try {
 await axios({
      method: 'DELETE',
      url: `contacts/${id}`,
    });

  } catch (er) {
    console.log(er.message);
    throw new Error();
  }
}
