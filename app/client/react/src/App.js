import DisplayBalance from 'components/DisplayBalance';
import DisplayBalances from 'components/DisplayBalances';
import EntryLines from 'components/EntryLines';
import MainHeader from 'components/MainHeader';
import NewEntryForm from 'components/NewEntryForm';
import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';

const initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: '$1000,00',
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water bill',
    value: '$20',
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: '$300',
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power bill',
    value: '$50',
    isExpense: true,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance
        title="Your Balance"
        value="2,550.53"
        color="green"
        size="small"
      />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry}/>
      <MainHeader title="Add a new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;