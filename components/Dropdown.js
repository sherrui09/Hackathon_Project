export default function Dropdown({ inputHandler }) {
  return (
    <select
      className="rounded-sm border-black border-2 p-2 grow cursor-pointer bg-transparent"
      defaultValue=""
      onChange={(e) => inputHandler(e.target.value)}
    >
      <option value="">Choose a company...</option>
      <option value="AXP">AXP - American Express Co</option>
      <option value="AMGN">AMGN - Amgen Inc</option>
      <option value="AAPL">AAPL - Apple Inc</option>
      <option value="BA">BA - Boing Co</option>
      <option value="CAT">CAT - Caterpillar Inc</option>
      <option value="CSCO">CSCO - Cisco Systems Inc</option>
      <option value="CVX">CVX - Chevron Corp</option>
      <option value="GS">GS - Goldman Sachs Group Inc</option>
      <option value="HD">HD - Home Depot Inc</option>
      <option value="HON">HON - Honeywell International Inc</option>
      <option value="IBM">IBM - International Business Machines Corp</option>
      <option value="INTC">INTC - Intel Corp</option>
      <option value="JNJ">JNJ - Johnson & Johnson</option>
      <option value="KO">KO - Coca-Cola Co</option>
      <option value="JPM">JPM - JPMorgan Chase & Co</option>
      <option value="MCD">MCD - McDonald's Corp</option>
      <option value="MMM">MMM - 3M Co</option>
      <option value="MRK">MRK - Merck & Co Inc</option>
      <option value="MSFT">MSFT - Microsoft Corp</option>
      <option value="NKE">NKE - Nike Inc</option>
      <option value="PG">PG - Procter & Gamble Co</option>
      <option value="TRV">TRV - Travelers Companies Inc</option>
      <option value="UNH">UNH - UnitedHealth Group Inc</option>
      <option value="VZ">VZ - Verizon Communications Inc</option>
      <option value="V">V - Visa Inc</option>
      <option value="WBA">WBA - Walgreens Boots Alliance Inc</option>
      <option value="WMT">WMT - Walmart Inc</option>
      <option value="DIS">DIS - Walt Disney Co</option>
      <option value="DOW">DOW = Dow Inc</option>
    </select>
  );
}
