import React, { useState } from 'react';

const acidsAndBases = {
  "Ácido acético": { density: 1.05, molecularWeight: 60.05, weightPercent: 100 },
  "Hidróxido de amonio": { density: 0.91, molecularWeight: 35.05, weightPercent: 28 },
  "Ácido fórmico": { density: 1.22, molecularWeight: 46.03, weightPercent: 100 },
  "Ácido clorhídrico": { density: 1.19, molecularWeight: 36.46, weightPercent: 37 },
  "Ácido fluorhídrico": { density: 1.15, molecularWeight: 20.01, weightPercent: 70 },
  "Ácido nítrico": { density: 1.41, molecularWeight: 63.01, weightPercent: 70 },
  "Ácido perclórico": { density: 1.67, molecularWeight: 100.46, weightPercent: 70 },
  "Ácido fosfórico": { density: 1.88, molecularWeight: 98.00, weightPercent: 85 },
  "Hidróxido de potasio": { density: 1.12, molecularWeight: 56.11, weightPercent: 45 },
  "Hidróxido sódico": { density: 1.13, molecularWeight: 40.00, weightPercent: 50 },
  "Ácido sulfúrico": { density: 1.84, molecularWeight: 98.08, weightPercent: 98 },
};

const Calculator = () => {
  const [selectedAcid, setSelectedAcid] = useState("");
  const [density, setDensity] = useState("");
  const [molecularWeight, setMolecularWeight] = useState("");
  const [weightPercent, setWeightPercent] = useState("");
  const [finalVolume, setFinalVolume] = useState("");
  const [concentration, setConcentration] = useState("Molaridad");
  const [instructions, setInstructions] = useState("");
  const [warning, setWarning] = useState("");

  const handleAcidChange = (event) => {
    const acid = event.target.value;
    setSelectedAcid(acid);
    if (acid) {
      const { density, molecularWeight, weightPercent } = acidsAndBases[acid];
      setDensity(density);
      setMolecularWeight(molecularWeight);
      setWeightPercent(weightPercent);
      setWarning("");
    } else {
      setDensity("");
      setMolecularWeight("");
      setWeightPercent("");
    }
  };

  const handleCalculate = () => {
    if (!selectedAcid || !finalVolume || !density || !molecularWeight || !weightPercent) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const volumeMother = (finalVolume * (concentration === "Molaridad" ? 1 : 2) * (weightPercent / 100) * density) / molecularWeight;
    const instructionsText = `Resultados basados en su selección:\n\nSu solución madre de ${selectedAcid} se calcula para ser ${concentration} en base a una densidad de ${density} g/mL, un peso de fórmula de ${molecularWeight} g/mol y una concentración de ${weightPercent}% p/p.\n\nPara hacer una solución de ${concentration}, agregue lentamente ${volumeMother.toFixed(2)} mL de su solución madre a ${finalVolume} mL de agua desionizada.\nAjuste el volumen final de la solución a ${finalVolume} mL con agua desionizada.`;
    
    setInstructions(instructionsText);
  };

  const handleReset = () => {
    setSelectedAcid("");
    setDensity("");
    setMolecularWeight("");
    setWeightPercent("");
    setFinalVolume("");
    setConcentration("Molaridad");
    setInstructions("");
    setWarning("");
  };

  const handleDensityChange = (event) => {
    setDensity(event.target.value);
    setWarning("Ha cambiado un valor predeterminado. Asegúrese de que los valores de densidad y porcentaje de peso que ha introducido son correctos. Diferentes porcentajes de peso tendrán diferentes densidades. Después de verificar que sus valores son correctos, haga clic en 'Calcular' nuevamente.");
  };

  const handleWeightPercentChange = (event) => {
    setWeightPercent(event.target.value);
    setWarning("Ha cambiado un valor predeterminado. Asegúrese de que los valores de densidad y porcentaje de peso que ha introducido son correctos. Diferentes porcentajes de peso tendrán diferentes densidades. Después de verificar que sus valores son correctos, haga clic en 'Calcular' nuevamente.");
  };

return (
  <div>
    <label>
      Seleccione un ácido o una base:
      <select value={selectedAcid} onChange={handleAcidChange}>
        <option value="">Escoger</option>
        {Object.keys(acidsAndBases).map((acid) => (
          <option key={acid} value={acid}>{acid}</option>
        ))}
      </select>
    </label>
    <label>
        Densidad (g/mL):
        <input type="number" value={density} onChange={handleDensityChange} />
    </label>
    <label>
        Peso molecular (g/mol):
        <input type="number" value={molecularWeight} readOnly />
    </label>
    <label>
        Porcentaje de peso (% p/p):
        <input type="number" value={weightPercent} onChange={handleWeightPercentChange} />
    </label>
    
    <label>
      Volumen final deseado (mL):
      <input type="number" value={finalVolume} onChange={(e) => setFinalVolume(e.target.value)} />
    </label>
    <label>
      Concentración deseada:
      <select value={concentration} onChange={(e) => setConcentration(e.target.value)}>
        <option value="Molaridad">Molaridad</option>
        <option value="Normalidad">Normalidad</option>
      </select>
    </label>
    {warning && <p style={{ color: 'red' }}>{warning}</p>}
    <button onClick={handleCalculate}>Calcular</button>
    <button onClick={handleReset}>Restablecer</button>
    {instructions && <div><h3>Instrucciones:</h3><pre>{instructions}</pre></div>}

  </div>
);

};

export default Calculator;