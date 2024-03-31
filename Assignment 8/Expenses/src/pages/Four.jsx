import {useState} from 'react'
import ExpenseDetails from '../components/ExpenseDetails';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseOverview from '../components/ExpenseOverview';


export default function Four() {
  const [expenses,setExpenses] = useState([]);
  function addExpense(newExpense){
    setExpenses([newExpense,...expenses])
  }

  function removeExpense(eid){
    let  updatedExpenses= expenses.filter((ex)=> ex.id !== eid)
    setExpenses(updatedExpenses)
  }

  return (
    <div className='row'>
      <div className="col-md-6 mx-auto">
        <h1 className="text-center text-primary display-5">Expense Traker</h1>
        <ExpenseOverview expenses = {expenses}/>
        <ExpenseForm addExpense = {addExpense}/>
        <ExpenseDetails expenses = {expenses} removeExpense = {removeExpense} />

      </div>
      
    </div>
  )
}
