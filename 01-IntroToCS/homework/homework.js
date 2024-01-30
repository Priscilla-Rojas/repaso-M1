function BinarioADecimal(num) {
   let sum= 0;

   // Op 1. Manejamos el numeor como un array

   // let arrayBinary= num.split('').reverse();
   // arrayBinary.forEach((element, index) => {
   //  sum += element * Math.pow(2, index);
   // });

   //Op 2. Manejamos el numeor como un array
   let arrayBinary= num.split('');
   let position= 0;
   for(let i = arrayBinary.length - 1; i >= 0; i--){
      sum += arrayBinary[i] * Math.pow(2, position) ;
      position++;
   }

   // Op 3. Opcion 2 manejamos el numero como un String
   // for (let i = 0; i < num.length; i++) {
   //    sum += Math.pow(2, num.length - (i + 1))*num[i]
   // }

   return sum;
}

function DecimalABinario(num) {
   let result = num;
   let binary= [];

   // Op 1
   // while (result > 0) {
   //    binary.push(result % 2);
   //    result = Math.floor(result / 2);
   // }
   // return binary.reverse().join('')

   // Op 2
   while (result > 0) {
      binary.unshift(result % 2);
      result = Math.floor(result / 2);
   }
   return binary.join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
