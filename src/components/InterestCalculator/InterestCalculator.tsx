import { useState } from "react";

export const InterestCalculator = () => {
  const [initialDeposit, setInitialDeposit] = useState<number>(0); // Deposito Inicial
  const [annualContribution, setAnnualContribution] = useState<number>(0); // Contribucion anual
  const [years, setYears] = useState<number>(0); // Años para pago
  const [interestRate, setInterestRate] = useState<number>(0); // Tasa de interes
  const [result, setResult] = useState<number | null>(null); // Resultado final

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevenir la recarga
  };

  const calculateInterest = () => {
    const rate = interestRate / 100; // Tasa de interes
    let balance = initialDeposit; // Inicializa el valor futuro con el depósito inicial

    for (let year = 1; year <= years; year++) {
      balance += annualContribution; // Agrega la contribución anual al valor futuro
      balance *= 1 + rate; // Calcula el interés para el año actual y agrégalo al valor futuro
    }

    setResult(balance);
  };

  return (
    <div className="container grey darken-4 z-depth-3">
      <h3>Calculadora de interes</h3>
      <form className="col s12 container" onSubmit={handleSubmit}>
        <div className="row">
          {/* Deposito Inicial */}
          <div className="input-field col s6">
            <input
              id="initialDeposit"
              type="number"
              name="initialDeposit"
              onChange={(e) => setInitialDeposit(parseFloat(e.target.value))}
            />
            <label htmlFor="initialDeposit">
              Deposito Inicial
            </label>
          </div>
          {/* Contribucion anual */}
          <div className="input-field col s6">
            <input
              id="annualContribution"
              type="number"
              name="annualContribution"
              onChange={(e) =>
                setAnnualContribution(parseFloat(e.target.value))
              }
            />
            <label htmlFor="annualContribution">
              Contribución anual
            </label>
          </div>
          {/* Años para el pago */}
          <div className="input-field col s6">
            <input
              id="years"
              type="number"
              name="year"
              onChange={(e) => setYears(parseFloat(e.target.value))}
            />
            <label htmlFor="years">
              Años
            </label>
          </div>
          {/* Intereses Estimados (%) */}
          <div className="input-field col s6">
            <input
              id="interestRatet"
              type="number"
              name="interestRate"
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            />
            <label htmlFor="interestRate">
              Intereses Estimados (%)
            </label>
          </div>
        </div>
        {/* Boton calcular interes */}
        <div>
          <button
            type="submit"
            onClick={calculateInterest}
            className="waves-effect waves-light btn"
          >
            Calcular
          </button>
        </div>
      </form>
      {/* Resultado final */}
      {result !== null && (
        <div>
          <h5> Balance Final </h5>
          <p>{result.toFixed(2)}</p>
        </div>
      )}

    </div>
  );
};
