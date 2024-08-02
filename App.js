import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  function addExpenseHandler(expense) {
    console.log('In App.js');
    console.log(expense); // This should log the new expense
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> {/* Fixed prop name */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;