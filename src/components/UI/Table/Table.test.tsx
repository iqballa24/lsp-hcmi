/**
 * skenario testing
 *
 * - table component
 *  - should render table component correctly
 *
 */

import React from 'react';
import Table from '@/components/UI/Table';
import { render, screen } from '@testing-library/react';

const column = [
  {
    id: 1,
    title: 'No',
  },
  {
    id: 2,
    title: 'Kode Unit Kompetensi',
  },
  {
    id: 3,
    title: 'Judul Unit Kompetensi',
  },
];

const data = [
  {
    id: 1,
    kode: 'M.70SDM01.001.2',
    title:
      'Merumuskan Strategi dan Kebijakan Manajemen Sumber Daya Manusia (MSDM)',
  },
];

describe('table component', () => {
  it('should render table component correctly', () => {
    render(<Table column={column} data={data} />);

    const columnId = screen.getByText('1');
    const columnTitle = screen.getByText('Kode Unit Kompetensi');
    const dataKode = screen.getByText('M.70SDM01.001.2')
    const dataTitle = screen.getByText('Merumuskan Strategi dan Kebijakan Manajemen Sumber Daya Manusia (MSDM)')

    expect(columnId).toBeInTheDocument();
    expect(columnTitle).toBeInTheDocument();
    expect(dataKode).toBeInTheDocument();
    expect(dataTitle).toBeInTheDocument();
  });
});
