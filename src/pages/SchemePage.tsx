import React from 'react';
import Hero from '@/components/Hero';
import SchemeContainer from '@/components/Scheme/SchemeContainer';

import data from '@/data';

const SchemePage = () => {
  const refContent = React.createRef();

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

  return (
    <React.Fragment>
      <Hero mRef={refContent} />
      {data.scheme.list.map((item) => (
        <SchemeContainer
          key={item.id}
          columnTable={column}
          dataTable={item.units}
          title={item.name}
          desc={item.desc}
          filePdf={item.pdf}
        />
      ))}
    </React.Fragment>
  );
};

export default SchemePage;
