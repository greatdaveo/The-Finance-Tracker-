// import "./Home.css";
import TransactionForm from "./TransactionForm";

export default function Home() {
  return (
    <div className="container">
      <div className="content">Transaction list</div>
      <div className="side-bar">
        <TransactionForm />
      </div>
    </div>
  );
}
