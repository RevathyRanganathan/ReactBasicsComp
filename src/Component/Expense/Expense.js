import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";

const Expense = () => {
  const expenseDetail = [
    { title: "Laundry", amount: 293, date: new Date(2003, 2, 4) },
    { title: "Insurance", amount: 294, date: new Date(2004, 3, 5) },
    { title: "Medical", amount: 295, date: new Date(2005, 4, 6) }
  ];
  return (
    <Card className="expense">
      {expenseDetail.map((expense) => (
        <ExpenseItem key="expense" expense={expense} />
      ))}
    </Card>
  );
};

export default Expense;
