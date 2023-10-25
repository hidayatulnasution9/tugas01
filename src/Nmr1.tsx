// // Jawaban Nomor 1
// import React, { useEffect, useState } from 'react';

// const  nmr1: React.FC = () => {
//   const jumlahPerulangan = 10;
//   const jumlahKelipatan = 100;
//   const [output, setOutput] = useState<string[]>([]);

//   useEffect(() => {
//     const generateOutput = () => {
//       let result: string[] = [];
//       for (let i = 1; i <= jumlahKelipatan; i++) {
//         let bilangan: number[] = [];
//         let jumlah: number = 0;

//         result.push(`Perulangan ${jumlahPerulangan} ke-${i}:`);

//         for (let j = 1; j <= jumlahPerulangan; j++) {
//           const nilai = (i - 1) * jumlahPerulangan + j;
//           bilangan.push(nilai);

//           if (i % 2 === 0) {
//             // Menampilkan nilai genap
//             if (nilai % 2 === 0) {
//               result.push(`${nilai}`);
//               jumlah += nilai;
//             }
//           } else {
//             // Menampilkan nilai ganjil
//             if (nilai % 2 === 1) {
//               result.push(`${nilai}`);
//               jumlah += nilai;
//             }
//           }
//         }
       
//         result.push('--------------------------');
//         result.push(`Jumlah: ${jumlah}`);
//       }
//       setOutput(result);
//     };

//     generateOutput();
//   }, []);

//   return (
//     <div className="App">
//       {output.map((line, index) => (
//         <pre key={index}>{line}</pre>
//       ))}
//     </div>
//   );
// }

// export default nmr1;


import React, { useEffect, useState } from 'react';

const Nmr1: React.FC = () => {
  const jumlahPerulangan = 10;
  const jumlahKelipatan = 100;
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    const generateOutput = () => {
      let result: string[] = [];
      for (let i = 1; i <= jumlahKelipatan; i++) {
        let bilangan: number[] = [];
        let jumlah: number = 0;

        result.push(`Perulangan ${jumlahPerulangan} ke-${i}:`);

        for (let j = 1; j <= jumlahPerulangan; j++) {
          const nilai = (i - 1) * jumlahPerulangan + j;
          bilangan.push(nilai);

          if (i % 2 === 0) {
            // Menampilkan nilai genap
            if (nilai % 2 === 0) {
              result.push(`${nilai}`);
              jumlah += nilai;
            }
          } else {
            // Menampilkan nilai ganjil
            if (nilai % 2 === 1) {
              result.push(`${nilai}`);
              jumlah += nilai;
            }
          }
        }
       
        result.push('--------------------------');
        result.push(`Jumlah: ${jumlah}`);
      }
      setOutput(result);
    };

    generateOutput();
  }, []);

  return (
    <div className="App">
      <h1>Jawaban Nomor 1</h1>
      {output.map((line, index) => (
        <pre key={index}>{line}</pre>
      ))}
    </div>
  );
}

export default Nmr1;
