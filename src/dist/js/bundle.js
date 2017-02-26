var CONFIG, regions;

regions = [
  {
    id: 'br',
    link: 'amordoce.com',
    name: 'Brazil'
  }, {
    id: 'us',
    link: 'mycandylove.com',
    name: 'USA'
  }, {
    id: 'de',
    link: 'sweetamoris.de',
    name: 'Germany'
  }, {
    id: 'es',
    link: 'corazondemelon.es',
    name: 'Spain'
  }, {
    id: 'fi',
    link: 'flirttistoori.com',
    name: 'Finland'
  }, {
    id: 'fr',
    link: 'amoursucre.com',
    name: 'France'
  }, {
    id: 'hu',
    link: 'csabitasboljeles.hu',
    name: 'Hungary'
  }, {
    id: 'it',
    link: 'dolceflirt.it',
    name: 'Italy'
  }, {
    id: 'mx',
    link: 'corazondebombon.com',
    name: 'Mexico'
  }, {
    id: 'pl',
    link: 'slodkiflirt.pl',
    name: 'Poland'
  }, {
    id: 'ro',
    link: 'sweetflirt.ro',
    name: 'Romania'
  }, {
    id: 'ru',
    link: 'sladkiiflirt.ru',
    name: 'Russia'
  }, {
    id: 'tr',
    link: 'askito-m.com',
    name: 'Turkey'
  }, {
    id: 'uk',
    link: 'sweetcrush.co.uk',
    name: 'United Kingdom'
  }
];

CONFIG = {
  version: '1.1.2',
  default_lang: 'pt',
  lang: this.default_lang,
  default_region: '0',
  region: this.default_region,
  player: {
    username: '',
    id: null,
    info: null,
    avatar: null
  },
  default_actor: 'Nathaniel'
};

var ASSETS;

