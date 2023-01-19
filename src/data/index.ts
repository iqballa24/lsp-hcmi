import pdfdefault from '@/404.pdf';

import LogoLSP from '@/assets/img/vector/logo-lsp.svg';
import PictScheme from '@/assets/img/vector/card-skema.svg';

const data = {
  title: 'LSP HCMI',
  logo: LogoLSP,
  longTitle: 'Lembaga Sertifikasi Profesi Human Capital Management Indonesia',
  background: [
    {
      id: 1,
      text: 'Rencana Strategis Kementerian BUMN dalam persiapan Super Holding dan BUMN University yg membutuhkan kompetensi khusus.',
    },
    {
      id: 2,
      text: 'Belum memiliki kompetensi dengan standar global dengan pendekatan digitalisasi.',
    },
    {
      id: 3,
      text: 'Adanya gap kompetensi dan kemampuan para pengelola dibidang HC BUMN.',
    },
    {
      id: 4,
      text: 'Adanya tuntutan wajib sertifikasi bagi pejabat yang akan menduduki jabatan bidang SDM sesuai SE Menaker Nomor : 5 tahun 2019 yang menyatakan wajib memiliki sertifikasi bidang SDM bagi karyawan yang menduduki jabatan bidang SDM dan berlaku efektif bulan Juli 2021.',
    },
    {
      id: 5,
      text: 'LSP HCMI adalah LSP Pihak 3 yang akan melayani seluruh karyawan BUMN dan BUMD juga karyawan swasta atau siapa saja yang membutuhkan sertifikasi bidang SDM / Human Capital. ',
    },
  ],
  telp: '021-2119-3636',
  email: 'admin@lsphcmi.com',
  address: {
    text: 'Jl. Jatinegara Barat II Nomor 11 RT. 14 / RW. 02 Jatinegara, Balimeste, Jakarta Timur',
    map: 'https://maps.google.com/maps?q=Jl.%20Jatinegara%20Barat%20II%20Nomor%2011%20RT.%2014%20/%20RW.%2002%20Jatinegara,%20Balimester%20Jakarta%20Timur&t=&z=17&ie=UTF8&iwloc=&output=embed',
  },
  visi: 'Mewujudkan pengelolaan bidang Human Capital Management yang memenuhi standar kelas dunia dan terpeliharanya kompetensi Pengelola Sumber Daya Manusia yang unggul serta berdaya saing global.',
  misi: [
    {
      id: 1,
      text: 'Menyelenggarakan sertifikasi profesi bidang human capital management dalam rangka mendukung efektifitas proses bisnis HCM Indonesia.',
    },
    {
      id: 2,
      text: 'Memelihara kompetensi kerja di sector pengelola human capital yang unggul dan berdaya saing global.',
    },
    {
      id: 3,
      text: 'Mengembangkan system sertifikasi profesi human capital management berbasis digital.',
    },
    {
      id: 4,
      text: 'Mengembangkan dan memelihara skema-skema sertifikasi bidang Human Capital dlingkungan BUMN dengan profil kompetensi jabatan yang dipersyaratkan.',
    },
    {
      id: 5,
      text: 'Menyediakan tenaga assessor kompetensi yang professional, berkualifikasi dan bersertifikasi sesuai dengan ruang lingkup sertifikasi LSP HCMI.',
    },
    {
      id: 6,
      text: 'Menyiapkan Tempat Uji Kompetensi (TUK) yang terverifikasi sesuai dengan kebutuhan masing-masing skema Human Capital.',
    },
    {
      id: 7,
      text: 'Menyiapkan dukungan teknologi informasi dan sumber daya manusia.',
    },
  ],
  about: {
    desc: 'LSP HCMI adalah LSP Pihak 3 yang akan melayani seluruh karyawan BUMN dan BUMD juga karyawan swasta atau siapa saja yang membutuhkan sertifikasi bidang SDM / Human Capital',
    letters: [
      {
        id: 1,
        text: 'Akte Pendirian oleh Notaris Ratih Budiarti SH, sesuai Akta Nomor 4 tahun 2020.',
      },
      {
        id: 2,
        text: 'Pengesahan dari Kementerian Hukum dan Ham nomor : AHU-0006573.AH.01.04 Tahun 2020 tanggal 8 April 2020.',
      },
      {
        id: 3,
        text: 'Nomor Induk Berusaha nomor ; 0220106601103.',
      },
      {
        id: 4,
        text: 'NPWP : 94.810.105.0-036.000.',
      },
      {
        id: 5,
        text: 'Rekening Perusahaan : BRI 116701000254305 a.n LSP HCMI.',
      },
    ],
  },
  scheme: {
    description:
      'LSP HCMI mengacu pada skema sertifikasi berdasarkan paket kompetensi atau klaster. LSP HCMI memiliki 3 skema kompetensi yg mengacu pada SKKNI (SKKNI No.149 Tahun 2020, SKKNI No. 72 Tahun 2019) yaitu skema perencanaan human capital, skema pengembangan human capital, dan skema pengelolaan hubungan industrial.',
    list: [
      {
        id: 1,
        name: 'Skema Perencanaan Human Capital',
        desc: 'Skema Perencanaan Human Capital dengan menggunakan klaster kompetensi terdapat 5 unit kompetensi, sebagai berikut',
        units: [
          {
            id: 1,
            kode: 'M.70SDM01.001.2',
            title:
              'Merumuskan Strategi dan Kebijakan Manajemen Sumber Daya Manusia (MSDM)',
          },
          {
            id: 2,
            kode: 'M.70SDM01.002.2',
            title: 'Mengevaluasi Efektivitas Strategi dan Kebijakan MSDM',
          },
          {
            id: 3,
            kode: 'M.70SDM01.004.2',
            title: 'Merancang Desain Organisasi',
          },
          {
            id: 4,
            kode: 'M.70SDM01.010.2',
            title: 'Menyusun Uraian Jabatan',
          },
          {
            id: 5,
            kode: 'M.70SDM01.012.2',
            title: 'Menyusun Kebutuhan SDM',
          },
        ],
        pdf: pdfdefault,
      },
      {
        id: 2,
        name: 'Skema Pengembangan Human Capital',
        desc: 'Skema Pengembangan Human Capital dengan menggunakan klaster kompetensi terdapat 10 unit kompetensi, sebagai berikut',
        units: [
          {
            id: 1,
            kode: 'M.70SDM01.001.2',
            title:
              'Merumuskan Strategi dan Kebijakan Manajemen Sumber Daya Manusia (MSDM)',
          },
          {
            id: 2,
            kode: 'M.70SDM01.013.2',
            title: 'Menyusun Standar Operasional Prosedur (SOP) MSDM',
          },
          {
            id: 3,
            kode: 'M.70SDM01.003.2',
            title: 'Menetapkan Rencana Kegiatan dan Anggaran MSDM',
          },
          {
            id: 4,
            kode: 'M.70SDM01.031.2',
            title: 'Menyusun Kebutuhan Pembelajaran dan Pengembangan',
          },
          {
            id: 5,
            kode: 'M.70SDM01.032.2',
            title: 'Merancang Program Pembelajaran dan Pengembangan',
          },
          {
            id: 6,
            kode: 'M.70SDM01.034.2',
            title:
              'Mengevaluasi Pelaksanaan Program Pembelajaran dan Pengembangan',
          },
          {
            id: 7,
            kode: 'M.70SDM01.032.2',
            title: 'Menyusun Kelompok Pekerja Bertalenta (Talent Pool)',
          },
          {
            id: 8,
            kode: 'M.70SDM01.038.2',
            title:
              'Mengelola Program Pengembangan Kelompok Pekerja Bertalenta (Talent Pool)',
          },
          {
            id: 9,
            kode: 'M.701001.040.01',
            title: 'Mengelola Program Suksesi',
          },
          {
            id: 10,
            kode: 'M.70SDM01.002.2',
            title: 'Mengevaluasi Efektivitas Strategi dan Kebijakan MSDM',
          },
        ],
        pdf: pdfdefault,
      },
      {
        id: 3,
        name: 'Skema Pengelolaan Hubungan Industrial',
        desc: 'Skema Pengelolaan Hubungan Industrial dengan menggunakan klaster kompetensi terdapat 8 unit kompetensi, sebagai berikut',
        units: [
          {
            id: 1,
            kode: 'M.70SDM01.001.2',
            title:
              'Merumuskan Strategi dan Kebijakan Manajemen Sumber Daya Manusia (MSDM)',
          },
          {
            id: 2,
            kode: 'M.70SDM01.013.2',
            title: 'Menyusun Standar Operasional Prosedur (SOP) MSDM',
          },
          {
            id: 3,
            kode: 'M.70SDM01.003.2',
            title: 'Menetapkan Rencana Kegiatan dan Anggaran MSDM',
          },
          {
            id: 4,
            kode: 'M.70SDM01.031.2',
            title: 'Menyusun Kebutuhan Pembelajaran dan Pengembangan',
          },
          {
            id: 5,
            kode: 'M.70SDM01.032.2',
            title: 'Merancang Program Pembelajaran dan Pengembangan',
          },
          {
            id: 6,
            kode: 'M.70SDM01.034.2',
            title:
              'Mengevaluasi Pelaksanaan Program Pembelajaran dan Pengembangan',
          },
          {
            id: 7,
            kode: 'M.70SDM01.037.2',
            title: 'Menyusun Kelompok Pekerja Bertalenta (Talent Pool)',
          },
          {
            id: 8,
            kode: 'M.70SDM01.038.2',
            title:
              'Mengelola Program Pengembangan Kelompok Pekerja Bertalenta (Talent Pool)',
          },
        ],
        pdf: pdfdefault,
      },
    ],
    picture: PictScheme,
  },
  requirements: [
    {
      id: 1,
      text: 'Sertifikat yang Relevan / Surat atau Program Penghargaan / SK.Jabatan / Rekomendasi Pimpinan',
    },
    {
      id: 2,
      text: 'Curriculum vitae',
    },
    {
      id: 3,
      text: 'Ijazah',
    },
    {
      id: 4,
      text: 'Bukti hasil kerja : produk / dokumen yang pernah dibuat',
    },
    {
      id: 5,
      text: 'Pas foto 3x4 (4 lembar background merah)',
    },
    {
      id: 6,
      text: 'KTP',
    },
    {
      id: 7,
      text: 'Bahan presentasi sesuai dengan skema masing-masing',
    },
  ],
  legalBase: [
    {
      id: 1,
      text: 'UU No.3 th.2003 tentang ketenagakerjaan.',
    },
    {
      id: 2,
      text: 'PP RI no.23 th.2004 tentang BNSP.',
    },
    {
      id: 3,
      text: 'PP RI no.31 th.2006 tentang sistem pelatihan kerja nasional.',
    },
    {
      id: 4,
      text: 'Peraturan Presiden Republik Indonesia no.8 th.2012 tentang kerangka kualifikasi Nasional Indonesia.',
    },
    {
      id: 5,
      text: 'Peraturan Menteri Tenaga Kerja dan Transmigrasi Republik Indonesia no.5 th.2012 tentang Sistem Standarisasi Kompetensi Kerja Nasional.',
    },
  ],
};

export default data;
