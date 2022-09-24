import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AddExpense from './components/AddExpense';
import ListExpense from './components/ListExpense';
import EditExpense from './components/editExpense';
import ExpenseDetails from './components/ExpenseDetails';
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
          <Route path="/" element={<Home />}></Route>
          <Route path="/createExpense" element={<AddExpense />}></Route>
          <Route path="/listExpenses" element={<ListExpense />}></Route>
          <Route path="/editItem" element={<EditExpense />}></Route>
          <Route path="/itemDetails" element={<ExpenseDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
