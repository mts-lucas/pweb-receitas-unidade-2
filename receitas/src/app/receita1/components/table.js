import React from 'react';

function MyTable() {
  return (
    <table className="border-collapse mytable" border="1">
      <thead className="bg-yellow-300">
        <tr>
          <th className="text-green-500 py-2 px-4 font-bold">Nome</th>
          <th className="text-green-500 py-2 px-4 font-bold">Marca</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-blue-100">
          <td className="text-blue-500 py-2 px-4">Nome1</td>
          <td className="text-blue-500 py-2 px-4">Marca1</td>
        </tr>
        <tr className="bg-blue-200">
          <td className="text-blue-500 py-2 px-4">Nome2</td>
          <td className="text-blue-500 py-2 px-4">Marca2</td>
        </tr>
      </tbody>
    </table>
  );
}

export default MyTable;
