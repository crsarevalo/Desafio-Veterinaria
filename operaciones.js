const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log("Ingrese todos los datos");
    return;
  }

  citas.push({ nombre, edad, animal, color, enfermedad });
  fs.writeFileSync("citas.json", JSON.stringify(citas));
  console.log(registrar);
};

const leer = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(citas);
};

module.exports = { registrar, leer };
