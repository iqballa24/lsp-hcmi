import React from 'react';
import { TableProps } from '@/types';

const Table: React.FC<TableProps> = ({ column, data }) => {
  let number = 1;

  return (
    <div className="table100 ver1 m-b-110">
      <div className="table100-head">
        <table className="table">
          <thead>
            <tr className="row100 head" tabIndex={0}>
              {column.map((col) => (
                <th
                  key={col.id}
                  className={`cell100 ${col.id === 1 ? 'column2' : 'column3'}`}
                  style={{ paddingLeft: col.id === 1 ? '40px' : '' }}
                >
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      <div className="table100-body js-pscroll">
        <table>
          <tbody>
            {data.map((item) => (
              <tr className="row100 body" key={item.id} tabIndex={0}>
                <td
                  className="cell100 column2"
                  style={{ paddingLeft: 40 + 'px' }}
                >
                  {number++}
                </td>
                <td className="cell100 column3">{item.kode}</td>
                <td className="cell100 column3">{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