ASSETS = {
  'emotions': [
    {
      'name': 'Agatha',
      'variations': [
        {
          'name': 'Normal',
          'id': '9',
          'checksum': '3079f94c4e567843'
        }
      ]
    }, {
      'name': 'Alexy',
      'variations': [
        {
          'name': 'Normal',
          'id': '123',
          'checksum': ''
        }, {
          'name': 'Sério',
          'id': '125',
          'checksum': ''
        }, {
          'name': 'Sorrindo #1',
          'id': '124',
          'checksum': ''
        }, {
          'name': 'Sorrindo #2',
          'id': '605',
          'checksum': ''
        }, {
          'name': 'Corado',
          'id': '409',
          'checksum': ''
        }, {
          'name': 'Enjoado',
          'id': '440',
          'checksum': ''
        }, {
          'name': 'Novo Traço: Corado',
          'id': '844',
          'checksum': ''
        }, {
          'name': 'Novo Traço: Enjoado',
          'id': '842',
          'checksum': ''
        }, {
          'name': 'Novo Traço: Normal',
          'id': '840',
          'checksum': ''
        }, {
          'name': 'Novo Traço: Preocupado',
          'id': '864',
          'checksum': ''
        }, {
          'name': 'Novo Traço: Sério',
          'id': '843',
          'checksum': ''
        }, {
          'name': 'Novo Traço: Sorrindo',
          'id': '845',
          'checksum': ''
        }, {
          'name': 'Novo Traço: Sorrindo-Corado',
          'id': '841',
          'checksum': ''
        }, {
          'name': 'Novo Traço: Triste',
          'id': '846',
          'checksum': ''
        }, {
          'name': 'Traje de ciências: Corado',
          'id': '455',
          'checksum': ''
        }, {
          'name': 'Traje de ciências: Enjoado',
          'id': '456',
          'checksum': ''
        }, {
          'name': 'Traje de ciências: Normal',
          'id': '453',
          'checksum': ''
        }, {
          'name': 'Traje de ciências: Sério',
          'id': '454',
          'checksum': ''
        }, {
          'name': 'Traje de ciências: Sorrindo',
          'id': '452',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Ambre',
      'variations': [
        {
          'name': 'Normal',
          'id': '36',
          'checksum': '83686cd7148d751c'
        }, {
          'name': 'Zangada',
          'id': '37',
          'checksum': ''
        }, {
          'name': 'Cabelo Cortado: Normal',
          'id': '585',
          'checksum': ''
        }, {
          'name': 'Cabelo Cortado: Triste',
          'id': '587',
          'checksum': ''
        }, {
          'name': 'Cabelo Cortado: Zangada',
          'id': '586',
          'checksum': ''
        }, {
          'name': 'Cabelo Pintado',
          'id': '361',
          'checksum': ''
        }, {
          'name': 'Corada',
          'id': '438',
          'checksum': ''
        }, {
          'name': 'Flor',
          'id': '328',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Assustada',
          'id': '609',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Incomodada A',
          'id': '615',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Incomodada B',
          'id': '616',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Incomodada C',
          'id': '617',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Normal A',
          'id': '613',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Normal B',
          'id': '610',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Olhos Fechados',
          'id': '608',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Sorrindo A',
          'id': '594',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Sorrindo B',
          'id': '607',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Sorrindo C',
          'id': '611',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Sorrindo Corada',
          'id': '612',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Surpresa',
          'id': '614',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Triste',
          'id': '592',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Zangada A',
          'id': '593',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Zangada B',
          'id': '595',
          'checksum': ''
        }, {
          'name': 'Pijama: Normal',
          'id': '421',
          'checksum': ''
        }, {
          'name': 'Pijama: Zangada',
          'id': '422',
          'checksum': ''
        }, {
          'name': 'Praia: Empolada',
          'id': '106',
          'checksum': ''
        }, {
          'name': 'Praia: Normal',
          'id': '104',
          'checksum': ''
        }, {
          'name': 'Praia: Triste',
          'id': '107',
          'checksum': ''
        }, {
          'name': 'Praia: Zangada',
          'id': '105',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Corada',
          'id': '458',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '457',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Triste',
          'id': '460',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Zangada',
          'id': '459',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Normal',
          'id': '688',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '400',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Ambre e amigas',
      'variations': [
        {
          'name': 'Normal',
          'id': '16',
          'checksum': ''
        }, {
          'name': 'Traje esportivo',
          'id': '144',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Armin',
      'variations': [
        {
          'name': 'Zangado A',
          'id': '128',
          'checksum': ''
        }, {
          'name': 'Zangado B',
          'id': '129',
          'checksum': ''
        }, {
          'name': 'Zangado C',
          'id': '130',
          'checksum': ''
        }, {
          'name': 'Corado',
          'id': '236',
          'checksum': ''
        }, {
          'name': 'Normal',
          'id': '126',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '127',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Efeitos',
      'variations': [
        {
          'name': 'Bing!',
          'id': '867',
          'checksum': ''
        }, {
          'name': 'Blam',
          'id': '50',
          'checksum': ''
        }, {
          'name': 'Braouuumm!!',
          'id': '544',
          'checksum': ''
        }, {
          'name': 'Vrrrrrrr',
          'id': '869',
          'checksum': ''
        }, {
          'name': 'WTF?!',
          'id': '262',
          'checksum': ''
        }, {
          'name': 'Schpaf!',
          'id': '684',
          'checksum': ''
        }, {
          'name': 'Tchick!',
          'id': '648',
          'checksum': ''
        }, {
          'name': 'Ding Dong',
          'id': '866',
          'checksum': ''
        }, {
          'name': 'Driiiiiiing',
          'id': '868',
          'checksum': ''
        }, {
          'name': 'Mwahaha!',
          'id': '45',
          'checksum': ''
        }, {
          'name': 'Letra F',
          'id': '110',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Morcego',
      'variations': [
        {
          'name': 'Normal',
          'id': '115',
          'checksum': ''
        }, {
          'name': 'Feliz',
          'id': '117',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '116',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Prof. Boris',
      'variations': [
        {
          'name': 'Normal',
          'id': '23',
          'checksum': ''
        }, {
          'name': 'Corado',
          'id': '20',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '21',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Prof. Delanay',
      'variations': [
        {
          'name': 'Normal',
          'id': '515',
          'checksum': ''
        }, {
          'name': 'Preocupada',
          'id': '516',
          'checksum': ''
        }, {
          'name': 'Zangada',
          'id': '540',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Prof. Faraize',
      'variations': [
        {
          'name': 'Normal',
          'id': '34',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '578',
          'checksum': ''
        }, {
          'name': 'Corado',
          'id': '432',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Prof. Patrick Savin',
      'variations': [
        {
          'name': 'Normal',
          'id': '619',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '620',
          'checksum': ''
        }, {
          'name': 'Incomodado',
          'id': '621',
          'checksum': ''
        }, {
          'name': 'Sério',
          'id': '675',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Bia',
      'variations': [
        {
          'name': 'Normal',
          'id': '60',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '61',
          'checksum': ''
        }, {
          'name': 'Zangada',
          'id': '62',
          'checksum': ''
        }, {
          'name': 'Pijama',
          'id': '75',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '599',
          'checksum': ''
        }, {
          'name': 'Assustada',
          'id': '598',
          'checksum': ''
        }, {
          'name': 'Chorando #1',
          'id': '806',
          'checksum': ''
        }, {
          'name': 'Chorando #2',
          'id': '807',
          'checksum': ''
        }, {
          'name': 'Corada',
          'id': '808',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Assustada',
          'id': '471',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '468',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Sorrindo',
          'id': '469',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Zangada',
          'id': '470',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Castiel',
      'variations': [
        {
          'name': 'Normal',
          'id': '2',
          'checksum': '7e39b3f5947b50be'
        }, {
          'name': 'Corado',
          'id': '13',
          'checksum': ''
        }, {
          'name': 'Corado Sério',
          'id': '84',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '3',
          'checksum': '5a487dc2b5742d3d'
        }, {
          'name': 'Zangado',
          'id': '12',
          'checksum': '6901877cdefa6564'
        }, {
          'name': 'Rei',
          'id': '354',
          'checksum': ''
        }, {
          'name': 'Sem Jaqueta',
          'id': '175',
          'checksum': ''
        }, {
          'name': 'Cabelo Negro: Normal',
          'id': '218',
          'checksum': ''
        }, {
          'name': 'Cabelo Negro: Sorrindo #1',
          'id': '220',
          'checksum': ''
        }, {
          'name': 'Cabelo Negro: Sorrindo #2',
          'id': '221',
          'checksum': ''
        }, {
          'name': 'Cabelo Negro: Sorrindo #3',
          'id': '222',
          'checksum': ''
        }, {
          'name': 'Cabelo Negro: Zangado',
          'id': '219',
          'checksum': ''
        }, {
          'name': 'Coleira: Normal',
          'id': '449',
          'checksum': ''
        }, {
          'name': 'Coleira: Sorrindo',
          'id': '450',
          'checksum': ''
        }, {
          'name': 'Coleira: Surpreso',
          'id': '451',
          'checksum': ''
        }, {
          'name': 'Coleira: Zangado',
          'id': '448',
          'checksum': ''
        }, {
          'name': 'Gato: Normal',
          'id': '375',
          'checksum': ''
        }, {
          'name': 'Gato: Sorrindo',
          'id': '376',
          'checksum': ''
        }, {
          'name': 'Lobo: Normal',
          'id': '336',
          'checksum': ''
        }, {
          'name': 'Lobo: Sorrindo',
          'id': '338',
          'checksum': ''
        }, {
          'name': 'Lobo: Zangado',
          'id': '337',
          'checksum': ''
        }, {
          'name': 'Novo Visual #1: Normal',
          'id': '273',
          'checksum': ''
        }, {
          'name': 'Novo Visual #1: Corado Serio',
          'id': '274',
          'checksum': ''
        }, {
          'name': 'Novo Visual #1: Sorrindo',
          'id': '271',
          'checksum': ''
        }, {
          'name': 'Novo Visual #1: Surpreso',
          'id': '406',
          'checksum': ''
        }, {
          'name': 'Novo Visual #1: Zangado',
          'id': '272',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Normal',
          'id': '522',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Corado',
          'id': '524',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Corado Sério #1',
          'id': '541',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Corado-Sério #2',
          'id': '804',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Piscando',
          'id': '854',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Preocupado',
          'id': '855',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Assustado',
          'id': '668',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Sorrindo #1',
          'id': '523',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Sorrindo #2',
          'id': '618',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Sorrindo Corado',
          'id': '853',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Surpreso',
          'id': '525',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Zangado',
          'id': '526',
          'checksum': ''
        }, {
          'name': 'Olheiras: Normal #1',
          'id': '756',
          'checksum': ''
        }, {
          'name': 'Olheiras: Normal #2',
          'id': '773',
          'checksum': ''
        }, {
          'name': 'Olheiras: Sorrindo',
          'id': '776',
          'checksum': ''
        }, {
          'name': 'Olheiras: Triste #1',
          'id': '757',
          'checksum': ''
        }, {
          'name': 'Olheiras: Triste #2',
          'id': '758',
          'checksum': ''
        }, {
          'name': 'Olheiras: Zangado',
          'id': '761',
          'checksum': ''
        }, {
          'name': 'Paletó Marrom: Normal',
          'id': '231',
          'checksum': ''
        }, {
          'name': 'Paletó Marrom: Sorrindo',
          'id': '233',
          'checksum': ''
        }, {
          'name': 'Paletó Marrom: Triste',
          'id': '260',
          'checksum': ''
        }, {
          'name': 'Paletó Marrom: Zangado',
          'id': '232',
          'checksum': ''
        }, {
          'name': 'Praia: Normal',
          'id': '79',
          'checksum': ''
        }, {
          'name': 'Praia: Corado',
          'id': '81',
          'checksum': ''
        }, {
          'name': 'Praia: Corado sério',
          'id': '83',
          'checksum': ''
        }, {
          'name': 'Praia: Sorrindo',
          'id': '82',
          'checksum': ''
        }, {
          'name': 'Praia: Zangado',
          'id': '80',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '527',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Corado',
          'id': '529',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Sério',
          'id': '542',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Sorrindo',
          'id': '528',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Surpreso',
          'id': '530',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Zangado',
          'id': '531',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Normal',
          'id': '139',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Corado',
          'id': '142',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Corado Sério',
          'id': '143',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Sorrindo',
          'id': '140',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Zangado',
          'id': '141',
          'checksum': ''
        }, {
          'name': 'Vovozinha-Lobo Mal: Normal',
          'id': '344',
          'checksum': ''
        }, {
          'name': 'Vovozinha-Lobo Mal: Sorrindo',
          'id': '343',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Charlie',
      'variations': [
        {
          'name': 'Normal',
          'id': '180',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '179',
          'checksum': ''
        }, {
          'name': 'Corado',
          'id': '192',
          'checksum': ''
        }, {
          'name': 'Embaraçado',
          'id': '181',
          'checksum': ''
        }
      ]
    }, {
      'name': 'ChiNoMiko',
      'variations': [
        {
          'name': 'Wink',
          'id': '22',
          'checksum': ''
        }, {
          'name': 'Feliz',
          'id': '18',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '19',
          'checksum': ''
        }, {
          'name': 'Wink: Natal',
          'id': '160',
          'checksum': ''
        }, {
          'name': 'Wink: Halloween',
          'id': '111',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Cotton',
      'variations': [
        {
          'name': 'Normal',
          'id': '157',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '158',
          'checksum': ''
        }, {
          'name': 'Preocupado',
          'id': '159',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Dajan',
      'variations': [
        {
          'name': 'Normal',
          'id': '29',
          'checksum': '70ec36c282363469'
        }, {
          'name': 'Sorrindo',
          'id': '30',
          'checksum': 'e9630ede46551912'
        }, {
          'name': 'Zangado',
          'id': '31',
          'checksum': '2f5207a31e66fa53'
        }
      ]
    }, {
      'name': 'Dake',
      'variations': [
        {
          'name': 'Normal',
          'id': '281',
          'checksum': ''
        }, {
          'name': 'Sorrindo #1',
          'id': '283',
          'checksum': ''
        }, {
          'name': 'Sorrindo #2',
          'id': '285',
          'checksum': ''
        }, {
          'name': 'Surpreso',
          'id': '677',
          'checksum': ''
        }, {
          'name': 'Óculos: Normal',
          'id': '282',
          'checksum': ''
        }, {
          'name': 'Óculos: Sorrindo #1',
          'id': '284',
          'checksum': ''
        }, {
          'name': 'Óculos: Sorrindo #2',
          'id': '286',
          'checksum': ''
        }, {
          'name': 'Olho Roxo: Normal',
          'id': '290',
          'checksum': ''
        }, {
          'name': 'Olho Roxo: Embaraçado',
          'id': '291',
          'checksum': ''
        }, {
          'name': 'Olho Roxo: Sorrindo',
          'id': '292',
          'checksum': ''
        }, {
          'name': 'Praia: Normal',
          'id': '90',
          'checksum': ''
        }, {
          'name': 'Praia: Sorrindo #1',
          'id': '91',
          'checksum': ''
        }, {
          'name': 'Praia: Sorrindo #2',
          'id': '92',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Normal',
          'id': '164',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Sorrindo #1',
          'id': '165',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Sorrindo #2',
          'id': '166',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Dark Castiel',
      'variations': [
        {
          'name': 'Normal',
          'id': '265',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Dark Louis',
      'variations': [
        {
          'name': 'Normal',
          'id': '261',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Dark Nathaniel',
      'variations': [
        {
          'name': 'Normal',
          'id': '264',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '263',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Dark Diretora',
      'variations': [
        {
          'name': 'Zangada',
          'id': '266',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Deborah',
      'variations': [
        {
          'name': 'Normal',
          'id': '215',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '216',
          'checksum': ''
        }, {
          'name': 'Corada',
          'id': '217',
          'checksum': ''
        }, {
          'name': 'Zangada',
          'id': '255',
          'checksum': ''
        }, {
          'name': 'Preocupada',
          'id': '257',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '230',
          'checksum': ''
        }, {
          'name': 'Triste Sorrindo',
          'id': '258',
          'checksum': ''
        }, {
          'name': 'Chorando',
          'id': '259',
          'checksum': ''
        }, {
          'name': 'Molhada',
          'id': '235',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Dragon',
      'variations': [
        {
          'name': 'Normal',
          'id': '89',
          'checksum': ''
        }, {
          'name': 'Feliz',
          'id': '87',
          'checksum': ''
        }, {
          'name': 'Zangado',
          'id': '88',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Dimitri',
      'variations': [
        {
          'name': 'Normal',
          'id': '112',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '113',
          'checksum': ''
        }, {
          'name': 'Zangado',
          'id': '114',
          'checksum': ''
        }, {
          'name': 'Traje: Normal',
          'id': '288',
          'checksum': ''
        }, {
          'name': 'Traje: Embaraçado',
          'id': '287',
          'checksum': ''
        }, {
          'name': 'Traje: Zangado',
          'id': '289',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Rã',
      'variations': [
        {
          'name': 'Normal',
          'id': '241',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Iris',
      'variations': [
        {
          'name': 'Normal',
          'id': '17',
          'checksum': 'd7cb3a0c9a4f3b1b'
        }, {
          'name': 'Sorrindo',
          'id': '77',
          'checksum': 'd3ca72ef3e2ea54e'
        }, {
          'name': 'Corada #1',
          'id': '69',
          'checksum': ''
        }, {
          'name': 'Corada #2',
          'id': '861',
          'checksum': ''
        }, {
          'name': 'Assustada',
          'id': '590',
          'checksum': ''
        }, {
          'name': 'Praia: Sorrindo',
          'id': '85',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Corada',
          'id': '479',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '477',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Sorrindo',
          'id': '478',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Normal',
          'id': '145',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Sorrindo',
          'id': '146',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Corada',
          'id': '147',
          'checksum': ''
        }, {
          'name': 'Zangada #1',
          'id': '857',
          'checksum': ''
        }, {
          'name': 'Zangada #2',
          'id': '858',
          'checksum': ''
        }, {
          'name': 'Zangada #3',
          'id': '859',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Jade',
      'variations': [
        {
          'name': 'Normal',
          'id': '26',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '27',
          'checksum': ''
        }, {
          'name': 'Zangado',
          'id': '28',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Ken',
      'variations': [
        {
          'name': 'Normal',
          'id': '5',
          'checksum': 'a0197b43ebdd242c'
        }, {
          'name': 'Corado',
          'id': '14',
          'checksum': '3c47ab950d8d4ac0'
        }, {
          'name': 'Apaixonado',
          'id': '6',
          'checksum': '3eaf31f49ef10daf'
        }, {
          'name': 'Chorando',
          'id': '7',
          'checksum': '7e3731fcde612da3'
        }
      ]
    }, {
      'name': 'Kentin',
      'variations': [
        {
          'name': 'Normal',
          'id': '202',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '204',
          'checksum': ''
        }, {
          'name': 'Corado A',
          'id': '206',
          'checksum': ''
        }, {
          'name': 'Corado B',
          'id': '207',
          'checksum': ''
        }, {
          'name': 'Corado Feliz',
          'id': '208',
          'checksum': ''
        }, {
          'name': 'Feliz',
          'id': '209',
          'checksum': ''
        }, {
          'name': 'Preocupado',
          'id': '203',
          'checksum': ''
        }, {
          'name': 'Zangado A',
          'id': '205',
          'checksum': ''
        }, {
          'name': 'Zangado B',
          'id': '210',
          'checksum': ''
        }, {
          'name': 'Zangado C',
          'id': '275',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Kim',
      'variations': [
        {
          'name': 'Normal',
          'id': '66',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '67',
          'checksum': ''
        }, {
          'name': 'Zangada',
          'id': '68',
          'checksum': ''
        }, {
          'name': 'Preocupada',
          'id': '579',
          'checksum': ''
        }, {
          'name': 'Surpresa',
          'id': '430',
          'checksum': ''
        }, {
          'name': 'Vovózinha',
          'id': '304',
          'checksum': ''
        }, {
          'name': 'Fada: Normal',
          'id': '306',
          'checksum': ''
        }, {
          'name': 'Fada: Zangada',
          'id': '358',
          'checksum': ''
        }, {
          'name': 'Vestido: Normal',
          'id': '305',
          'checksum': ''
        }, {
          'name': 'Vestido: Sorrindo',
          'id': '370',
          'checksum': ''
        }, {
          'name': 'Vestido: Zangada',
          'id': '369',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Normal',
          'id': '161',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Sorrindo',
          'id': '162',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Zangada',
          'id': '163',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '490',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Sorrindo',
          'id': '491',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Surpresa',
          'id': '493',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Zangada',
          'id': '492',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Lety',
      'variations': [
        {
          'name': 'Normal',
          'id': '276',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '277',
          'checksum': ''
        }, {
          'name': 'Feliz',
          'id': '681',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '279',
          'checksum': ''
        }, {
          'name': 'Corada',
          'id': '278',
          'checksum': ''
        }, {
          'name': 'Surpresa',
          'id': '678',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Leigh',
      'variations': [
        {
          'name': 'Normal',
          'id': '70',
          'checksum': ''
        }, {
          'name': 'Preocupado',
          'id': '71',
          'checksum': ''
        }, {
          'name': 'Sorrindo #2',
          'id': '848',
          'checksum': ''
        }, {
          'name': 'Corado',
          'id': '72',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '797',
          'checksum': ''
        }, {
          'name': 'MIB: Normal',
          'id': '256',
          'checksum': ''
        }, {
          'name': 'MIB: Óculos',
          'id': '254',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Louis',
      'variations': [
        {
          'name': 'Normal',
          'id': '246',
          'checksum': ''
        }, {
          'name': 'Praia: Normal',
          'id': '108',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Lysander',
      'variations': [
        {
          'name': 'Normal',
          'id': '47',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '49',
          'checksum': ''
        }, {
          'name': 'Corado A',
          'id': '86',
          'checksum': ''
        }, {
          'name': 'Corado B',
          'id': '118',
          'checksum': ''
        }, {
          'name': 'Corado C',
          'id': '250',
          'checksum': ''
        }, {
          'name': 'Corado D',
          'id': '119',
          'checksum': ''
        }, {
          'name': 'Preocupado',
          'id': '249',
          'checksum': ''
        }, {
          'name': 'Zangado',
          'id': '48',
          'checksum': ''
        }, {
          'name': 'Beach Normal',
          'id': '96',
          'checksum': ''
        }, {
          'name': 'Beach Sorrindo',
          'id': '97',
          'checksum': ''
        }, {
          'name': 'Beach Corado',
          'id': '99',
          'checksum': ''
        }, {
          'name': 'Beach Zangado',
          'id': '98',
          'checksum': ''
        }, {
          'name': 'Track-suit Normal',
          'id': '148',
          'checksum': ''
        }, {
          'name': 'Track-suit Sorrindo',
          'id': '149',
          'checksum': ''
        }, {
          'name': 'Track-suit Corado A',
          'id': '151',
          'checksum': ''
        }, {
          'name': 'Track-suit Corado B',
          'id': '152',
          'checksum': ''
        }, {
          'name': 'Track-suit Zangado',
          'id': '150',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Melody',
      'variations': [
        {
          'name': 'Normal',
          'id': '57',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '58',
          'checksum': ''
        }, {
          'name': 'Preocupada',
          'id': '59',
          'checksum': ''
        }, {
          'name': 'Triste-Corada',
          'id': '646',
          'checksum': ''
        }, {
          'name': 'Zangada',
          'id': '425',
          'checksum': ''
        }, {
          'name': 'Assustada',
          'id': '805',
          'checksum': ''
        }, {
          'name': 'Surpresa',
          'id': '647',
          'checksum': ''
        }, {
          'name': 'Pijama',
          'id': '74',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Normal',
          'id': '153',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Sorrindo',
          'id': '154',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '497',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Preocupada',
          'id': '499',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Sorrindo',
          'id': '498',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Zangada',
          'id': '500',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Sombra Misteriosa',
      'variations': [
        {
          'name': 'Normal',
          'id': '46',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Nathaniel',
      'variations': [
        {
          'name': 'Normal',
          'id': '1',
          'checksum': 'c8fa579bddd2fcd5'
        }, {
          'name': 'Sorrindo',
          'id': '4',
          'checksum': '55f4bf0e89eb42cb'
        }, {
          'name': 'Corado',
          'id': '11',
          'checksum': '14ef3a4fc4ee9107'
        }, {
          'name': 'Zangado',
          'id': '10',
          'checksum': '08b993876cef7584'
        }, {
          'name': 'Boxers: Normal',
          'id': '414',
          'checksum': ''
        }, {
          'name': 'Boxers: Corado',
          'id': '413',
          'checksum': ''
        }, {
          'name': 'Boxers: Zangado',
          'id': '412',
          'checksum': ''
        }, {
          'name': 'Coelho: Normal',
          'id': '331',
          'checksum': ''
        }, {
          'name': 'Coelho: Corado',
          'id': '333',
          'checksum': ''
        }, {
          'name': 'Coelho: Sorrindo',
          'id': '332',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Normal',
          'id': '269',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Corado #1',
          'id': '270',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Corado #2',
          'id': '410',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Sorrindo',
          'id': '267',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Sorrindo-Corado',
          'id': '296',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Zangado #1',
          'id': '268',
          'checksum': ''
        }, {
          'name': 'Novo Visual: Zangado #2',
          'id': '411',
          'checksum': ''
        }, {
          'name': 'Olho Roxo: Corado #1',
          'id': '417',
          'checksum': ''
        }, {
          'name': 'Olho Roxo: Corado #2',
          'id': '418',
          'checksum': ''
        }, {
          'name': 'Olho Roxo: Normal',
          'id': '415',
          'checksum': ''
        }, {
          'name': 'Olho Roxo: Zangado',
          'id': '416',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2 Chocado',
          'id': '679',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Corado #1',
          'id': '434',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Corado #2',
          'id': '573',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Corado #3',
          'id': '574',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Desconfiado',
          'id': '571',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Normal',
          'id': '427',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Preocupado #1',
          'id': '569',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Preocupado #2',
          'id': '802',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Sorrindo',
          'id': '429',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Sorriso Malvado',
          'id': '803',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Surpreso',
          'id': '635',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Triste',
          'id': '759',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Zangado #1',
          'id': '433',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Zangado #2',
          'id': '437',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Zangado #3',
          'id': '570',
          'checksum': ''
        }, {
          'name': 'Novo Visual #2: Zangado #4',
          'id': '572',
          'checksum': ''
        }, {
          'name': 'Novo Plumas: Normal',
          'id': '997',
          'checksum': ''
        }, {
          'name': 'Novo Plumas: Corado',
          'id': '994',
          'checksum': ''
        }, {
          'name': 'Novo Plumas: Sorrindo',
          'id': '996',
          'checksum': ''
        }, {
          'name': 'Novo Plumas: Zangado #1',
          'id': '993',
          'checksum': ''
        }, {
          'name': 'Novo Plumas: Zangado #2',
          'id': '995',
          'checksum': ''
        }, {
          'name': 'Praia: Normal',
          'id': '100',
          'checksum': ''
        }, {
          'name': 'Praia: Corado',
          'id': '103',
          'checksum': ''
        }, {
          'name': 'Praia: Sorrindo',
          'id': '101',
          'checksum': ''
        }, {
          'name': 'Praia: Zangado',
          'id': '102',
          'checksum': ''
        }, {
          'name': 'Principe: Normal',
          'id': '353',
          'checksum': ''
        }, {
          'name': 'Principe: Corado',
          'id': '356',
          'checksum': ''
        }, {
          'name': 'Principe: Sorrindo',
          'id': '357',
          'checksum': ''
        }, {
          'name': 'Principe: Sem Chapéu',
          'id': '362',
          'checksum': ''
        }, {
          'name': 'Rei',
          'id': '380',
          'checksum': ''
        }, {
          'name': 'Sem Camisa: Normal',
          'id': '863',
          'checksum': ''
        }, {
          'name': 'Suéter: Normal',
          'id': '223',
          'checksum': ''
        }, {
          'name': 'Suéter: Corado',
          'id': '226',
          'checksum': ''
        }, {
          'name': 'Suéter: Sorrindo',
          'id': '225',
          'checksum': ''
        }, {
          'name': 'Suéter: Zangado',
          'id': '224',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '517',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Corado',
          'id': '521',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Sorrindo',
          'id': '518',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Zangado #1',
          'id': '520',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Zangado #2',
          'id': '519',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Normal',
          'id': '135',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Corado',
          'id': '138',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Sorrindo',
          'id': '136',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Zangado',
          'id': '137',
          'checksum': ''
        }, {
          'name': '[Antigo] Normal',
          'id': '1_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Sorrindo',
          'id': '4_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Corado',
          'id': '11_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Zangado',
          'id': '10_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Coelho: Corado',
          'id': '333_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Coelho: Normal',
          'id': '331_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Coelho: Sorrindo',
          'id': '332_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Novo Visual: Corado #1',
          'id': '270_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Novo Visual: Corado #2',
          'id': '410_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Novo Visual: Furioso',
          'id': '411_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Novo Visual: Normal',
          'id': '269_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Novo Visual: Sorrindo',
          'id': '267_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Novo Visual: Sorrindo-Corado',
          'id': '296_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Novo Visual: Zangado',
          'id': '268_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Boxers: Corado #1',
          'id': '413_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Boxers: Corado #2',
          'id': '426_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Boxers: Normal',
          'id': '414_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Boxers: Zangado',
          'id': '412_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Olho Roxo: Corado #1',
          'id': '417_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Olho Roxo: Corado #2',
          'id': '418_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Olho Roxo: Normal',
          'id': '415_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Olho Roxo: Zangado',
          'id': '416_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Praia: Corado',
          'id': '103_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Praia: Normal',
          'id': '100_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Praia: Sorrindo',
          'id': '101_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Praia: Zangado',
          'id': '102_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Principe: Corado',
          'id': '356_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Principe: Normal',
          'id': '353_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Principe: Sorrindo',
          'id': '357_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Principe Sem chapéu',
          'id': '362_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Rei',
          'id': '380_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Suéter: Corado',
          'id': '226_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Suéter: Normal',
          'id': '223_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Suéter: Sorrindo',
          'id': '225_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Suéter: Zangado',
          'id': '224_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Traje esportivo: Corado',
          'id': '138_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Traje esportivo: Normal',
          'id': '135_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Traje esportivo: Sorrindo',
          'id': '136_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Traje esportivo: Zangado',
          'id': '137_old',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Nina',
      'variations': [
        {
          'name': 'Normal',
          'id': '212',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '214',
          'checksum': ''
        }, {
          'name': 'Mostrando Língua',
          'id': '213',
          'checksum': ''
        }, {
          'name': 'Confusa',
          'id': '591',
          'checksum': ''
        }, {
          'name': 'Chorando',
          'id': '671',
          'checksum': ''
        }, {
          'name': 'Desesperada',
          'id': '672',
          'checksum': ''
        }, {
          'name': 'Maligna',
          'id': '211',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '670',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Peggy',
      'variations': [
        {
          'name': 'Normal',
          'id': '54',
          'checksum': ''
        }, {
          'name': 'Corada',
          'id': '588',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '56',
          'checksum': ''
        }, {
          'name': 'Sorriso Malvado',
          'id': '640',
          'checksum': ''
        }, {
          'name': 'Chorando',
          'id': '419',
          'checksum': ''
        }, {
          'name': 'Gritando',
          'id': '639',
          'checksum': ''
        }, {
          'name': 'Zangada',
          'id': '55',
          'checksum': ''
        }, {
          'name': 'Fada',
          'id': '348',
          'checksum': ''
        }, {
          'name': 'Camponesa: Normal',
          'id': '324',
          'checksum': ''
        }, {
          'name': 'Camponesa: Sorrindo',
          'id': '326',
          'checksum': ''
        }, {
          'name': 'Camponesa: Zangada',
          'id': '327',
          'checksum': ''
        }, {
          'name': 'Lagarta: Normal',
          'id': '363',
          'checksum': ''
        }, {
          'name': 'Lagarta: Sorrindo',
          'id': '365',
          'checksum': ''
        }, {
          'name': 'Lagarta: Zangada',
          'id': '366',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '501',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Preocupada',
          'id': '503',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Sorrindo',
          'id': '502',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Zangada',
          'id': '504',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Rena',
      'variations': [
        {
          'name': 'Normal',
          'id': '242',
          'checksum': ''
        }, {
          'name': 'Colar Azul',
          'id': '243',
          'checksum': ''
        }, {
          'name': 'Colar Rosa',
          'id': '244',
          'checksum': ''
        }, {
          'name': 'Colar Dourado',
          'id': '245',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Rosalya',
      'variations': [
        {
          'name': 'Normal',
          'id': '41',
          'checksum': ''
        }, {
          'name': 'Corada',
          'id': '576',
          'checksum': ''
        }, {
          'name': 'Enjoada',
          'id': '577',
          'checksum': ''
        }, {
          'name': 'Gritando',
          'id': '604',
          'checksum': ''
        }, {
          'name': 'Malvada',
          'id': '851',
          'checksum': ''
        }, {
          'name': 'Pensativa',
          'id': '852',
          'checksum': ''
        }, {
          'name': 'Sorrindo #1',
          'id': '43',
          'checksum': ''
        }, {
          'name': 'Sorrindo #2',
          'id': '603',
          'checksum': ''
        }, {
          'name': 'Assustada #1',
          'id': '510',
          'checksum': ''
        }, {
          'name': 'Assustada #2',
          'id': '850',
          'checksum': ''
        }, {
          'name': 'Sorriso-Triste',
          'id': '794',
          'checksum': ''
        }, {
          'name': 'Triste #1',
          'id': '44',
          'checksum': ''
        }, {
          'name': 'Triste #2',
          'id': '793',
          'checksum': ''
        }, {
          'name': 'Zangada',
          'id': '42',
          'checksum': ''
        }, {
          'name': 'Sarcástica #1',
          'id': '575',
          'checksum': ''
        }, {
          'name': 'Sarcástica #2',
          'id': '849',
          'checksum': ''
        }, {
          'name': 'Olhos Fechados #1',
          'id': '795',
          'checksum': ''
        }, {
          'name': 'Olhos Fechados #2',
          'id': '885',
          'checksum': ''
        }, {
          'name': 'Camisola: Normal',
          'id': '73',
          'checksum': ''
        }, {
          'name': 'Camisola: Enjoada',
          'id': '839',
          'checksum': ''
        }, {
          'name': 'Camisola: Gritando',
          'id': '815',
          'checksum': ''
        }, {
          'name': 'Camisola: Sorriso-Triste',
          'id': '817',
          'checksum': ''
        }, {
          'name': 'Camisola: Triste',
          'id': '816',
          'checksum': ''
        }, {
          'name': 'Praia: Normal',
          'id': '95',
          'checksum': ''
        }, {
          'name': 'Praia: Sorrindo',
          'id': '93',
          'checksum': ''
        }, {
          'name': 'Praia: Zangada',
          'id': '94',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '505',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Assustada',
          'id': '509',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Sorrindo',
          'id': '506',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Triste',
          'id': '508',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Zangada',
          'id': '507',
          'checksum': ''
        }, {
          'name': '[Antigo] Normal',
          'id': '41_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Assustada',
          'id': '510_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Corada',
          'id': '576',
          'checksum': ''
        }, {
          'name': '[Antigo] Enjoada',
          'id': '577',
          'checksum': ''
        }, {
          'name': '[Antigo] Gritando',
          'id': '604_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Sorrindo A',
          'id': '43_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Sorrindo B',
          'id': '603_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Camisola: Normal',
          'id': '73_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Camisola: Enjoada',
          'id': '839_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Camisola: Gritando',
          'id': '815_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Camisola: Sorriso-Triste',
          'id': '817_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Camisola: Triste',
          'id': '816_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Olhos Fechados',
          'id': '795_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Praia: Normal',
          'id': '95_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Praia: Sorrindo',
          'id': '93_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Praia: Zangada',
          'id': '94_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Sorriso-Triste',
          'id': '794_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Triste A',
          'id': '44_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Triste B',
          'id': '793_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Zangada A',
          'id': '42_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Zangada B',
          'id': '575_old',
          'checksum': ''
        }, {
          'name': '[Antigo] Traje de Ciências: Normal',
          'id': '505',
          'checksum': ''
        }, {
          'name': '[Antigo] Traje de Ciências: Assustada',
          'id': '509',
          'checksum': ''
        }, {
          'name': '[Antigo] Traje de Ciências: Sorrindo',
          'id': '506',
          'checksum': ''
        }, {
          'name': '[Antigo] Traje de Ciências: Triste',
          'id': '508',
          'checksum': ''
        }, {
          'name': '[Antigo] Traje de Ciências: Zangada',
          'id': '507',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Parentes',
      'variations': [
        {
          'name': 'Docete: Felizes',
          'id': '301',
          'checksum': ''
        }, {
          'name': 'Docete: Normal',
          'id': '293',
          'checksum': ''
        }, {
          'name': 'Docete: Zangados',
          'id': '302',
          'checksum': ''
        }, {
          'name': 'Docete: [Mãe] Normal',
          'id': '294',
          'checksum': ''
        }, {
          'name': 'Docete: [Mãe] Séria',
          'id': '299',
          'checksum': ''
        }, {
          'name': 'Docete: [Mãe] Sorrindo',
          'id': '297',
          'checksum': ''
        }, {
          'name': 'Docete: [Mãe] Triste',
          'id': '774',
          'checksum': ''
        }, {
          'name': 'Docete: [Pai] Normal',
          'id': '295',
          'checksum': ''
        }, {
          'name': 'Docete: [Pai] Preocupado',
          'id': '847',
          'checksum': ''
        }, {
          'name': 'Docete: [Pai] Sorrindo',
          'id': '298',
          'checksum': ''
        }, {
          'name': 'Docete: [Pai] Triste',
          'id': '775',
          'checksum': ''
        }, {
          'name': 'Docete: [Pai] Zangado #1',
          'id': '300',
          'checksum': ''
        }, {
          'name': 'Docete: [Pai] Zangado #2',
          'id': '606',
          'checksum': ''
        }, {
          'name': 'Castiel: [Mãe] Normal',
          'id': '311',
          'checksum': ''
        }, {
          'name': 'Castiel: [Mãe] Sorrindo',
          'id': '397',
          'checksum': ''
        }, {
          'name': 'Castiel: [Mãe] Zangada',
          'id': '403',
          'checksum': ''
        }, {
          'name': 'Castiel: [Pai] Normal',
          'id': '312',
          'checksum': ''
        }, {
          'name': 'Nathaniel e Ambre: [Mãe] Normal',
          'id': '303',
          'checksum': ''
        }, {
          'name': 'Nathaniel e Ambre: [Mãe] Zangada',
          'id': '420',
          'checksum': ''
        }, {
          'name': 'Nathaniel e Ambre: [Pai] Normal',
          'id': '313',
          'checksum': ''
        }, {
          'name': 'Nathaniel e Ambre: [Pai] Zangado #1',
          'id': '405',
          'checksum': ''
        }, {
          'name': 'Nathaniel e Ambre: [Pai] Zangado #2',
          'id': '408',
          'checksum': ''
        }, {
          'name': 'Nathaniel e Ambre: [Pai] Zangado #3',
          'id': '407',
          'checksum': ''
        }, {
          'name': 'Rosalya: [Mãe] Normal',
          'id': '388',
          'checksum': ''
        }, {
          'name': 'Rosalya: [Mãe] Zangada',
          'id': '404',
          'checksum': ''
        }, {
          'name': 'Rosalya: [Pai] Normal',
          'id': '389',
          'checksum': ''
        }, {
          'name': 'Melody: [Mãe] Normal',
          'id': '401',
          'checksum': ''
        }, {
          'name': 'Melody: [Mãe] Zangada',
          'id': '673',
          'checksum': ''
        }, {
          'name': 'Melody: [Pai] Sorrindo',
          'id': '402',
          'checksum': ''
        }, {
          'name': 'Lysandre e Leigh: [Mãe] Normal',
          'id': '315',
          'checksum': ''
        }, {
          'name': 'Lysandre e Leigh: [Mãe] Sorriso-Triste',
          'id': '799',
          'checksum': ''
        }, {
          'name': 'Lysandre e Leigh: [Mãe] Triste',
          'id': '798',
          'checksum': ''
        }, {
          'name': 'Lysandre e Leigh: [Pai]',
          'id': '316',
          'checksum': ''
        }, {
          'name': 'Kim',
          'id': '321',
          'checksum': ''
        }, {
          'name': 'Kim: [Mãe] Normal',
          'id': '323',
          'checksum': ''
        }, {
          'name': 'Kim: [Pai] Sorrindo',
          'id': '322',
          'checksum': ''
        }, {
          'name': 'Armin e Alexy [Mãe]',
          'id': '317',
          'checksum': ''
        }, {
          'name': 'Armin e Alexy [Pai]',
          'id': '318',
          'checksum': ''
        }, {
          'name': 'Iris e Thomas [Mãe]',
          'id': '308',
          'checksum': ''
        }, {
          'name': 'Kentin: [Mãe] Normal',
          'id': '320',
          'checksum': ''
        }, {
          'name': 'Kentin: [Mãe] Óculos',
          'id': '319',
          'checksum': ''
        }, {
          'name': 'Kentin: [Mãe] Zangada',
          'id': '399',
          'checksum': ''
        }, {
          'name': 'Kentin: [Pai] Normal',
          'id': '314',
          'checksum': ''
        }, {
          'name': 'Kentin: [Pai] Zangado',
          'id': '398',
          'checksum': ''
        }, {
          'name': 'Charlotte',
          'id': '310',
          'checksum': ''
        }, {
          'name': 'Charlotte [Mãe]',
          'id': '694',
          'checksum': ''
        }, {
          'name': 'Charlotte [Pai]',
          'id': '693',
          'checksum': ''
        }, {
          'name': 'Bia: [Mãe] Normal',
          'id': '396',
          'checksum': ''
        }, {
          'name': 'Bia: [Mãe] Zangada',
          'id': '674',
          'checksum': ''
        }, {
          'name': 'Bia: [Pai] Normal',
          'id': '395',
          'checksum': ''
        }, {
          'name': 'Peggy [Mãe]',
          'id': '393',
          'checksum': ''
        }, {
          'name': 'Peggy [Pai]',
          'id': '394',
          'checksum': ''
        }, {
          'name': 'Violette [Pai]',
          'id': '309',
          'checksum': ''
        }, {
          'name': 'Li',
          'id': '307',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Diretora Shermasnky',
      'variations': [
        {
          'name': 'Normal',
          'id': '8',
          'checksum': '0f830c80a70bc366'
        }, {
          'name': 'Zangada',
          'id': '15',
          'checksum': 'bfb519e862a6c5c5'
        }, {
          'name': 'Preocupada',
          'id': '543',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Bruxa de Halloween',
      'variations': [
        {
          'name': 'Normal',
          'id': '227',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '228',
          'checksum': ''
        }, {
          'name': 'Séria',
          'id': '229',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Tije',
      'variations': [
        {
          'name': 'Normal',
          'id': '238',
          'checksum': ''
        }, {
          'name': 'Sorrindo A',
          'id': '239',
          'checksum': ''
        }, {
          'name': 'Sorrindo B',
          'id': '237',
          'checksum': ''
        }, {
          'name': 'Rena',
          'id': '240',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Violette',
      'variations': [
        {
          'name': 'Normal',
          'id': '63',
          'checksum': ''
        }, {
          'name': 'Corada #1',
          'id': '645',
          'checksum': ''
        }, {
          'name': 'Corada #2',
          'id': '865',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '64',
          'checksum': ''
        }, {
          'name': 'Corada-Gritando',
          'id': '644',
          'checksum': ''
        }, {
          'name': 'Surpresa',
          'id': '431',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '65',
          'checksum': ''
        }, {
          'name': 'Pijama',
          'id': '76',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '511',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Sorrindo',
          'id': '512',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Surpresa',
          'id': '514',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Triste',
          'id': '513',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Normal',
          'id': '155',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Sorrindo',
          'id': '156',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Triste',
          'id': '168',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Wenka',
      'variations': [
        {
          'name': 'Normal',
          'id': '182',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '199',
          'checksum': ''
        }, {
          'name': 'Tongue',
          'id': '184',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Wenka & Willi',
      'variations': [
        {
          'name': 'Normal',
          'id': '189',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Vadias',
      'variations': [
        {
          'name': 'Normal',
          'id': '280',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Willi',
      'variations': [
        {
          'name': 'Normal',
          'id': '185',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '186',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '188',
          'checksum': ''
        }, {
          'name': 'Shock',
          'id': '187',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Charlotte',
      'variations': [
        {
          'name': 'Normal',
          'id': '702',
          'checksum': '0984f335ae935183'
        }, {
          'name': 'Sorrindo',
          'id': '801',
          'checksum': ''
        }, {
          'name': 'Zangada',
          'id': '800',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '472',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Normal',
          'id': '690',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Cookie',
      'variations': [
        {
          'name': 'Normal',
          'id': '596',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Enfermeira',
      'variations': [
        {
          'name': 'Normal',
          'id': '762',
          'checksum': ''
        }, {
          'name': 'Preocupada',
          'id': '764',
          'checksum': ''
        }, {
          'name': 'Séria',
          'id': '763',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '765',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Médico',
      'variations': [
        {
          'name': 'Normal',
          'id': '772',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '792',
          'checksum': ''
        }, {
          'name': 'Zangado',
          'id': '791',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Vendedora',
      'variations': [
        {
          'name': 'Normal',
          'id': '436',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Thomas',
      'variations': [
        {
          'name': 'Normal',
          'id': '555',
          'checksum': ''
        }, {
          'name': 'Sorrindo',
          'id': '556',
          'checksum': ''
        }, {
          'name': 'Zangado',
          'id': '856',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Priya',
      'variations': [
        {
          'name': 'Normal #1',
          'id': '558',
          'checksum': ''
        }, {
          'name': 'Normal #2',
          'id': '811',
          'checksum': ''
        }, {
          'name': 'Sorrindo #1',
          'id': '559',
          'checksum': ''
        }, {
          'name': 'Sorrindo #2',
          'id': '567',
          'checksum': ''
        }, {
          'name': 'Piscando',
          'id': '812',
          'checksum': ''
        }, {
          'name': 'Aliviada',
          'id': '568',
          'checksum': ''
        }, {
          'name': 'Malvada',
          'id': '862',
          'checksum': ''
        }, {
          'name': 'Preocupada #1',
          'id': '560',
          'checksum': ''
        }, {
          'name': 'Preocupada #2',
          'id': '564',
          'checksum': ''
        }, {
          'name': 'Raiva #1',
          'id': '561',
          'checksum': ''
        }, {
          'name': 'Raiva #2',
          'id': '563',
          'checksum': ''
        }, {
          'name': 'Raiva #3',
          'id': '565',
          'checksum': ''
        }, {
          'name': 'Raiva #4',
          'id': '566',
          'checksum': ''
        }, {
          'name': 'Surpresa',
          'id': '562',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Viktor',
      'variations': [
        {
          'name': 'Normal',
          'id': 'Viktor',
          'checksum': ''
        }, {
          'name': 'Corado',
          'id': 'Viktor4',
          'checksum': ''
        }, {
          'name': 'Sorrindo #1',
          'id': 'Viktor1',
          'checksum': ''
        }, {
          'name': 'Sorrindo #2',
          'id': 'Viktor3',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': 'Viktor5',
          'checksum': ''
        }, {
          'name': 'Zangado',
          'id': 'Viktor2',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Li',
      'variations': [
        {
          'name': 'Normal',
          'id': '705',
          'checksum': '81f609f8e74bd734'
        }, {
          'name': 'Triste',
          'id': '51',
          'checksum': ''
        }, {
          'name': 'Zangada',
          'id': '39',
          'checksum': ''
        }, {
          'name': 'Camponesa',
          'id': '325',
          'checksum': ''
        }, {
          'name': 'Fada',
          'id': '349',
          'checksum': ''
        }, {
          'name': 'Rainha: Normal',
          'id': '364',
          'checksum': ''
        }, {
          'name': 'Rainha: Triste',
          'id': '367',
          'checksum': ''
        }, {
          'name': 'Rainha: Zangada',
          'id': '368',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Normal',
          'id': '494',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Preocupada',
          'id': '496',
          'checksum': ''
        }, {
          'name': 'Traje de Ciências: Zangada',
          'id': '495',
          'checksum': ''
        }, {
          'name': 'Traje esportivo: Normal',
          'id': '689',
          'checksum': ''
        }
      ]
    }, {
      'name': '[Nada]',
      'variations': [
        {
          'name': 'Normal',
          'id': '0',
          'checksum': '-'
        }
      ]
    }, {
      'name': '[Docete]',
      'variations': [
        {
          'name': 'Normal',
          'id': 's',
          'checksum': '-'
        }
      ]
    }
  ],
  'avatars': [
    {
      'name': 'Nathaniel',
      'id': '1',
      'checksum': 'bc54262faa435b63',
      'details': {
        'description': 'Nathaniel é o representante de turma. É um rapaz sério e é de fácil convívio. Ele é responsável, calmo e tímido. Sensível às críticas, ele é perfeccionista ao extremo.',
        'likes': 'Romance policial',
        'dislikes': 'Doces',
        'height': 178,
        'weight': 71,
        'blood_type': 'O+',
        'birthday': '16/02',
        'sign': 'Aquário'
      }
    }, {
      'name': 'Castiel',
      'id': '2',
      'checksum': '35d8889c06baa039',
      'details': {
        'description': 'Castiel é um rapaz um pouco difícil. Não é fácil falar com ele ou saber o que ele pensa, mas, provavelmente, é um cara legal. Apesar do seu mau humor, ele gosta das pessoas que falam sem rodeios.',
        'likes': 'Guitarra elétrica',
        'dislikes': 'Receber ordens',
        'height': 180,
        'weight': 80,
        'blood_type': 'O-',
        'birthday': '12/08',
        'sign': 'Leão'
      }
    }, {
      'name': 'Ken',
      'id': '6',
      'checksum': '3b464ff64c2bd151',
      'details': {
        'description': 'Ken, apelido de Kentin, está apaixonado e não disfarça. É super gentil e gosta de ajudar, mas fica muito no pé.',
        'likes': 'Biscoito de chocolate',
        'dislikes': 'Comida apimentada',
        'height': 165,
        'weight': 54,
        'blood_type': 'O+',
        'birthday': '06/03',
        'sign': 'Peixes'
      }
    }, {
      'name': 'Diretora Shermansky',
      'id': '7',
      'checksum': 'fbb20faad27dc3d5',
      'details': {
        'description': 'É a diretora da escola. É melhor ela não ver você passeando pelo corredor.'
      }
    }, {
      'name': 'Agatha',
      'id': '9',
      'checksum': 'dffa3ff5431cea78',
      'details': {
        'description': 'Tia e fada ao mesmo tempo. Ela sempre aparece em uma boa hora e está sempre pronta para te presentear.'
      }
    }, {
      'name': 'Ambre',
      'id': '10',
      'checksum': 'dd6d56bc7686aeb6',
      'details': {
        'description': 'Conhecida por ser a peste da escola Sweet Amoris, a Ambre sempre foi muito mimada pelos pais. Imatura, ela não hesita em se vingar de todos que se metem no seu caminho. Ela detesta que uma garota se aproxime demais do Castiel, por quem ela está apaixonada desde a infância; como também do Nathaniel, seu irmão gêmeo.',
        'likes': 'Seduzir e ser o centro das atenções',
        'dislikes': 'Ver alguém se meter na vida dela',
        'height': 162,
        'weight': 58,
        'blood_type': 'B-',
        'birthday': '16/02',
        'sign': 'Aquário'
      }
    }, {
      'name': 'Iris',
      'id': '11',
      'checksum': 'a693f1b1a7103d5f',
      'details': {
        'description': 'Todo mundo gosta da Iris. Gentil e prestativa, ela não tem nenhum inimigo na escola e é raro encontrá-la sem o seu famoso sorriso. Ela tem algumas dificuldades no estudo, mas é uma aluna aplicada e faz o possível para tirar boas notas.',
        'likes': 'Passear com os amigos ou a família',
        'dislikes': 'Conflito',
        'height': 156,
        'weight': 49,
        'blood_type': 'A+',
        'birthday': '04/06',
        'sign': 'Gêmeos'
      }
    }, {
      'name': 'ChiNoMiko',
      'id': '12',
      'checksum': '6627995d3090c8bd',
      'details': {
        'description': 'Peça chave do jogo e a verdadeira guia da Docete, ela aparece nos momentos delicados, quando os objetivos precisam de algumas explicações.',
        'sign': 'Leão'
      }
    }, {
      'name': 'Boris',
      'id': '15',
      'checksum': '9f48af96ebbecc3d',
      'details': {
        'description': 'Boris aparece como monitor nos preparativos da corrida de orientação. Ele também participa da escola como professor de educação física. Boris é o tio de Dake, o surfista paquerador.',
        'likes': '',
        'sign': 'Gêmeos'
      }
    }, {
      'name': 'Jade',
      'id': '18',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Dajan',
      'id': '19',
      'checksum': '34981cea53f465d9',
      'details': {
        'description': 'Dajan não é um aluno de Sweet Amoris. Ele estuda em um escola especializada em esportes e participa, ocasionalmente, das atividades esportivas de Sweet Amoris. /!\ Personagem disponível apenas no episódio 3.',
        'likes': 'Comer no fast-food após o treinamento',
        'dislikes': 'Garotas superficiais',
        'height': 184,
        'weight': 82,
        'blood_type': 'A+',
        'birthday': '19/04',
        'sign': 'Áries'
      }
    }, {
      'name': 'Prof. Faraize',
      'id': '20',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Rosalya',
      'id': '22',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Rosalya (Antiga)',
      'id': '22_old',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Lysandre',
      'id': '23',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Peggy',
      'id': '24',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Melody',
      'id': '25',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Bia',
      'id': '26',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Violette',
      'id': '27',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Kim',
      'id': '28',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Leigh',
      'id': '29',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Dragon',
      'id': '30',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Dake',
      'id': '31',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Dimitri',
      'id': '32',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Morcego',
      'id': '33',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Alexy',
      'id': '34',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Armin',
      'id': '35',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Cotton',
      'id': '36',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Wenka & Willi',
      'id': '37',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Kentin',
      'id': '38',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Nina',
      'id': '39',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Deborah',
      'id': '40',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Viktor',
      'id': '41',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Tije',
      'id': '42',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Dark Louis',
      'id': '43',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'WTF',
      'id': '44',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Lety',
      'id': '48',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Docete',
      'id': '49',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Vendedora',
      'id': '53',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Prof. Delanay',
      'id': '54',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Thomas',
      'id': '55',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Priya',
      'id': '56',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Cookie',
      'id': '57',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Patrick',
      'id': '58',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Cupido',
      'id': '59',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Docete',
      'id': '60',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Charlotte',
      'id': '62',
      'checksum': '22cb1caff72c8df2',
      'details': {
        'description': 'Próxima de Ambre e Li, Charlotte é uma garota arrogante e com pouca empatia. Ao contrário de suas amigas, ela faz questão de tirar boas notas e é discreta, o que faz com que seja levada mais a sério do que as outras.',
        'likes': 'Fazer parte de um grupo, jogar xadrez',
        'dislikes': 'Parecer ridícula',
        'height': 168,
        'weight': 59,
        'blood_type': 'O-',
        'birthday': '08/01',
        'sign': 'Capricórpio'
      }
    }, {
      'name': 'Li',
      'id': '63',
      'checksum': '6fe68c1ddabdb628',
      'details': {
        'description': 'Li considera o fato de fazer parte do grupo de Ambre como uma vitória social suprema. Na verdade, ela não tem personalidade forte e faz questão de piorar a situação cada vez que a amiga trata mal alguém.',
        'likes': 'Produtos de beleza, se lamentar e criticar os outros',
        'dislikes': 'Aula de história, pombos',
        'height': 154,
        'weight': 45,
        'blood_type': 'AB-',
        'birthday': '11/03',
        'sign': 'Peixes'
      }
    }, {
      'name': 'Pai de Nathaniel e Ambre',
      'id': '64',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Nathaniel e Ambre',
      'id': '65',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Castiel',
      'id': '66',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Castiel',
      'id': '67',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Kentin',
      'id': '68',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Kentin',
      'id': '69',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Lysandre e Leigh',
      'id': '70',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Lysandre e Leigh',
      'id': '71',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Armin e Alexy',
      'id': '72',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Armin e Alexy',
      'id': '73',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Iris e Thomas',
      'id': '74',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Violette',
      'id': '75',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Rosalya',
      'id': '76',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Rosalya',
      'id': '77',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Kim',
      'id': '78',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Kim',
      'id': '79',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Peggy',
      'id': '80',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Peggy',
      'id': '81',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Bia',
      'id': '82',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Bia',
      'id': '83',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Melody',
      'id': '84',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Melody',
      'id': '85',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Li',
      'id': '86',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Li',
      'id': '87',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pai de Charlotte',
      'id': '88',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Mãe de Charlotte',
      'id': '89',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Enfermeira',
      'id': '90',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Socorro',
      'id': '91',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Médico',
      'id': '92',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Samuel (Sam)',
      'id': '93',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Nathaniel (Novo Visual)',
      'id': '130',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Castiel (Novo Visual)',
      'id': '131',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Lysandre',
      'id': '135',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Kentin',
      'id': '136',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Pais de Docete',
      'id': '138',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Ambre e amigas',
      'id': '139',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Lysandre (Novo Visual)',
      'id': '140',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Alexy',
      'id': '141',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': 'Armin',
      'id': '142',
      'checksum': '',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': '[Nada]',
      'id': '0',
      'checksum': '-',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }, {
      'name': '[Docete]',
      'id': 's',
      'checksum': '-',
      'details': {
        'description': '',
        'likes': '',
        'dislikes': '',
        'height': 0,
        'weight': 0,
        'blood_type': '',
        'birthday': '',
        'sign': ''
      }
    }
  ],
  'scenes': [
    {
      'name': 'Escola: Entrada',
      'variations': [
        {
          'name': 'Normal',
          'id': '116',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Ônibus',
      'variations': [
        {
          'name': 'Interior',
          'id': '875',
          'checksum': ''
        }, {
          'name': 'Antigo: Interior',
          'id': '39',
          'checksum': ''
        }, {
          'name': 'Parada de Ônibus',
          'id': '123',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Lanchonete',
      'variations': [
        {
          'name': 'Normal',
          'id': '124',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Sala de Aula A',
      'variations': [
        {
          'name': 'Dia',
          'id': '1',
          'checksum': '938f8d285289b68b'
        }, {
          'name': 'Noite',
          'id': '7',
          'checksum': ''
        }, {
          'name': 'Sepia',
          'id': '96',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Sala de Aula B',
      'variations': [
        {
          'name': 'Dia',
          'id': '21',
          'checksum': ''
        }, {
          'name': 'Sepia',
          'id': '95',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Sala de Aula C',
      'variations': [
        {
          'name': 'Dia',
          'id': '939',
          'checksum': ''
        }, {
          'name': 'Tarde',
          'id': '941',
          'checksum': ''
        }, {
          'name': 'Noite',
          'id': '940',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Sala do Grêmio',
      'variations': [
        {
          'name': 'Dia',
          'id': '2',
          'checksum': '98976cf117e7835f'
        }, {
          'name': 'Noite',
          'id': '10',
          'checksum': ''
        }, {
          'name': 'Escuro',
          'id': '108',
          'checksum': ''
        }, {
          'name': 'Sepia',
          'id': '93',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Sala de Artes Plásticas',
      'variations': [
        {
          'name': 'Normal',
          'id': '241',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Escola: Pátio',
      'variations': [
        {
          'name': 'Dia',
          'id': '4',
          'checksum': '58fb29de83d23557'
        }, {
          'name': 'Noite',
          'id': '11',
          'checksum': ''
        }, {
          'name': 'Sepia',
          'id': '90',
          'checksum': ''
        }, {
          'name': 'Stargate: Dia',
          'id': '127',
          'checksum': ''
        }, {
          'name': 'Stargate: Noite',
          'id': '129',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Escola: Primeiro Andar',
      'variations': [
        {
          'name': 'Dia',
          'id': '110',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Escola: Jardim',
      'variations': [
        {
          'name': 'Dia',
          'id': '5',
          'checksum': 'cf5cfca0a87e77a6'
        }, {
          'name': 'Noite',
          'id': '13',
          'checksum': ''
        }, {
          'name': 'Sepia',
          'id': '91',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Escola: Vestiário',
      'variations': [
        {
          'name': 'Normal',
          'id': '80',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Escola: Ginásio',
      'variations': [
        {
          'name': 'Dia',
          'id': '6',
          'checksum': '78b327b40089e33d'
        }, {
          'name': 'Noite',
          'id': '12',
          'checksum': ''
        }, {
          'name': 'Sepia',
          'id': '92',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Escola: Laboratório',
      'variations': [
        {
          'name': 'Dia',
          'id': '132',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Escola: Corredor Principal',
      'variations': [
        {
          'name': 'Dia',
          'id': '3',
          'checksum': '030e3bada6b6436a'
        }, {
          'name': 'Noite',
          'id': '8',
          'checksum': ''
        }, {
          'name': 'Escuro',
          'id': '103',
          'checksum': ''
        }, {
          'name': 'Sepia',
          'id': '89',
          'checksum': ''
        }, {
          'name': 'Antigo: Dia',
          'id': '125',
          'checksum': ''
        }, {
          'name': 'Antigo: Noite',
          'id': '130',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Escola: Segundo Corredor',
      'variations': [
        {
          'name': 'Dia',
          'id': '14',
          'checksum': ''
        }, {
          'name': 'Noite',
          'id': '9',
          'checksum': ''
        }, {
          'name': 'Sepia',
          'id': '94',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Escola: Escadaria',
      'variations': [
        {
          'name': 'Dia',
          'id': '15',
          'checksum': ''
        }, {
          'name': 'Borrada',
          'id': '109',
          'checksum': ''
        }, {
          'name': 'Noite',
          'id': '16',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Porão',
      'variations': [
        {
          'name': 'Claro',
          'id': '980',
          'checksum': ''
        }, {
          'name': 'Escuro',
          'id': '981',
          'checksum': ''
        }, {
          'name': 'Molhado',
          'id': '982',
          'checksum': ''
        }, {
          'name': 'Antigo: Claro',
          'id': '87',
          'checksum': ''
        }, {
          'name': 'Antigo: Escuro',
          'id': '232',
          'checksum': ''
        }, {
          'name': 'Antigo: Fotografia',
          'id': '229',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Cemitério',
      'variations': [
        {
          'name': '1',
          'id': '32',
          'checksum': ''
        }, {
          'name': '2',
          'id': '33',
          'checksum': ''
        }, {
          'name': '3',
          'id': '34',
          'checksum': ''
        }, {
          'name': 'Dimitri',
          'id': '36',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Concerto',
      'variations': [
        {
          'name': 'Escuro',
          'id': '956',
          'checksum': ''
        }, {
          'name': 'Iluminado',
          'id': '955',
          'checksum': ''
        }, {
          'name': 'Vazio',
          'id': '957',
          'checksum': ''
        }, {
          'name': 'Antigo: Normal',
          'id': '88',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Lojas',
      'variations': [
        {
          'name': '1',
          'id': '121',
          'checksum': ''
        }, {
          'name': '2',
          'id': '122',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Loja de Animais',
      'variations': [
        {
          'name': '1',
          'id': '222',
          'checksum': ''
        }, {
          'name': '2',
          'id': '223',
          'checksum': ''
        }, {
          'name': '3',
          'id': '224',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Supermercado',
      'variations': [
        {
          'name': 'Dia',
          'id': '992',
          'checksum': ''
        }, {
          'name': 'Tarde',
          'id': '993',
          'checksum': ''
        }, {
          'name': 'Noite',
          'id': '994',
          'checksum': ''
        }, {
          'name': 'Dia #2',
          'id': '930',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Parque',
      'variations': [
        {
          'name': 'Normal',
          'id': '119',
          'checksum': ''
        }, {
          'name': 'Entrada',
          'id': '118',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Campo',
      'variations': [
        {
          'name': '1',
          'id': '81',
          'checksum': ''
        }, {
          'name': '2',
          'id': '82',
          'checksum': ''
        }, {
          'name': '3',
          'id': '83',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Praia',
      'variations': [
        {
          'name': '1',
          'id': '22',
          'checksum': ''
        }, {
          'name': '2',
          'id': '23',
          'checksum': ''
        }, {
          'name': '3',
          'id': '24',
          'checksum': ''
        }, {
          'name': '4',
          'id': '25',
          'checksum': ''
        }, {
          'name': '5',
          'id': '26',
          'checksum': ''
        }, {
          'name': '6',
          'id': '27',
          'checksum': ''
        }, {
          'name': '7',
          'id': '28',
          'checksum': ''
        }, {
          'name': '8',
          'id': '29',
          'checksum': ''
        }, {
          'name': '9',
          'id': '30',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Floresta',
      'variations': [
        {
          'name': '1',
          'id': '40',
          'checksum': ''
        }, {
          'name': '2',
          'id': '41',
          'checksum': ''
        }, {
          'name': '3',
          'id': '42',
          'checksum': ''
        }, {
          'name': '4',
          'id': '43',
          'checksum': ''
        }, {
          'name': '5',
          'id': '44',
          'checksum': ''
        }, {
          'name': '6',
          'id': '46',
          'checksum': ''
        }, {
          'name': '7',
          'id': '48',
          'checksum': ''
        }, {
          'name': '8',
          'id': '52',
          'checksum': ''
        }, {
          'name': '9',
          'id': '62',
          'checksum': ''
        }, {
          'name': '10',
          'id': '63',
          'checksum': ''
        }, {
          'name': '11',
          'id': '67',
          'checksum': ''
        }, {
          'name': '12',
          'id': '68',
          'checksum': ''
        }, {
          'name': '13',
          'id': '69',
          'checksum': ''
        }, {
          'name': '14',
          'id': '70',
          'checksum': ''
        }, {
          'name': '15',
          'id': '71',
          'checksum': ''
        }, {
          'name': '16',
          'id': '72',
          'checksum': ''
        }, {
          'name': '17',
          'id': '73',
          'checksum': ''
        }, {
          'name': '18',
          'id': '74',
          'checksum': ''
        }, {
          'name': '19',
          'id': '75',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Floresta: Noite',
      'variations': [
        {
          'name': '1',
          'id': '76',
          'checksum': ''
        }, {
          'name': '2',
          'id': '77',
          'checksum': ''
        }, {
          'name': '3',
          'id': '78',
          'checksum': ''
        }, {
          'name': '4',
          'id': '79',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Bosque Escuro',
      'variations': [
        {
          'name': '1',
          'id': '35',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Restaurante',
      'variations': [
        {
          'name': 'Dia',
          'id': '1016',
          'checksum': ''
        }, {
          'name': 'Noite',
          'id': '227',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Teatro',
      'variations': [
        {
          'name': '1',
          'id': '146',
          'checksum': ''
        }, {
          'name': '2',
          'id': '147',
          'checksum': ''
        }, {
          'name': '3',
          'id': '148',
          'checksum': ''
        }, {
          'name': '4',
          'id': '149',
          'checksum': ''
        }, {
          'name': '5',
          'id': '150',
          'checksum': ''
        }, {
          'name': '6',
          'id': '151',
          'checksum': ''
        }, {
          'name': '7',
          'id': '152',
          'checksum': ''
        }, {
          'name': '8',
          'id': '153',
          'checksum': ''
        }, {
          'name': '9',
          'id': '154',
          'checksum': ''
        }, {
          'name': '10',
          'id': '155',
          'checksum': ''
        }, {
          'name': '11',
          'id': '156',
          'checksum': ''
        }, {
          'name': '12',
          'id': '157',
          'checksum': ''
        }, {
          'name': '13',
          'id': '158',
          'checksum': ''
        }, {
          'name': '14',
          'id': '159',
          'checksum': ''
        }, {
          'name': '15',
          'id': '160',
          'checksum': ''
        }, {
          'name': '16',
          'id': '161',
          'checksum': ''
        }, {
          'name': '17',
          'id': '162',
          'checksum': ''
        }, {
          'name': '18',
          'id': '163',
          'checksum': ''
        }, {
          'name': '19',
          'id': '164',
          'checksum': ''
        }, {
          'name': '20',
          'id': '165',
          'checksum': ''
        }, {
          'name': '21',
          'id': '166',
          'checksum': ''
        }, {
          'name': '22',
          'id': '167',
          'checksum': ''
        }, {
          'name': '23',
          'id': '168',
          'checksum': ''
        }, {
          'name': '24',
          'id': '169',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Casa da Docete',
      'variations': [
        {
          'name': 'Dia',
          'id': '37',
          'checksum': ''
        }, {
          'name': 'Noite',
          'id': '226',
          'checksum': ''
        }, {
          'name': 'Sala de Estar',
          'id': '231',
          'checksum': ''
        }, {
          'name': 'Rua: Dia',
          'id': '120',
          'checksum': ''
        }, {
          'name': 'Rua: Noite',
          'id': '228',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Casa da Iris',
      'variations': [
        {
          'name': 'Banheiro: Dia',
          'id': '253',
          'checksum': ''
        }, {
          'name': 'Banheiro: Noite',
          'id': '264',
          'checksum': ''
        }, {
          'name': 'Corredor: Dia',
          'id': '249',
          'checksum': ''
        }, {
          'name': 'Corredor: Noite',
          'id': '257',
          'checksum': ''
        }, {
          'name': 'Cozinha: Dia',
          'id': '254',
          'checksum': ''
        }, {
          'name': 'Cozinha: Noite',
          'id': '261',
          'checksum': ''
        }, {
          'name': 'Jardim: Dia',
          'id': '256',
          'checksum': ''
        }, {
          'name': 'Jardim: Noite',
          'id': '263',
          'checksum': ''
        }, {
          'name': 'Sala de Estar: Dia',
          'id': '250',
          'checksum': ''
        }, {
          'name': 'Sala de Estar: Noite',
          'id': '260',
          'checksum': ''
        }, {
          'name': 'Quarto da Iris: Dia',
          'id': '252',
          'checksum': ''
        }, {
          'name': 'Quarto da Iris: Noite',
          'id': '259',
          'checksum': ''
        }, {
          'name': 'Quarto do Thomas: Dia',
          'id': '251',
          'checksum': ''
        }, {
          'name': 'Quarto do Thomas: Noite',
          'id': '258',
          'checksum': ''
        }, {
          'name': 'Varanda: Dia',
          'id': '255',
          'checksum': ''
        }, {
          'name': 'Varanda: Noite',
          'id': '262',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Casa da Melody',
      'variations': [
        {
          'name': 'Quarto',
          'id': '18',
          'checksum': ''
        }, {
          'name': 'Corredor',
          'id': '19',
          'checksum': ''
        }, {
          'name': 'Banheiro',
          'id': '20',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Casa da Nathaniel',
      'variations': [
        {
          'name': 'Entrada',
          'id': '215',
          'checksum': ''
        }, {
          'name': 'Banheiro: Dia',
          'id': '213',
          'checksum': ''
        }, {
          'name': 'Banheiro: Noite',
          'id': '220',
          'checksum': ''
        }, {
          'name': 'Primeiro Andar: Dia',
          'id': '209',
          'checksum': ''
        }, {
          'name': 'Primeiro Andar: Noite',
          'id': '217',
          'checksum': ''
        }, {
          'name': 'Quarto da Ambre: Dia',
          'id': '211',
          'checksum': ''
        }, {
          'name': 'Quarto da Ambre: Noite',
          'id': '221',
          'checksum': ''
        }, {
          'name': 'Quarto do Nathaniel: Dia',
          'id': '212',
          'checksum': ''
        }, {
          'name': 'Quarto do Nathaniel: Noite',
          'id': '216',
          'checksum': ''
        }, {
          'name': 'Sala de Estar: Dia',
          'id': '208',
          'checksum': ''
        }, {
          'name': 'Sala de Estar: Noite',
          'id': '218',
          'checksum': ''
        }, {
          'name': 'Sala de Jantar: Dia',
          'id': '210',
          'checksum': ''
        }, {
          'name': 'Sala de Jantar: Noite',
          'id': '219',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Céu',
      'variations': [
        {
          'name': 'Normal',
          'id': '230',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Escuridão',
      'variations': [
        {
          'name': 'Normal',
          'id': '214',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Biblioteca',
      'variations': [
        {
          'name': 'Normal',
          'id': '225',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Hospital',
      'variations': [
        {
          'name': 'Elevador: Dia',
          'id': '236',
          'checksum': ''
        }, {
          'name': 'Elevador: Noite',
          'id': '244',
          'checksum': ''
        }, {
          'name': 'Entrada: Dia',
          'id': '233',
          'checksum': ''
        }, {
          'name': 'Entrada: Noite',
          'id': '242',
          'checksum': ''
        }, {
          'name': 'Lanchonete: Dia',
          'id': '235',
          'checksum': ''
        }, {
          'name': 'Lanchonete: Noite',
          'id': '248',
          'checksum': ''
        }, {
          'name': 'Quarto 1: Dia',
          'id': '238',
          'checksum': ''
        }, {
          'name': 'Quarto 1: Noite',
          'id': '247',
          'checksum': ''
        }, {
          'name': 'Quarto 2: Dia',
          'id': '239',
          'checksum': ''
        }, {
          'name': 'Quarto 2: Noite',
          'id': '246',
          'checksum': ''
        }, {
          'name': 'Recepção: Dia',
          'id': '234',
          'checksum': ''
        }, {
          'name': 'Recepção: Noite',
          'id': '243',
          'checksum': ''
        }, {
          'name': 'Terceiro Andar: Dia',
          'id': '237',
          'checksum': ''
        }, {
          'name': 'Terceiro Andar: Noite',
          'id': '245',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Sala dos Profesores',
      'variations': [
        {
          'name': 'Dia',
          'id': '924',
          'checksum': ''
        }, {
          'name': 'Noite',
          'id': '925',
          'checksum': ''
        }, {
          'name': 'Antigo: Dia',
          'id': '17',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Shopping',
      'variations': [
        {
          'name': '1',
          'id': '133',
          'checksum': ''
        }, {
          'name': '2',
          'id': '134',
          'checksum': ''
        }, {
          'name': '3',
          'id': '135',
          'checksum': ''
        }, {
          'name': '4',
          'id': '136',
          'checksum': ''
        }, {
          'name': '5',
          'id': '137',
          'checksum': ''
        }, {
          'name': '6',
          'id': '138',
          'checksum': ''
        }, {
          'name': '7',
          'id': '139',
          'checksum': ''
        }, {
          'name': '8',
          'id': '140',
          'checksum': ''
        }, {
          'name': '9',
          'id': '141',
          'checksum': ''
        }, {
          'name': '10',
          'id': '142',
          'checksum': ''
        }, {
          'name': '11',
          'id': '143',
          'checksum': ''
        }, {
          'name': '12',
          'id': '144',
          'checksum': ''
        }, {
          'name': '13',
          'id': '145',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Japão',
      'variations': [
        {
          'name': 'Sala de Aula A',
          'id': '873',
          'checksum': ''
        }, {
          'name': 'Sala de Aula B',
          'id': '874',
          'checksum': ''
        }, {
          'name': 'Armários Colégio: Dia',
          'id': '893',
          'checksum': ''
        }, {
          'name': 'Armários Colégio: Noite',
          'id': '894',
          'checksum': ''
        }, {
          'name': 'Banheiro A',
          'id': '876',
          'checksum': ''
        }, {
          'name': 'Banheiro B',
          'id': '877',
          'checksum': ''
        }, {
          'name': 'Banheiro C',
          'id': '878',
          'checksum': ''
        }, {
          'name': 'Banheiro D',
          'id': '879',
          'checksum': ''
        }, {
          'name': 'Bar',
          'id': '881',
          'checksum': ''
        }, {
          'name': 'Beco',
          'id': '892',
          'checksum': ''
        }, {
          'name': 'Floresta',
          'id': '880',
          'checksum': ''
        }, {
          'name': 'Rua A: Dia',
          'id': '882',
          'checksum': ''
        }, {
          'name': 'Rua A: Tarde',
          'id': '884',
          'checksum': ''
        }, {
          'name': 'Rua A: Noite',
          'id': '883',
          'checksum': ''
        }, {
          'name': 'Rua B: Dia',
          'id': '885',
          'checksum': ''
        }, {
          'name': 'Rua B: Tarde',
          'id': '887',
          'checksum': ''
        }, {
          'name': 'Rua B: Noite',
          'id': '886',
          'checksum': ''
        }, {
          'name': 'Rua C: Dia',
          'id': '888',
          'checksum': ''
        }, {
          'name': 'Rua C: Noite',
          'id': '889',
          'checksum': ''
        }, {
          'name': 'Rua D: Dia',
          'id': '890',
          'checksum': ''
        }, {
          'name': 'Rua D: Noite',
          'id': '891',
          'checksum': ''
        }, {
          'name': 'Rua E: Dia',
          'id': '948',
          'checksum': ''
        }, {
          'name': 'Rua E: Tarde',
          'id': '950',
          'checksum': ''
        }, {
          'name': 'Rua E: Noite',
          'id': '949',
          'checksum': ''
        }, {
          'name': 'Rua F: Dia',
          'id': '943',
          'checksum': ''
        }, {
          'name': 'Rua F: Tarde',
          'id': '945',
          'checksum': ''
        }, {
          'name': 'Rua F: Noite',
          'id': '944',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Quartos',
      'variations': [
        {
          'name': 'Quarto A: Dia',
          'id': '911',
          'checksum': ''
        }, {
          'name': 'Quarto A: Tarde',
          'id': '915',
          'checksum': ''
        }, {
          'name': 'Quarto A: Noite #1',
          'id': '913',
          'checksum': ''
        }, {
          'name': 'Quarto A: Noite #2',
          'id': '914',
          'checksum': ''
        }, {
          'name': 'Quarto B: Dia',
          'id': '916',
          'checksum': ''
        }, {
          'name': 'Quarto B: Noite',
          'id': '917',
          'checksum': ''
        }, {
          'name': 'Quarto C: Dia',
          'id': '918',
          'checksum': ''
        }, {
          'name': 'Quarto C: Tarde',
          'id': '921',
          'checksum': ''
        }, {
          'name': 'Quarto C: Noite #1',
          'id': '919',
          'checksum': ''
        }, {
          'name': 'Quarto C: Noite #2',
          'id': '920',
          'checksum': ''
        }, {
          'name': 'Quarto D: Dia',
          'id': '959',
          'checksum': ''
        }, {
          'name': 'Quarto D: Tarde',
          'id': '961',
          'checksum': ''
        }, {
          'name': 'Quarto D: Escuro',
          'id': '960',
          'checksum': ''
        }, {
          'name': 'Quarto D: Janelas Fechadas',
          'id': '958',
          'checksum': ''
        }, {
          'name': 'Quarto E: Dia',
          'id': '965',
          'checksum': ''
        }, {
          'name': 'Quarto E: Tarde',
          'id': '967',
          'checksum': ''
        }, {
          'name': 'Quarto E: Escuro',
          'id': '966',
          'checksum': ''
        }, {
          'name': 'Quarto E: Janelas Fechadas',
          'id': '964',
          'checksum': ''
        }, {
          'name': 'Quarto F: Dia',
          'id': '1001',
          'checksum': ''
        }, {
          'name': 'Quarto F: Noite',
          'id': '1002',
          'checksum': ''
        }, {
          'name': 'Quarto F: Claro',
          'id': '962',
          'checksum': ''
        }, {
          'name': 'Quarto F: Escuro',
          'id': '963',
          'checksum': ''
        }, {
          'name': 'Quarto G: Dia',
          'id': '1003',
          'checksum': ''
        }, {
          'name': 'Quarto G: Noite',
          'id': '1004',
          'checksum': ''
        }, {
          'name': 'Quarto H',
          'id': '1005',
          'checksum': ''
        }, {
          'name': 'Quarto I',
          'id': '1006',
          'checksum': ''
        }, {
          'name': 'Quarto J',
          'id': '1007',
          'checksum': ''
        }, {
          'name': 'Quarto K',
          'id': '1008',
          'checksum': ''
        }, {
          'name': 'Quarto L',
          'id': '1009',
          'checksum': ''
        }, {
          'name': 'Quarto M',
          'id': '1010',
          'checksum': ''
        }, {
          'name': 'Quarto N: Dia',
          'id': '1011',
          'checksum': ''
        }, {
          'name': 'Quarto N: Tarde',
          'id': '1012',
          'checksum': ''
        }, {
          'name': 'Quarto O: Dia',
          'id': '1013',
          'checksum': ''
        }, {
          'name': 'Quarto O: Tarde',
          'id': '1015',
          'checksum': ''
        }, {
          'name': 'Quarto O: Noite',
          'id': '1014',
          'checksum': ''
        }, {
          'name': 'Quarto de Casal',
          'id': '968',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Mundo Alternativo',
      'variations': [
        {
          'name': 'Normal',
          'id': '128',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Dimensão Desconhecida',
      'variations': [
        {
          'name': 'Normal',
          'id': '31',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Montanha Nevada',
      'variations': [
        {
          'name': '1',
          'id': '111',
          'checksum': ''
        }, {
          'name': '2',
          'id': '112',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Natal',
      'variations': [
        {
          'name': 'Neve',
          'id': '38',
          'checksum': ''
        }, {
          'name': 'Casa',
          'id': '115',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Estábulo de Renas',
      'variations': [
        {
          'name': '1',
          'id': '113',
          'checksum': ''
        }, {
          'name': '2',
          'id': '114',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Halloween',
      'variations': [
        {
          'name': 'Lago',
          'id': '100',
          'checksum': ''
        }, {
          'name': 'Caminho',
          'id': '102',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Casa da Bruxa',
      'variations': [
        {
          'name': 'Entrada',
          'id': '101',
          'checksum': ''
        }, {
          'name': 'Porta',
          'id': '99',
          'checksum': ''
        }, {
          'name': 'Interior',
          'id': '98',
          'checksum': ''
        }
      ]
    }
  ]
};

var clear_configs, draw_avatar, draw_avatar_dest, draw_avatar_portrait, get_config, get_player_avatar, get_player_info, load_from_file, load_region, load_settings, load_username, populate_avatars, populate_regions, populate_scenes, populate_scenes_sub, set_config, sort_assets;

Storage.prototype.setObject = function(key, value) {
  return this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key) {
  var value;
  return (value = this.getItem(key)) && JSON.parse(value);
};

set_config = function(key, value) {
  return localStorage.setItem(key, value);
};

get_config = function(key, default_value) {
  if (default_value == null) {
    default_value = void 0;
  }
  return localStorage.getItem(key) || default_value;
};

clear_configs = function() {
  localStorage.clear();
  return window.location.reload();
};

load_from_file = function(file_in, img_out, bg_out) {
  var file, fr;
  file = document.getElementById(file_in);
  if (!file.files || !file.files.length) {
    console.log('No file selected');
    alert('Seleciona primeiro o ficheiro, baka!');
    return;
  }
  if (!FileReader) {
    console.log('FileReader not supported');
    return;
  }
  fr = new FileReader;
  fr.onload = function() {
    if (img_out) {
      document.querySelector(img_out).src = fr.result;
    }
    if (bg_out) {
      console.log(document.querySelector(bg_out));
      console.log(fr.result);
      return document.querySelector(bg_out).style.backgroundImage = 'url(' + fr.result + ')';
    }
  };
  return fr.readAsDataURL(file.files[0]);
};

load_settings = function() {
  load_region();
  return load_username();
};

load_region = function() {
  CONFIG.region = get_config('region', CONFIG.default_region);
  return console.info('Loaded REGION: ' + regions[CONFIG.region].id + ' - ' + regions[CONFIG.region].link);
};

load_username = function() {
  CONFIG.player.username = get_config('username', '');
  console.info('Loaded USERNAME: ' + CONFIG.player.username);
  document.getElementById('username_edit').value = CONFIG.player.username;
  return document.getElementById('username_submit').dispatchEvent(new Event('click'));
};

get_player_info = function(username, callback) {
  var hash, message, timestamp;
  if (!username) {
    callback(null);
  }
  timestamp = Date.now().toString();
  message = ['anonymous', 'GET', 'http://api2.' + regions[CONFIG.region].link + '/v2/profile/find/' + username, timestamp];
  hash = CryptoJS.HmacSHA1(message.join('+'), 'anonymous');
  $.ajax({
    url: "https://mcl.sandrohc.net/" + regions[CONFIG.region].id + "/v2/profile/find/" + username,
    headers: {
      "X-Beemoov-Application": 'anonymous',
      "X-Beemoov-Signature": hash,
      "X-Beemoov-Timestamp": timestamp
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.warn("Unable to fetch player info");
      return callback(null);
    },
    success: function(data) {
      return callback(data.data);
    }
  });
};

get_player_avatar = function(id, callback) {
  $.ajax({
    url: "https://mcl.sandrohc.net/" + regions[CONFIG.region].id + "/v2/avatar/" + id,
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error while fetching player avatar");
      return console.log(errorThrown);
    },
    success: function(data) {
      return callback(data.data);
    }
  });
};

draw_avatar_dest = null;

draw_avatar_portrait = null;

draw_avatar = function(is_portrait, dest) {
  var add_clothes, add_comma, avatar, bg, i, j, ref, site, timestamp, type;
  if (!CONFIG.player.avatar) {
    if (!CONFIG.player.id) {
      if (!CONFIG.player.info) {
        if (CONFIG.player.username) {
          timestamp = (new Date).getTime();
          dest.src = 'http://avatars.' + regions[CONFIG.region].link + '/' + (is_portrait ? 'face' : 'full') + '/' + CONFIG.player.username + '.' + timestamp + '.png';
        } else {
          dest.src = 'assets/img/' + (is_portrait ? 'face' : 'body') + '_unknown.png';
        }
        return;
      }
      CONFIG.player.id = CONFIG.player.info.player.id;
    }
    draw_avatar_dest = dest;
    draw_avatar_portrait = is_portrait;
    get_player_avatar(CONFIG.player.id, function(data) {
      CONFIG.player.avatar = data;
      return draw_avatar(draw_avatar_portrait, draw_avatar_dest);
    });
    return;
  }
  site = 'http://assets.' + regions[CONFIG.region].link + '/';
  type = is_portrait ? 'portrait' : 'normal';
  bg = '';
  avatar = CONFIG.player.avatar;
  add_comma = false;
  add_clothes = function(data, color, clothe_type) {
    if (data.category === 'Skin') {
      avatar.avatar.bodyType = data;
      avatar.avatar.bodyType.category = 'CUSTOM';
      return;
    }
    if (data.category === 'Wig') {
      avatar.avatar.hairType.category = 'CUSTOM';
    }
    if (add_comma) {
      bg += ',';
    }
    add_comma = true;
    bg += 'url(' + site + clothe_type + '/web/' + type + '/' + data.id + '-' + data.security;
    if (color) {
      bg += '_' + color.id + '-' + color.security;
    }
    return bg += '.png)';
  };
  for (i = j = ref = avatar.clothes.length - 1; ref <= 0 ? j <= 0 : j >= 0; i = ref <= 0 ? ++j : --j) {
    add_clothes(avatar.clothes[i], null, 'clothe');
  }
  add_clothes(avatar.avatar.headAccessory, null, 'avatarpart');
  add_clothes(avatar.avatar.mouthType, null, 'avatarpart');
  add_clothes(avatar.avatar.eyebrowsType, avatar.avatar.hairColor, 'avatarpart');
  add_clothes(avatar.avatar.eyeType, avatar.avatar.eyeColor, 'avatarpart');
  if (avatar.avatar.hairType.category === 'CUSTOM') {
    console.debug('Custom hair');
  } else {
    add_clothes(avatar.avatar.hairType, avatar.avatar.hairColor, 'avatarpart');
  }
  if (avatar.avatar.bodyType.category === 'CUSTOM') {
    console.debug('Custom body');
    add_clothes(avatar.avatar.bodyType, null, 'clothe');
  } else {
    add_clothes(avatar.avatar.bodyType, null, 'avatarpart');
  }
  dest.src = 'assets/img/' + (is_portrait ? 'face' : 'body') + '_placeholder.png';
  dest.style.backgroundImage = bg;
};

sort_assets = function() {
  var comparator;
  comparator = function(a, b) {
    a = a.name.toUpperCase();
    b = b.name.toUpperCase();
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  };
  ASSETS.avatars.sort(comparator);
  return ASSETS.emotions.sort(comparator);
};

populate_regions = function() {
  var select;
  select = document.getElementById('region_edit');
  regions.forEach(function(e, i) {
    var el;
    el = document.createElement('option');
    el.textContent = e.name + ' — ' + e.link;
    el.value = i;
    el.selected = i === parseInt(CONFIG.region, 10) ? 'true' : void 0;
    return select.appendChild(el);
  });
  return $(select).material_select();
};

populate_scenes = function(selected) {
  var select;
  select = document.getElementById('scene_edit');
  ASSETS.scenes.forEach(function(e, i) {
    var el;
    el = document.createElement('option');
    el.textContent = e.name;
    el.value = i;
    el.selected = e.name === selected ? 'true' : void 0;
    return select.appendChild(el);
  });
  $(select).material_select();
  return select.dispatchEvent(new Event('change'));
};

populate_scenes_sub = function(index, input) {
  var scene;
  while (input.options.length > 0) {
    input.remove(0);
  }
  scene = ASSETS.scenes[index];
  scene.variations.forEach(function(e, i) {
    var el;
    el = document.createElement('option');
    el.textContent = e.name;
    el.value = i;
    el.dataset.scene = index;
    return input.appendChild(el);
  });
  $(input).material_select();
  return input.dispatchEvent(new Event('change'));
};

populate_avatars = function(selected) {
  var select;
  select = document.getElementById('avatar_edit');
  ASSETS.avatars.forEach(function(e, i) {
    var el;
    el = document.createElement('option');
    el.textContent = e.name;
    el.value = i;
    el.dataset.checksum = e.checksum;
    el.selected = e.name === selected ? 'true' : void 0;
    return select.appendChild(el);
  });
  return $(select).material_select();
};

var actors, actors_DOM, add_actor, empty_actor, get_actor, init_actors, populate_emotions, populate_emotions_sub, remove_actor, remove_all_actors, save_actors_to_cache, update_actor, update_actor_sub;

actors = [];

actors_DOM = [];

empty_actor = {
  name: CONFIG.default_actor,
  pos: {
    x: 0,
    y: 0
  },
  flipped: false
};

add_actor = function(info) {
  var div, id, img, label, remove_btn, remove_icon, root, select_actor, select_sub;
  if (info == null) {
    info = empty_actor;
  }
  id = actors.length + 1;
  root = document.createElement('div');
  div = document.createElement('div');
  div.classList.add('input-field', 'col', 's12', 'm5', 'actor_' + id);
  select_actor = document.createElement('select');
  select_actor.id = 'actor_' + id + '_edit';
  select_actor.className = 'actor_select';
  select_actor.dataset.actor = id;
  label = document.createElement('label');
  label["for"] = 'actor_' + id + '_edit';
  label.textContent = vegito('{{character}} ' + id, LANG);
  div.appendChild(select_actor);
  div.appendChild(label);
  root.appendChild(div);
  $(select_actor).on('change', update_actor);
  $(select_actor).on('keyup', update_actor);
  div = document.createElement('div');
  div.classList.add('input-field', 'col', 's12', 'm5', 'actor_' + id);
  select_sub = document.createElement('select');
  select_sub.id = 'actor_' + id + '_sub';
  select_sub.dataset.actor = id;
  div.appendChild(select_sub);
  root.appendChild(div);
  $(select_sub).on('change', update_actor_sub);
  $(select_sub).on('keyup', update_actor_sub);
  div = document.createElement('div');
  div.classList.add('input-field', 'col', 's6', 'm2', 'actor_' + id);
  div.style.height = '66px';
  remove_btn = document.createElement('a');
  remove_btn.classList.add('btn-floating', 'waves-effect', 'waves-light', 'red');
  remove_btn.onclick = function() {
    return remove_actor(id);
  };
  remove_icon = document.createElement('i');
  remove_icon.classList.add('material-icons');
  remove_icon.textContent = 'remove_circle_outline';
  remove_btn.appendChild(remove_icon);
  div.appendChild(remove_btn);
  root.appendChild(div);
  document.getElementById('actors').appendChild(root);
  img = document.createElement('img');
  img.id = 'actor_' + id;
  img.classList.add('actor', 'draggable');
  img.alt = vegito('{{character}} ' + id, LANG);
  img.style.bottom = 0;
  img.style.left = Math.min(id * 400 - 200, 750) + 'px';
  img.dataset.actor = id;
  img.style.webkitTransform = img.style.transform = 'translate(' + info.pos.x + 'px, ' + info.pos.y + 'px) scaleX(' + (info.flipped ? -1 : 1) + ')';
  document.getElementById('scene').appendChild(img);
  actors.push(info);
  actors_DOM.push({
    config: root,
    select: select_actor,
    select_sub: select_sub,
    scene: img
  });
  save_actors_to_cache();
  populate_emotions(select_actor, info.name);
  populate_emotions_sub(select_sub);
};

get_actor = function(id) {
  return actors[id - 1];
};

remove_actor = function(id) {
  var actor;
  console.debug('Removing ' + id);
  actor = actors_DOM[id - 1];
  if (!actor) {
    console.warn('Actor with ID ' + id + ' not found. Can\'t remove');
    return;
  }
  actor.root.parentNode.removeChild(actor.root);
  actor.scene.parentNode.removeChild(actor.scene);
  actors[id - 1] = void 0;
  return actors_DOM[id - 1] = void 0;
};

remove_all_actors = function() {
  var actor, j, len, results;
  results = [];
  for (j = 0, len = actors.length; j < len; j++) {
    actor = actors[j];
    results.push(remove_actor(actor.id));
  }
  return results;
};

init_actors = function() {
  var actor, actor_cache, j, len;
  actor_cache = localStorage.getObject('actors') || [];
  if (actor_cache.length === 0) {
    actor_cache.push({
      name: 'Nathaniel',
      pos: {
        x: -16,
        y: 0
      },
      flipped: false
    });
    actor_cache.push({
      name: 'Castiel',
      pos: {
        x: -26,
        y: 0
      },
      flipped: false
    });
    console.debug('No actors in cache. Loading defaults');
  }
  for (j = 0, len = actor_cache.length; j < len; j++) {
    actor = actor_cache[j];
    add_actor(actor);
  }
  return console.debug('Loaded ' + actor_cache.length + ' actors');
};

populate_emotions = function(select, selected) {
  ASSETS.emotions.forEach(function(emotion, i) {
    var option;
    option = document.createElement('option');
    option.textContent = emotion.name;
    option.value = i;
    option.selected = emotion.name === selected ? 'true' : void 0;
    return select.appendChild(option);
  });
  return $(select).material_select();
};

populate_emotions_sub = function(select) {
  var actor_el, emotion;
  while (select.options.length > 0) {
    select.remove(0);
  }
  actor_el = document.getElementById('actor_' + select.dataset.actor + '_edit');
  if (!actor_el) {
    console.log('Invalid actor for:');
    console.log(select);
    return;
  }
  emotion = ASSETS.emotions[actor_el.value];
  emotion.variations.forEach(function(variation, i) {
    var option;
    option = document.createElement('option');
    option.textContent = variation.name;
    option.value = i;
    option.dataset.emotion = actor_el.value;
    option.dataset.actor = actor_el.dataset.actor;
    return select.appendChild(option);
  });
  $(select).material_select();
  return select.dispatchEvent(new Event('change'));
};

update_actor = function() {
  return populate_emotions_sub(document.getElementById('actor_' + this.dataset.actor + '_sub'));
};

update_actor_sub = function() {
  var emotion, option_selected, target, variation;
  option_selected = this.options[this.selectedIndex];
  emotion = ASSETS.emotions[document.getElementById('actor_' + this.dataset.actor + '_edit').value];
  console.debug('Selected ACTOR: ' + emotion.name + ' (' + option_selected.textContent + ')');
  actors[this.dataset.actor - 1].name = emotion.name;
  save_actors_to_cache();
  target = document.getElementById('actor_' + this.dataset.actor);
  target.style.src = '';
  if (emotion.name === '[Nada]') {
    target.style.display = 'none';
    return;
  } else {
    target.style.display = 'block';
    if (emotion.name === '[Docete]') {
      draw_avatar(false, target);
      target.style.height = '150%';
      target.style.bottom = '-300px';
    } else {
      variation = emotion.variations[this.value];
      target.src = 'assets/img/emotion/' + variation.id + (variation.checksum ? '-' + variation.checksum : '') + '.png';
      target.style.backgroundImage = '';
      target.style.height = '92.24138%';
      target.style.bottom = '0';
    }
  }
};

save_actors_to_cache = function() {
  return localStorage.setObject('actors', actors);
};

var bubble, loveometer, loveometer_level, update_avatar, update_response, update_scene, update_scene_sub, update_username, update_username_btn;

update_scene = function() {
  var sub;
  sub = document.querySelector(this.dataset.sub);
  return populate_scenes_sub(this.value, sub);
};

update_scene_sub = function() {
  var scene, target, variation;
  scene = ASSETS.scenes[this.options[this.selectedIndex].dataset.scene];
  console.debug('Selected SCENE: ' + scene.name + ' (' + this.options[this.selectedIndex].textContent + ')');
  target = document.querySelector(this.dataset.target);
  variation = scene.variations[this.value];
  return target.style.backgroundImage = 'url(assets/img/scene/' + variation.id + (variation.checksum ? '-' + variation.checksum : '') + '.jpg)';
};

loveometer_level = function() {
  var lovelevel_visible;
  lovelevel_visible = document.getElementById('lovelevel_visible');
  lovelevel_visible.checked = true;
  lovelevel_visible.dispatchEvent(new Event('change'));
  document.querySelector('#loveometer .gauge').style.height = this.value / 2 + 50 + '%';
  return document.querySelector('#loveometer .heart-text').innerHTML = this.value + '%';
};

loveometer = function() {
  return document.getElementById('loveometer').style.display = this.checked ? 'block' : 'none';
};

bubble = function() {
  if (this.value !== '') {
    document.querySelector('.bubble').style.display = 'block';
    return document.querySelector('.bubble').innerHTML = this.value.replace(/\n/g, '<br>');
  } else {
    return document.querySelector('.bubble').style.display = 'none';
  }
};

update_response = function() {
  if (this.value !== '') {
    document.querySelector('.responses-wrapper').style.display = 'block';
    document.querySelector('.player').style.display = 'block';
    document.querySelector('.responses').innerHTML = '<li class="response"><span class="text">' + this.value.replace(/\n/gi, '</span></li><li class="response"><span class="text">') + '</span></li>';
    return document.querySelectorAll('.response').forEach(function(el) {
      return el.addEventListener('click', (function(e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        return e.target.classList.toggle('checked');
      }), false);
    });
  } else {
    document.querySelector('.responses-wrapper').style.display = 'none';
    return document.querySelector('.player').style.display = 'none';
  }
};

update_username_btn = function() {
  CONFIG.player.username = document.getElementById('username_edit').value || 'd';
  CONFIG.region = document.getElementById('region_edit').value;
  set_config('username', CONFIG.player.username);
  set_config('region', CONFIG.region);
  return get_player_info(CONFIG.player.username, function(data) {
    var el, eventChange, i, len, query, ref;
    CONFIG.player.info = data;
    if (CONFIG.player.info) {
      CONFIG.player.id = CONFIG.player.info.player.id;
    }
    eventChange = new Event('change');
    ref = document.getElementsByClassName('actor_select');
    for (i = 0, len = ref.length; i < len; i++) {
      el = ref[i];
      if (el.options && el.options[el.selectedIndex].text === '[Docete]') {
        el.dispatchEvent(eventChange);
      }
    }
    query = document.getElementById('avatar_edit');
    if (query.options[query.selectedIndex].text === '[Docete]') {
      return query.dispatchEvent(eventChange);
    }
  });
};

update_username = function(key) {
  if (key.keyCode === 13) {
    key.preventDefault();
    return update_username_btn();
  }
};

update_avatar = function() {
  var avatar, el;
  avatar = ASSETS.avatars[this.value];
  el = document.querySelector('.player-avatar');
  el.src = '';
  if (avatar.name === '[Nada]') {
    el.style.display = 'none';
    return;
  } else {
    el.style.display = 'block';
  }
  if (avatar.name === '[Docete]') {
    el.style.bottom = '70px';
    draw_avatar(true, el);
  } else {
    el.style.bottom = '0';
    el.style.backgroundImage = '';
    el.src = 'assets/img/avatar/' + avatar.id + (avatar.checksum ? '-' + avatar.checksum : '') + '.png';
  }
};

var get_lang, languages, load_lang, populate_lang, update_lang,
  hasProp = {}.hasOwnProperty;

languages = {};

languages['pt'] = {
  name: 'Português'
};

languages['en'] = {
  name: 'English'
};

get_lang = function() {
  var language;
  language = get_config('lang') || navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
  language = language.split('-')[0];
  if (languages[language] === void 0) {
    language = CONFIG.default_lang;
  }
  return language;
};

load_lang = function(lang) {
  var el;
  set_config('lang', lang);
  el = document.createElement('script');
  el.setAttribute('src', 'dist/js/lang.' + lang + '.js');
  el.onload = function() {
    console.info('Loaded LANG: ' + get_lang());
    document.body.innerHTML = vegito(document.body.innerHTML, LANG);
    return init();
  };
  return document.head.appendChild(el);
};

populate_lang = function() {
  var el, lang, language, select;
  language = get_lang();
  select = document.getElementById('lang_edit');
  for (lang in languages) {
    if (!hasProp.call(languages, lang)) continue;
    el = document.createElement('option');
    el.textContent = languages[lang].name;
    el.value = lang;
    el.selected = lang === language ? 'true' : void 0;
    select.appendChild(el);
  }
  return $(select).material_select();
};

update_lang = function() {
  var lang_selected;
  lang_selected = document.getElementById('lang_edit').value;
  if (lang_selected !== get_lang()) {
    set_config('lang', lang_selected);
    return window.location.reload();
  }
};

load_lang(get_lang());

var dragUpdatePos, highest_z_index, init, init_drag, snap_options;

init = function() {
  load_settings();
  (function(elements) {
    var el_name, event, results;
    results = [];
    for (el_name in elements) {
      if (elements.hasOwnProperty(el_name)) {
        results.push((function() {
          var results1;
          results1 = [];
          for (event in elements[el_name]) {
            if (elements[el_name].hasOwnProperty(event)) {
              results1.push($('#' + el_name).on(event, elements[el_name][event]));
            } else {
              results1.push(void 0);
            }
          }
          return results1;
        })());
      } else {
        results.push(void 0);
      }
    }
    return results;
  })({
    scene_edit: {
      change: update_scene,
      keyup: update_scene
    },
    scene_sub_edit: {
      change: update_scene_sub,
      keyup: update_scene_sub
    },
    lovelevel_edit: {
      input: loveometer_level
    },
    lovelevel_visible: {
      change: loveometer
    },
    bubble_edit: {
      keyup: bubble
    },
    response_edit: {
      keyup: update_response
    },
    username_submit: {
      click: update_username_btn
    },
    username_edit: {
      keyup: update_username
    },
    avatar_edit: {
      change: update_avatar,
      keyup: update_avatar
    },
    lang_edit: {
      change: update_lang,
      keyup: update_lang
    },
    clear_actors: {
      click: remove_all_actors
    },
    clear_cache: {
      click: clear_configs
    }
  });
  sort_assets();
  populate_regions();
  populate_lang();
  populate_scenes('Sala de Aula A');
  populate_avatars('[Docete]');
  init_actors();
  return $('ul.tabs').tabs();
};

highest_z_index = 0;

snap_options = {
  targets: [],
  range: 2e308,
  relativePoints: [
    {
      x: 0,
      y: 0
    }
  ]
};

init_drag = function() {
  var snap_enabled, snap_size;
  snap_enabled = false;
  snap_size = 50;
  snap_options.targets[0] = interact.createSnapGrid({
    x: snap_size,
    y: snap_size
  });
  return interact('.draggable').draggable({
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: {
        top: 0,
        left: 0,
        bottom: 1,
        right: 1
      }
    },
    inertia: !snap_enabled,
    snap: snap_enabled ? snap_options : {},
    onstart: function(event) {
      return event.target.style.zIndex = ++highest_z_index;
    },
    onmove: function(event) {
      var is_actor;
      is_actor = event.target.className.indexOf('actor') !== -1;
      if (is_actor && !event.shiftKey) {
        event.dy = 0;
      }
      return dragUpdatePos(event, event.target);
    },
    onend: function(event) {
      return save_actors_to_cache();
    }
  }).on('doubletap', function(event) {
    var actor, is_actor;
    is_actor = event.target.className.indexOf('actor') !== -1;
    if (!is_actor) {
      return;
    }
    actor = get_actor(event.target.dataset.actor);
    actor.flipped = !actor.flipped;
    save_actors_to_cache();
    return dragUpdatePos(event, event.currentTarget);
  });
};

dragUpdatePos = function(event, target) {
  var info, x, y;
  info = get_actor(event.target.dataset.actor) || empty_actor;
  x = info.pos.x + (event.dx || 0);
  y = info.pos.y + (event.dy || 0);
  target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px) scaleX(' + (info.flipped ? -1 : 1) + ')';
  info.pos.x = x;
  return info.pos.y = y;
};
