var CONFIG;

CONFIG = {
  'version': '1.0.0',
  'use_sucrette': 'Usar Ficheiro',
  'title': 'My Candy Love Editor',
  'description': 'Amor Doce cenas editor.',
  'welcome': 'Bem-vindo ao editor não oficial do Amor Doce! Uma ferramenta criada com Amor por <a href="https://tumblr.com/follow/lucasmciruzzi">Lucas</a> e <a href="https://tumblr.com/follow/myasaberhagen">Mya</a>. Esperemos que você se divirta! Você pode publicar as suas criações em <a href="https://tumblr.com/tagged/mcleditor">#mcleditor</a>.',
  'account': 'Conta',
  'region': 'Região',
  'username': 'Nome',
  'username_placeholder': 'Nome de usuário (NÃO o seu e-mail)',
  'change_avatar': 'Carregar Avatar',
  'love_level': 'Barra do Amor',
  'chat': 'Diálogo',
  'characters_bubble': 'Bolha de fala',
  'position': 'Posição',
  'answers': 'Respostas (ENTER para separar)',
  'scene': 'Lugar',
  'characters': 'Personagens',
  'avatar': 'Avatar',
  'character': 'Caráter',
  'legal': 'Todas as imagens pertencem a <a href="//beemoov.com">Beemoov</a> e <a href="//chinomiko.com">ChinoMiko</a>',
  'view_result': 'Ver resultado',
  'regions': [
    {
      'id': 'br',
      'name': 'Brazil — amordoce.com'
    }, {
      'id': 'us',
      'name': 'USA — mycandylove.com'
    }, {
      'id': 'de',
      'name': 'Germany — sweetamoris.de'
    }, {
      'id': 'es',
      'name': 'Spain — corazondemelon.es'
    }, {
      'id': 'fi',
      'name': 'Finland — flirttistoori.com'
    }, {
      'id': 'fr',
      'name': 'France — amoursucre.com'
    }, {
      'id': 'hu',
      'name': 'Hungary — csabitasboljeles.hu'
    }, {
      'id': 'it',
      'name': 'Italy — dolceflirt.it'
    }, {
      'id': 'jp',
      'name': 'Japan — mycandylove.jp'
    }, {
      'id': 'mx',
      'name': 'Mexico — corazondebombon.com'
    }, {
      'id': 'pl',
      'name': 'Poland — slodkiflirt.pl'
    }, {
      'id': 'uk',
      'name': 'United Kingdom — sweetcrush.co.uk'
    }, {
      'id': 'ro',
      'name': 'Romania — sweetflirt.ro'
    }, {
      'id': 'ru',
      'name': 'Russia — sladkiiflirt.ru'
    }, {
      'id': 'tr',
      'name': 'Turkey — askito-m.com'
    }
  ],
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
        }, {
          'name': 'Amiga #1',
          'id': '702',
          'checksum': '0984f335ae935183'
        }, {
          'name': 'Amiga #2',
          'id': '705',
          'checksum': '81f609f8e74bd734'
        }
      ]
    }, {
      'name': 'Armin',
      'variations': [
        {
          'name': 'Furioso A',
          'id': '128',
          'checksum': ''
        }, {
          'name': 'Furioso B',
          'id': '129',
          'checksum': ''
        }, {
          'name': 'Furioso C',
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
          'name': 'Sorrindo',
          'id': '3',
          'checksum': '5a487dc2b5742d3d'
        }, {
          'name': 'Corado',
          'id': '13',
          'checksum': ''
        }, {
          'name': 'Corado Sério',
          'id': '84',
          'checksum': ''
        }, {
          'name': 'Furioso',
          'id': '12',
          'checksum': '6901877cdefa6564'
        }, {
          'name': 'Beach Normal',
          'id': '79',
          'checksum': ''
        }, {
          'name': 'Beach Sorrindo',
          'id': '82',
          'checksum': ''
        }, {
          'name': 'Beach Corado',
          'id': '81',
          'checksum': ''
        }, {
          'name': 'Beach Corado Sério',
          'id': '83',
          'checksum': ''
        }, {
          'name': 'Beach Furioso',
          'id': '80',
          'checksum': ''
        }, {
          'name': 'Black hair Normal',
          'id': '218',
          'checksum': ''
        }, {
          'name': 'Black hair Sorrindo A',
          'id': '220',
          'checksum': ''
        }, {
          'name': 'Black hair Sorrindo B',
          'id': '221',
          'checksum': ''
        }, {
          'name': 'Black hair Sorrindo C',
          'id': '222',
          'checksum': ''
        }, {
          'name': 'Black hair Furioso',
          'id': '219',
          'checksum': ''
        }, {
          'name': 'Brown Jacket Normal',
          'id': '231',
          'checksum': ''
        }, {
          'name': 'Brown Jacket Sorrindo',
          'id': '233',
          'checksum': ''
        }, {
          'name': 'Brown Jacket Furioso',
          'id': '232',
          'checksum': ''
        }, {
          'name': 'Brown Jacket Apathetic',
          'id': '260',
          'checksum': ''
        }, {
          'name': 'New look Normal',
          'id': '273',
          'checksum': ''
        }, {
          'name': 'New look Sorrindo',
          'id': '271',
          'checksum': ''
        }, {
          'name': 'New look Corado Sério',
          'id': '274',
          'checksum': ''
        }, {
          'name': 'New look Furioso',
          'id': '272',
          'checksum': ''
        }, {
          'name': 'Sweatshirt Normal',
          'id': '175',
          'checksum': ''
        }, {
          'name': 'Track-suit Normal',
          'id': '139',
          'checksum': ''
        }, {
          'name': 'Track-suit Sorrindo',
          'id': '140',
          'checksum': ''
        }, {
          'name': 'Track-suit Corado',
          'id': '142',
          'checksum': ''
        }, {
          'name': 'Track-suit Corado Sério',
          'id': '143',
          'checksum': ''
        }, {
          'name': 'Track-suit Furioso',
          'id': '141',
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
          'name': 'Furioso',
          'id': '31',
          'checksum': '2f5207a31e66fa53'
        }
      ]
    }, {
      'name': 'Dake',
      'variations': [
        {
          'name': 'Normal',
          'id': '90',
          'checksum': ''
        }, {
          'name': 'Sorrindo A',
          'id': '91',
          'checksum': ''
        }, {
          'name': 'Sorrindo B',
          'id': '92',
          'checksum': ''
        }, {
          'name': 'Dress Sorrindo glasses B',
          'id': '286',
          'checksum': ''
        }, {
          'name': 'Dress Normal',
          'id': '281',
          'checksum': ''
        }, {
          'name': 'Dress Normal glasses',
          'id': '282',
          'checksum': ''
        }, {
          'name': 'Dress Sorrindo A',
          'id': '283',
          'checksum': ''
        }, {
          'name': 'Dress Sorrindo B',
          'id': '285',
          'checksum': ''
        }, {
          'name': 'Dress Sorrindo glasses A',
          'id': '284',
          'checksum': ''
        }, {
          'name': 'Dress beaten Normal',
          'id': '290',
          'checksum': ''
        }, {
          'name': 'Dress beaten Sorrindo',
          'id': '292',
          'checksum': ''
        }, {
          'name': 'Dress beaten Embaraçado',
          'id': '291',
          'checksum': ''
        }, {
          'name': 'Track-suit Normal',
          'id': '164',
          'checksum': ''
        }, {
          'name': 'Track-suit Sorrindo A',
          'id': '165',
          'checksum': ''
        }, {
          'name': 'Track-suit Sorrindo B',
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
          'name': 'Furioso',
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
          'name': 'Furioso',
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
          'name': 'Traje: Furioso',
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
          'name': 'Furioso',
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
          'name': 'Furioso A',
          'id': '205',
          'checksum': ''
        }, {
          'name': 'Furioso B',
          'id': '210',
          'checksum': ''
        }, {
          'name': 'Furioso C',
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
          'name': 'Furioso',
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
          'name': 'Beach Furioso',
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
          'name': 'Track-suit Furioso',
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
          'name': 'Furioso',
          'id': '10',
          'checksum': '08b993876cef7584'
        }, {
          'name': 'Beach Normal',
          'id': '100',
          'checksum': ''
        }, {
          'name': 'Beach Sorrindo',
          'id': '101',
          'checksum': ''
        }, {
          'name': 'Beach Corado',
          'id': '103',
          'checksum': ''
        }, {
          'name': 'Beach Furioso',
          'id': '102',
          'checksum': ''
        }, {
          'name': 'New look Normal',
          'id': '269',
          'checksum': ''
        }, {
          'name': 'New look Sorrindo',
          'id': '267',
          'checksum': ''
        }, {
          'name': 'New look Corado',
          'id': '270',
          'checksum': ''
        }, {
          'name': 'New look Furioso',
          'id': '268',
          'checksum': ''
        }, {
          'name': 'Track-suit Furioso',
          'id': '137',
          'checksum': ''
        }, {
          'name': 'Track-suit Normal',
          'id': '135',
          'checksum': ''
        }, {
          'name': 'Track-suit Sorrindo',
          'id': '136',
          'checksum': ''
        }, {
          'name': 'Track-suit Corado',
          'id': '138',
          'checksum': ''
        }, {
          'name': 'Vest Normal',
          'id': '223',
          'checksum': ''
        }, {
          'name': 'Vest Sorrindo',
          'id': '225',
          'checksum': ''
        }, {
          'name': 'Vest Corado',
          'id': '226',
          'checksum': ''
        }, {
          'name': 'Vest Furioso',
          'id': '224',
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
          'name': 'Tongue',
          'id': '213',
          'checksum': ''
        }, {
          'name': 'Evil',
          'id': '211',
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
          'name': 'Sorrindo',
          'id': '56',
          'checksum': ''
        }, {
          'name': 'Furioso',
          'id': '55',
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
          'name': 'Sorrindo',
          'id': '43',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '44',
          'checksum': ''
        }, {
          'name': 'Furioso A',
          'id': '42',
          'checksum': ''
        }, {
          'name': 'Beach Normal',
          'id': '95',
          'checksum': ''
        }, {
          'name': 'Beach Sorrindo',
          'id': '93',
          'checksum': ''
        }, {
          'name': 'Beach Furioso',
          'id': '94',
          'checksum': ''
        }, {
          'name': 'Pajamas',
          'id': '73',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Docete Mamãe',
      'variations': [
        {
          'name': 'Normal',
          'id': '998',
          'checksum': ''
        }
      ]
    }, {
      'name': 'Docete Papai',
      'variations': [
        {
          'name': 'Normal',
          'id': '999',
          'checksum': ''
        }
      ]
    }, {
      'name': 'The Principal',
      'variations': [
        {
          'name': 'Normal',
          'id': '8',
          'checksum': '0f830c80a70bc366'
        }, {
          'name': 'Furioso',
          'id': '15',
          'checksum': 'bfb519e862a6c5c5'
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
          'name': 'Corado',
          'id': '64',
          'checksum': ''
        }, {
          'name': 'Triste',
          'id': '65',
          'checksum': ''
        }, {
          'name': 'Track-suit Normal',
          'id': '155',
          'checksum': ''
        }, {
          'name': 'Track-suit Sorrindo',
          'id': '156',
          'checksum': ''
        }, {
          'name': 'Track-suit Triste',
          'id': '168',
          'checksum': ''
        }, {
          'name': 'Pajamas',
          'id': '76',
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
      'checksum': ''
    }, {
      'name': 'Castiel',
      'id': '2',
      'checksum': '35d8889c06baa039'
    }, {
      'name': 'Ken',
      'id': '6',
      'checksum': '3b464ff64c2bd151'
    }, {
      'name': 'Diretora',
      'id': '7',
      'checksum': ''
    }, {
      'name': 'Amber',
      'id': '10',
      'checksum': ''
    }, {
      'name': 'Iris',
      'id': '11',
      'checksum': ''
    }, {
      'name': 'ChiNoMiko',
      'id': '12',
      'checksum': ''
    }, {
      'name': 'Boris',
      'id': '15',
      'checksum': ''
    }, {
      'name': 'Jade',
      'id': '18',
      'checksum': ''
    }, {
      'name': 'Dajan',
      'id': '19',
      'checksum': ''
    }, {
      'name': 'Prof. Faraize',
      'id': '20',
      'checksum': ''
    }, {
      'name': 'Rosalya',
      'id': '22',
      'checksum': ''
    }, {
      'name': 'Rosalya (Antiga)',
      'id': '22_old',
      'checksum': ''
    }, {
      'name': 'Lysandre',
      'id': '23',
      'checksum': ''
    }, {
      'name': 'Peggy',
      'id': '24',
      'checksum': ''
    }, {
      'name': 'Melody',
      'id': '25',
      'checksum': ''
    }, {
      'name': 'Bia',
      'id': '26',
      'checksum': ''
    }, {
      'name': 'Violette',
      'id': '27',
      'checksum': ''
    }, {
      'name': 'Kim',
      'id': '28',
      'checksum': ''
    }, {
      'name': 'Leigh',
      'id': '29',
      'checksum': ''
    }, {
      'name': 'Dragon',
      'id': '30',
      'checksum': ''
    }, {
      'name': 'Dake',
      'id': '31',
      'checksum': ''
    }, {
      'name': 'Dimitri',
      'id': '32',
      'checksum': ''
    }, {
      'name': 'Morcego',
      'id': '33',
      'checksum': ''
    }, {
      'name': 'Alexy',
      'id': '34',
      'checksum': ''
    }, {
      'name': 'Armin',
      'id': '35',
      'checksum': ''
    }, {
      'name': 'Cotton',
      'id': '36',
      'checksum': ''
    }, {
      'name': 'Wenka & Willi',
      'id': '37',
      'checksum': ''
    }, {
      'name': 'Kentin',
      'id': '38',
      'checksum': ''
    }, {
      'name': 'Nina',
      'id': '39',
      'checksum': ''
    }, {
      'name': 'Deborah',
      'id': '40',
      'checksum': ''
    }, {
      'name': 'Viktor',
      'id': '41',
      'checksum': ''
    }, {
      'name': 'Tije',
      'id': '42',
      'checksum': ''
    }, {
      'name': 'Dark Louis',
      'id': '43',
      'checksum': ''
    }, {
      'name': 'WTF',
      'id': '44',
      'checksum': ''
    }, {
      'name': 'Lety',
      'id': '48',
      'checksum': ''
    }, {
      'name': 'Pai de Docete',
      'id': '49',
      'checksum': ''
    }, {
      'name': 'Vendedora',
      'id': '53',
      'checksum': ''
    }, {
      'name': 'Prof. Delanay',
      'id': '54',
      'checksum': ''
    }, {
      'name': 'Thomas',
      'id': '55',
      'checksum': ''
    }, {
      'name': 'Priya',
      'id': '56',
      'checksum': ''
    }, {
      'name': 'Cookie',
      'id': '57',
      'checksum': ''
    }, {
      'name': 'Patrick',
      'id': '58',
      'checksum': ''
    }, {
      'name': 'Cupido',
      'id': '59',
      'checksum': ''
    }, {
      'name': 'Mãe de Docete',
      'id': '60',
      'checksum': ''
    }, {
      'name': 'Charlotte',
      'id': '62',
      'checksum': ''
    }, {
      'name': 'Li',
      'id': '63',
      'checksum': ''
    }, {
      'name': 'Pai de Nathaniel e Ambre',
      'id': '64',
      'checksum': ''
    }, {
      'name': 'Mãe de Nathaniel e Ambre',
      'id': '65',
      'checksum': ''
    }, {
      'name': 'Pai de Castiel',
      'id': '66',
      'checksum': ''
    }, {
      'name': 'Mãe de Castiel',
      'id': '67',
      'checksum': ''
    }, {
      'name': 'Pai de Kentin',
      'id': '68',
      'checksum': ''
    }, {
      'name': 'Mãe de Kentin',
      'id': '69',
      'checksum': ''
    }, {
      'name': 'Pai de Lysandre e Leigh',
      'id': '70',
      'checksum': ''
    }, {
      'name': 'Mãe de Lysandre e Leigh',
      'id': '71',
      'checksum': ''
    }, {
      'name': 'Pai de Armin e Alexy',
      'id': '72',
      'checksum': ''
    }, {
      'name': 'Mãe de Armin e Alexy',
      'id': '73',
      'checksum': ''
    }, {
      'name': 'Mãe de Iris e Thomas',
      'id': '74',
      'checksum': ''
    }, {
      'name': 'Pai de Violette',
      'id': '75',
      'checksum': ''
    }, {
      'name': 'Pai de Rosalya',
      'id': '76',
      'checksum': ''
    }, {
      'name': 'Mãe de Rosalya',
      'id': '77',
      'checksum': ''
    }, {
      'name': 'Pai de Kim',
      'id': '78',
      'checksum': ''
    }, {
      'name': 'Mãe de Kim',
      'id': '79',
      'checksum': ''
    }, {
      'name': 'Pai de Peggy',
      'id': '80',
      'checksum': ''
    }, {
      'name': 'Mãe de Peggy',
      'id': '81',
      'checksum': ''
    }, {
      'name': 'Pai de Bia',
      'id': '82',
      'checksum': ''
    }, {
      'name': 'Mãe de Bia',
      'id': '83',
      'checksum': ''
    }, {
      'name': 'Pai de Melody',
      'id': '84',
      'checksum': ''
    }, {
      'name': 'Mãe de Melody',
      'id': '85',
      'checksum': ''
    }, {
      'name': 'Pai de Li',
      'id': '86',
      'checksum': ''
    }, {
      'name': 'Mãe de Li',
      'id': '87',
      'checksum': ''
    }, {
      'name': 'Pai de Charlotte',
      'id': '88',
      'checksum': ''
    }, {
      'name': 'Mãe de Charlotte',
      'id': '89',
      'checksum': ''
    }, {
      'name': 'Enfermeira',
      'id': '90',
      'checksum': ''
    }, {
      'name': 'Socorro',
      'id': '91',
      'checksum': ''
    }, {
      'name': 'Médico',
      'id': '92',
      'checksum': ''
    }, {
      'name': 'Samuel (Sam)',
      'id': '93',
      'checksum': ''
    }, {
      'name': 'Nathaniel (Novo Visual)',
      'id': '130',
      'checksum': ''
    }, {
      'name': 'Castiel (Novo Visual)',
      'id': '131',
      'checksum': ''
    }, {
      'name': 'Ambre (Nova)',
      'id': '134',
      'checksum': ''
    }, {
      'name': 'Lysandre (Novo)',
      'id': '135',
      'checksum': ''
    }, {
      'name': 'Kentin (Novo)',
      'id': '136',
      'checksum': ''
    }, {
      'name': 'Pais de Docete',
      'id': '138',
      'checksum': ''
    }, {
      'name': 'Ambre e amigas',
      'id': '139',
      'checksum': ''
    }, {
      'name': 'Lysandre (Novo Visual)',
      'id': '140',
      'checksum': ''
    }, {
      'name': 'Alexy (Novo)',
      'id': '141',
      'checksum': ''
    }, {
      'name': 'Armin (Novo)',
      'id': '142',
      'checksum': ''
    }, {
      'name': '[Nada]',
      'id': '0',
      'checksum': '-'
    }, {
      'name': '[Docete]',
      'id': 's',
      'checksum': '-'
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
