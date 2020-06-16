/* FILTROS PARA DATOS EN COMPONENTES */

const cutBySize = (text, num) => {
  if (text.length < num) {
    return text;
  }
  return text.substr(0, num) + '...';
};

const formatOneDecimal = value => {
  return value.toFixed(1);
};

export { cutBySize, formatOneDecimal };
