import { default as entriesTypes } from 'actions/entries.actions';
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* addEntrySaga() {
  yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDB);
}

function* addEntryToDB({ payload }) {
  console.log('addEntryToDB', payload);
  yield call(addEntry, payload);
  yield call(addEntryDetails, payload);
  yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload });
}

async function addEntry({ id, description }) {
  await axios.post('http://localhost:3001/entries/', {
    id,
    description,
  });
}

async function addEntryDetails({ id, isExpense, value }) {
  await axios.post('http://localhost:3001/values/', {
    id,
    isExpense,
    value,
  });
}
