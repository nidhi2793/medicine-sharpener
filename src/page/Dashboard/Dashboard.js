import React, { useState } from "react";
import { MedicineData } from "../../data/MedicineData";
import Add from "./Add";
import List from "./List";
import Header from "./Header";

const Dashboard = () => {
  const [medicines, setMedicines] = useState(MedicineData);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      {!isAdding && <Header setIsAdding={setIsAdding} />}
      {!isAdding && <List medicines={medicines} />}
      {isAdding && (
        <Add
          medicines={medicines}
          setMedicines={setMedicines}
          setIsAdding={setIsAdding}
        />
      )}
    </div>
  );
};

export default Dashboard;
