import { useState, useEffect } from "react";

function LoanRequest() {
  const [formData, setFormData] = useState([]);

  const [loanType, setLoanType] = useState("");
  const [amount, setAmount] = useState("");
  const [period, setPeriod] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const handleLoanTypeChange = (event) => {
    setLoanType(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleMonthlyPaymentChange = (event) => {
    setMonthlyPayment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = {
      loanType: loanType,
      amount: amount,
      period: period,
      interestRate: interestRate,
      monthlyPayment: monthlyPayment,
    };
    setFormData([...formData, newFormData]);
    setLoanType("");
    setAmount("");
    setPeriod("");
    setInterestRate("");
    setMonthlyPayment("");

    console.log(newFormData);

    console.log(formData);
  };

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataKey"));
    if (data) {
      setFormData(data);
    }
  }, []);

  //   useEffect(() => {
  //     fetch("http://localhost:3000/api/loan-request", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Success:", data);
  //       });
  //   }, [formData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Loan Request Form</h1>
        <div>
          <label htmlFor="loanType">Loan Type:</label>
          <input
            type="text"
            id="loanType"
            name="loanType"
            value={loanType}
            onChange={handleLoanTypeChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Loan Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div>
          <label htmlFor="period">Loan Period (in months):</label>
          <input
            type="number"
            id="period"
            name="period"
            value={period}
            onChange={handlePeriodChange}
            required
          />
        </div>
        <div>
          <label htmlFor="interestRate">Interest Rate:</label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={interestRate}
            onChange={handleInterestRateChange}
            required
          />
        </div>
        <div>
          <label htmlFor="monthlyPayment">Monthly Payment:</label>
          <input
            type="number"
            id="monthlyPayment"
            name="monthlyPayment"
            value={monthlyPayment}
            onChange={handleMonthlyPaymentChange}
            required
          />
        </div>
        <div>
          <label htmlFor="monthlyPayment">Monthly Payment:</label>
          <input
            type="number"
            id="monthlyPayment"
            name="monthlyPayment"
            value={monthlyPayment}
            onChange={handleMonthlyPaymentChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Loan Type</th>
            <th>Amount</th>
            <th>Period</th>
            <th>Interest Rate</th>
            <th>Monthly Payment</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.loanType}</td>
              <td>{data.amount}</td>
              <td>{data.period}</td>
              <td>{data.interestRate}</td>
              <td>{data.monthlyPayment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoanRequest;
