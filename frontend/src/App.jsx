import './App.css';
import Navbar from './components/navbar/Navbar';
import { AddExpense } from './components/AddExpense';
import { ListExpense } from './components/ListExpense';
import { EditExpense } from './components/editExpense';
import { ExpenseDetails } from './components/ExpenseDetails';
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/createExpense" component={AddExpense}></Route>
          <Route exact path="/editItem" component={ListExpense}></Route>
          <Route exact path="/listExpenses" component={EditExpense}></Route>
          <Route exact path="/itemDetails" component={ExpenseDetails}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
