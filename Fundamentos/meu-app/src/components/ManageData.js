import { useState } from "react";

const ManageData = () => {
  
  const [someData, setSomeData] = useState(10);
  const [Number, setNumber] = useState(0);
  
  
  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => setSomeData(15)}>Mudar variável</button>

      <p>Valor: {Number}</p>
      <button onClick={() => setNumber(2022)}>Mudar estado</button>
      
    </div>

    
      


  );
};

export default ManageData;
