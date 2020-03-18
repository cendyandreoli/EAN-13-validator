function gtimValidation(gtim) {
  let factor = 3;
  let sum = 0;

  if (gtim.length === 13) {
      for (let i = gtim.length; i > 0; --i) {
          if (i !== 13) {
              sum = sum + gtim.substring (i - 1, i) * factor;
              factor = 4 - factor;
          }
      }
      let cc = ((1000 - sum) % 10);
      let ca = parseInt(gtim.substring(12));

      if (cc === ca) alert("Código GTIM inválido!");
      else alert("Código GTIM inválido!");

  } else alert("Código GTIM inválido!")
};
