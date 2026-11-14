// A cópia compacta do CSV de demonstração é incorporada ao JavaScript para
// que a página funcione ao ser aberta diretamente, sem buscar arquivos locais.
const CSV_DEMONSTRACAO = "\"id_venda\",\"data\",\"produto\",\"categoria\",\"regiao\",\"quantidade\",\"preco_unitario\"\r\n\"1\",\"2025-01-11\",\"Suco natural\",\"Bebidas\",\"Centro-Oeste\",\"3\",\"9.50\"\r\n\"2\",\"2025-01-18\",\"X-Salada\",\"Lanches\",\"Sul\",\"4\",\"29.90\"\r\n\"3\",\"2025-01-25\",\"Suco natural\",\"Bebidas\",\"Centro-Oeste\",\"1\",\"9.50\"\r\n\"4\",\"2025-01-04\",\"X-Salada\",\"Lanches\",\"Sul\",\"2\",\"29.90\"\r\n\"5\",\"2025-01-11\",\"Suco natural\",\"Bebidas\",\"Nordeste\",\"3\",\"9.50\"\r\n\"6\",\"2025-01-18\",\"X-Salada\",\"Lanches\",\"Sul\",\"4\",\"29.90\"\r\n\"7\",\"2025-01-25\",\"Suco natural\",\"Bebidas\",\"Nordeste\",\"1\",\"9.50\"\r\n\"8\",\"2025-01-04\",\"X-Salada\",\"Lanches\",\"Sudeste\",\"2\",\"29.90\"\r\n\"9\",\"2025-01-11\",\"Suco natural\",\"Bebidas\",\"Nordeste\",\"3\",\"9.50\"\r\n\"10\",\"2025-01-18\",\"X-Salada\",\"Lanches\",\"Sudeste\",\"4\",\"29.90\"\r\n\"11\",\"2025-01-25\",\"Suco natural\",\"Bebidas\",\"Norte\",\"1\",\"9.50\"\r\n\"12\",\"2025-01-04\",\"X-Salada\",\"Lanches\",\"Sudeste\",\"2\",\"29.90\"\r\n\"13\",\"2025-01-11\",\"Suco natural\",\"Bebidas\",\"Norte\",\"3\",\"9.50\"\r\n\"14\",\"2025-01-18\",\"X-Salada\",\"Lanches\",\"Centro-Oeste\",\"4\",\"29.90\"\r\n\"15\",\"2025-01-25\",\"Suco natural\",\"Bebidas\",\"Norte\",\"1\",\"9.50\"\r\n\"16\",\"2025-01-04\",\"X-Salada\",\"Lanches\",\"Centro-Oeste\",\"2\",\"29.90\"\r\n\"17\",\"2025-01-11\",\"Suco natural\",\"Bebidas\",\"Sul\",\"3\",\"9.50\"\r\n\"18\",\"2025-02-21\",\"Batata frita\",\"Acompanhamentos\",\"Centro-Oeste\",\"1\",\"14.50\"\r\n\"19\",\"2025-02-28\",\"Brownie\",\"Sobremesas\",\"Sul\",\"2\",\"12.00\"\r\n\"20\",\"2025-02-07\",\"Batata frita\",\"Acompanhamentos\",\"Nordeste\",\"3\",\"14.50\"\r\n\"21\",\"2025-02-14\",\"Brownie\",\"Sobremesas\",\"Sul\",\"4\",\"12.00\"\r\n\"22\",\"2025-02-21\",\"Batata frita\",\"Acompanhamentos\",\"Nordeste\",\"1\",\"14.50\"\r\n\"23\",\"2025-02-28\",\"Brownie\",\"Sobremesas\",\"Sudeste\",\"2\",\"12.00\"\r\n\"24\",\"2025-02-07\",\"Batata frita\",\"Acompanhamentos\",\"Nordeste\",\"3\",\"14.50\"\r\n\"25\",\"2025-02-14\",\"Brownie\",\"Sobremesas\",\"Sudeste\",\"4\",\"12.00\"\r\n\"26\",\"2025-02-21\",\"Batata frita\",\"Acompanhamentos\",\"Norte\",\"1\",\"14.50\"\r\n\"27\",\"2025-02-28\",\"Brownie\",\"Sobremesas\",\"Sudeste\",\"2\",\"12.00\"\r\n\"28\",\"2025-02-07\",\"Batata frita\",\"Acompanhamentos\",\"Norte\",\"3\",\"14.50\"\r\n\"29\",\"2025-02-14\",\"Brownie\",\"Sobremesas\",\"Centro-Oeste\",\"4\",\"12.00\"\r\n\"30\",\"2025-02-21\",\"Batata frita\",\"Acompanhamentos\",\"Norte\",\"1\",\"14.50\"\r\n\"31\",\"2025-02-28\",\"Brownie\",\"Sobremesas\",\"Centro-Oeste\",\"2\",\"12.00\"\r\n\"32\",\"2025-02-07\",\"Batata frita\",\"Acompanhamentos\",\"Sul\",\"3\",\"14.50\"\r\n\"33\",\"2025-02-14\",\"Brownie\",\"Sobremesas\",\"Centro-Oeste\",\"4\",\"12.00\"\r\n\"34\",\"2025-02-21\",\"Batata frita\",\"Acompanhamentos\",\"Sul\",\"1\",\"14.50\"\r\n\"35\",\"2025-03-03\",\"X-Burger\",\"Lanches\",\"Nordeste\",\"3\",\"24.90\"\r\n\"36\",\"2025-03-10\",\"Refrigerante\",\"Bebidas\",\"Sul\",\"4\",\"7.00\"\r\n\"37\",\"2025-03-17\",\"X-Burger\",\"Lanches\",\"Nordeste\",\"1\",\"24.90\"\r\n\"38\",\"2025-03-24\",\"Refrigerante\",\"Bebidas\",\"Sudeste\",\"2\",\"7.00\"\r\n\"39\",\"2025-03-03\",\"X-Burger\",\"Lanches\",\"Nordeste\",\"3\",\"24.90\"\r\n\"40\",\"2025-03-10\",\"Refrigerante\",\"Bebidas\",\"Sudeste\",\"4\",\"7.00\"\r\n\"41\",\"2025-03-17\",\"X-Burger\",\"Lanches\",\"Norte\",\"1\",\"24.90\"\r\n\"42\",\"2025-03-24\",\"Refrigerante\",\"Bebidas\",\"Sudeste\",\"2\",\"7.00\"\r\n\"43\",\"2025-03-03\",\"X-Burger\",\"Lanches\",\"Norte\",\"3\",\"24.90\"\r\n\"44\",\"2025-03-10\",\"Refrigerante\",\"Bebidas\",\"Centro-Oeste\",\"4\",\"7.00\"\r\n\"45\",\"2025-03-17\",\"X-Burger\",\"Lanches\",\"Norte\",\"1\",\"24.90\"\r\n\"46\",\"2025-03-24\",\"Refrigerante\",\"Bebidas\",\"Centro-Oeste\",\"2\",\"7.00\"\r\n\"47\",\"2025-03-03\",\"X-Burger\",\"Lanches\",\"Sul\",\"3\",\"24.90\"\r\n\"48\",\"2025-03-10\",\"Refrigerante\",\"Bebidas\",\"Centro-Oeste\",\"4\",\"7.00\"\r\n\"49\",\"2025-03-17\",\"X-Burger\",\"Lanches\",\"Sul\",\"1\",\"24.90\"\r\n\"50\",\"2025-03-24\",\"Refrigerante\",\"Bebidas\",\"Nordeste\",\"2\",\"7.00\"\r\n\"51\",\"2025-03-03\",\"X-Burger\",\"Lanches\",\"Sul\",\"3\",\"24.90\"\r\n\"52\",\"2025-04-13\",\"Suco natural\",\"Bebidas\",\"Nordeste\",\"1\",\"9.50\"\r\n\"53\",\"2025-04-20\",\"X-Salada\",\"Lanches\",\"Sudeste\",\"2\",\"29.90\"\r\n\"54\",\"2025-04-27\",\"Suco natural\",\"Bebidas\",\"Nordeste\",\"3\",\"9.50\"\r\n\"55\",\"2025-04-06\",\"X-Salada\",\"Lanches\",\"Sudeste\",\"4\",\"29.90\"\r\n\"56\",\"2025-04-13\",\"Suco natural\",\"Bebidas\",\"Norte\",\"1\",\"9.50\"\r\n\"57\",\"2025-04-20\",\"X-Salada\",\"Lanches\",\"Sudeste\",\"2\",\"29.90\"\r\n\"58\",\"2025-04-27\",\"Suco natural\",\"Bebidas\",\"Norte\",\"3\",\"9.50\"\r\n\"59\",\"2025-04-06\",\"X-Salada\",\"Lanches\",\"Centro-Oeste\",\"4\",\"29.90\"\r\n\"60\",\"2025-04-13\",\"Suco natural\",\"Bebidas\",\"Norte\",\"1\",\"9.50\"\r\n\"61\",\"2025-04-20\",\"X-Salada\",\"Lanches\",\"Centro-Oeste\",\"2\",\"29.90\"\r\n\"62\",\"2025-04-27\",\"Suco natural\",\"Bebidas\",\"Sul\",\"3\",\"9.50\"\r\n\"63\",\"2025-04-06\",\"X-Salada\",\"Lanches\",\"Centro-Oeste\",\"4\",\"29.90\"\r\n\"64\",\"2025-04-13\",\"Suco natural\",\"Bebidas\",\"Sul\",\"1\",\"9.50\"\r\n\"65\",\"2025-04-20\",\"X-Salada\",\"Lanches\",\"Nordeste\",\"2\",\"29.90\"\r\n\"66\",\"2025-04-27\",\"Suco natural\",\"Bebidas\",\"Sul\",\"3\",\"9.50\"\r\n\"67\",\"2025-04-06\",\"X-Salada\",\"Lanches\",\"Nordeste\",\"4\",\"29.90\"\r\n\"68\",\"2025-04-13\",\"Suco natural\",\"Bebidas\",\"Sudeste\",\"1\",\"9.50\"\r\n\"69\",\"2025-05-23\",\"Batata frita\",\"Acompanhamentos\",\"Nordeste\",\"3\",\"14.50\"\r\n\"70\",\"2025-05-02\",\"Brownie\",\"Sobremesas\",\"Sudeste\",\"4\",\"12.00\"\r\n\"71\",\"2025-05-09\",\"Batata frita\",\"Acompanhamentos\",\"Norte\",\"1\",\"14.50\"\r\n\"72\",\"2025-05-16\",\"Brownie\",\"Sobremesas\",\"Sudeste\",\"2\",\"12.00\"\r\n\"73\",\"2025-05-23\",\"Batata frita\",\"Acompanhamentos\",\"Norte\",\"3\",\"14.50\"\r\n\"74\",\"2025-05-02\",\"Brownie\",\"Sobremesas\",\"Centro-Oeste\",\"4\",\"12.00\"\r\n\"75\",\"2025-05-09\",\"Batata frita\",\"Acompanhamentos\",\"Norte\",\"1\",\"14.50\"\r\n\"76\",\"2025-05-16\",\"Brownie\",\"Sobremesas\",\"Centro-Oeste\",\"2\",\"12.00\"\r\n\"77\",\"2025-05-23\",\"Batata frita\",\"Acompanhamentos\",\"Sul\",\"3\",\"14.50\"\r\n\"78\",\"2025-05-02\",\"Brownie\",\"Sobremesas\",\"Centro-Oeste\",\"4\",\"12.00\"\r\n\"79\",\"2025-05-09\",\"Batata frita\",\"Acompanhamentos\",\"Sul\",\"1\",\"14.50\"\r\n\"80\",\"2025-05-16\",\"Brownie\",\"Sobremesas\",\"Nordeste\",\"2\",\"12.00\"\r\n\"81\",\"2025-05-23\",\"Batata frita\",\"Acompanhamentos\",\"Sul\",\"3\",\"14.50\"\r\n\"82\",\"2025-05-02\",\"Brownie\",\"Sobremesas\",\"Nordeste\",\"4\",\"12.00\"\r\n\"83\",\"2025-05-09\",\"Batata frita\",\"Acompanhamentos\",\"Sudeste\",\"1\",\"14.50\"\r\n\"84\",\"2025-05-16\",\"Brownie\",\"Sobremesas\",\"Nordeste\",\"2\",\"12.00\"\r\n\"85\",\"2025-05-23\",\"Batata frita\",\"Acompanhamentos\",\"Sudeste\",\"3\",\"14.50\"\r\n\"86\",\"2025-06-05\",\"X-Burger\",\"Lanches\",\"Norte\",\"1\",\"24.90\"\r\n\"87\",\"2025-06-12\",\"Refrigerante\",\"Bebidas\",\"Sudeste\",\"2\",\"7.00\"\r\n\"88\",\"2025-06-19\",\"X-Burger\",\"Lanches\",\"Norte\",\"3\",\"24.90\"\r\n\"89\",\"2025-06-26\",\"Refrigerante\",\"Bebidas\",\"Centro-Oeste\",\"4\",\"7.00\"\r\n\"90\",\"2025-06-05\",\"X-Burger\",\"Lanches\",\"Norte\",\"1\",\"24.90\"\r\n\"91\",\"2025-06-12\",\"Refrigerante\",\"Bebidas\",\"Centro-Oeste\",\"2\",\"7.00\"\r\n\"92\",\"2025-06-19\",\"X-Burger\",\"Lanches\",\"Sul\",\"3\",\"24.90\"\r\n\"93\",\"2025-06-26\",\"Refrigerante\",\"Bebidas\",\"Centro-Oeste\",\"4\",\"7.00\"\r\n\"94\",\"2025-06-05\",\"X-Burger\",\"Lanches\",\"Sul\",\"1\",\"24.90\"\r\n\"95\",\"2025-06-12\",\"Refrigerante\",\"Bebidas\",\"Nordeste\",\"2\",\"7.00\"\r\n\"96\",\"2025-06-19\",\"X-Burger\",\"Lanches\",\"Sul\",\"3\",\"24.90\"\r\n\"97\",\"2025-06-26\",\"Refrigerante\",\"Bebidas\",\"Nordeste\",\"4\",\"7.00\"\r\n\"98\",\"2025-06-05\",\"X-Burger\",\"Lanches\",\"Sudeste\",\"1\",\"24.90\"\r\n\"99\",\"2025-06-12\",\"Refrigerante\",\"Bebidas\",\"Nordeste\",\"2\",\"7.00\"\r\n\"100\",\"2025-06-19\",\"X-Burger\",\"Lanches\",\"Sudeste\",\"3\",\"24.90\"\r\n\"101\",\"2025-06-26\",\"Refrigerante\",\"Bebidas\",\"Norte\",\"4\",\"7.00\"\r\n\"102\",\"2025-06-05\",\"X-Burger\",\"Lanches\",\"Sudeste\",\"1\",\"24.90\"\r\n\"103\",\"2025-07-15\",\"Suco natural\",\"Bebidas\",\"Norte\",\"3\",\"9.50\"\r\n\"104\",\"2025-07-22\",\"X-Salada\",\"Lanches\",\"Centro-Oeste\",\"4\",\"29.90\"\r\n\"105\",\"2025-07-01\",\"Suco natural\",\"Bebidas\",\"Norte\",\"1\",\"9.50\"\r\n\"106\",\"2025-07-08\",\"X-Salada\",\"Lanches\",\"Centro-Oeste\",\"2\",\"29.90\"\r\n\"107\",\"2025-07-15\",\"Suco natural\",\"Bebidas\",\"Sul\",\"3\",\"9.50\"\r\n\"108\",\"2025-07-22\",\"X-Salada\",\"Lanches\",\"Centro-Oeste\",\"4\",\"29.90\"\r\n\"109\",\"2025-07-01\",\"Suco natural\",\"Bebidas\",\"Sul\",\"1\",\"9.50\"\r\n\"110\",\"2025-07-08\",\"X-Salada\",\"Lanches\",\"Nordeste\",\"2\",\"29.90\"\r\n\"111\",\"2025-07-15\",\"Suco natural\",\"Bebidas\",\"Sul\",\"3\",\"9.50\"\r\n\"112\",\"2025-07-22\",\"X-Salada\",\"Lanches\",\"Nordeste\",\"4\",\"29.90\"\r\n\"113\",\"2025-07-01\",\"Suco natural\",\"Bebidas\",\"Sudeste\",\"1\",\"9.50\"\r\n\"114\",\"2025-07-08\",\"X-Salada\",\"Lanches\",\"Nordeste\",\"2\",\"29.90\"\r\n\"115\",\"2025-07-15\",\"Suco natural\",\"Bebidas\",\"Sudeste\",\"3\",\"9.50\"\r\n\"116\",\"2025-07-22\",\"X-Salada\",\"Lanches\",\"Norte\",\"4\",\"29.90\"\r\n\"117\",\"2025-07-01\",\"Suco natural\",\"Bebidas\",\"Sudeste\",\"1\",\"9.50\"\r\n\"118\",\"2025-07-08\",\"X-Salada\",\"Lanches\",\"Norte\",\"2\",\"29.90\"\r\n\"119\",\"2025-07-15\",\"Suco natural\",\"Bebidas\",\"Centro-Oeste\",\"3\",\"9.50\"\r\n\"120\",\"2025-08-25\",\"Batata frita\",\"Acompanhamentos\",\"Norte\",\"1\",\"14.50\"\r\n\"121\",\"2025-08-04\",\"Brownie\",\"Sobremesas\",\"Centro-Oeste\",\"2\",\"12.00\"\r\n\"122\",\"2025-08-11\",\"Batata frita\",\"Acompanhamentos\",\"Sul\",\"3\",\"14.50\"\r\n\"123\",\"2025-08-18\",\"Brownie\",\"Sobremesas\",\"Centro-Oeste\",\"4\",\"12.00\"\r\n\"124\",\"2025-08-25\",\"Batata frita\",\"Acompanhamentos\",\"Sul\",\"1\",\"14.50\"\r\n\"125\",\"2025-08-04\",\"Brownie\",\"Sobremesas\",\"Nordeste\",\"2\",\"12.00\"\r\n\"126\",\"2025-08-11\",\"Batata frita\",\"Acompanhamentos\",\"Sul\",\"3\",\"14.50\"\r\n\"127\",\"2025-08-18\",\"Brownie\",\"Sobremesas\",\"Nordeste\",\"4\",\"12.00\"\r\n\"128\",\"2025-08-25\",\"Batata frita\",\"Acompanhamentos\",\"Sudeste\",\"1\",\"14.50\"\r\n\"129\",\"2025-08-04\",\"Brownie\",\"Sobremesas\",\"Nordeste\",\"2\",\"12.00\"\r\n\"130\",\"2025-08-11\",\"Batata frita\",\"Acompanhamentos\",\"Sudeste\",\"3\",\"14.50\"\r\n\"131\",\"2025-08-18\",\"Brownie\",\"Sobremesas\",\"Norte\",\"4\",\"12.00\"\r\n\"132\",\"2025-08-25\",\"Batata frita\",\"Acompanhamentos\",\"Sudeste\",\"1\",\"14.50\"\r\n\"133\",\"2025-08-04\",\"Brownie\",\"Sobremesas\",\"Norte\",\"2\",\"12.00\"\r\n\"134\",\"2025-08-11\",\"Batata frita\",\"Acompanhamentos\",\"Centro-Oeste\",\"3\",\"14.50\"\r\n\"135\",\"2025-08-18\",\"Brownie\",\"Sobremesas\",\"Norte\",\"4\",\"12.00\"\r\n\"136\",\"2025-08-25\",\"Batata frita\",\"Acompanhamentos\",\"Centro-Oeste\",\"1\",\"14.50\"\r\n\"137\",\"2025-09-07\",\"X-Burger\",\"Lanches\",\"Sul\",\"3\",\"24.90\"\r\n\"138\",\"2025-09-14\",\"Refrigerante\",\"Bebidas\",\"Centro-Oeste\",\"4\",\"7.00\"\r\n\"139\",\"2025-09-21\",\"X-Burger\",\"Lanches\",\"Sul\",\"1\",\"24.90\"\r\n\"140\",\"2025-09-28\",\"Refrigerante\",\"Bebidas\",\"Nordeste\",\"2\",\"7.00\"\r\n\"141\",\"2025-09-07\",\"X-Burger\",\"Lanches\",\"Sul\",\"3\",\"24.90\"\r\n\"142\",\"2025-09-14\",\"Refrigerante\",\"Bebidas\",\"Nordeste\",\"4\",\"7.00\"\r\n\"143\",\"2025-09-21\",\"X-Burger\",\"Lanches\",\"Sudeste\",\"1\",\"24.90\"\r\n\"144\",\"2025-09-28\",\"Refrigerante\",\"Bebidas\",\"Nordeste\",\"2\",\"7.00\"\r\n\"145\",\"2025-09-07\",\"X-Burger\",\"Lanches\",\"Sudeste\",\"3\",\"24.90\"\r\n\"146\",\"2025-09-14\",\"Refrigerante\",\"Bebidas\",\"Norte\",\"4\",\"7.00\"\r\n\"147\",\"2025-09-21\",\"X-Burger\",\"Lanches\",\"Sudeste\",\"1\",\"24.90\"\r\n\"148\",\"2025-09-28\",\"Refrigerante\",\"Bebidas\",\"Norte\",\"2\",\"7.00\"\r\n\"149\",\"2025-09-07\",\"X-Burger\",\"Lanches\",\"Centro-Oeste\",\"3\",\"24.90\"\r\n\"150\",\"2025-09-14\",\"Refrigerante\",\"Bebidas\",\"Norte\",\"4\",\"7.00\"\r\n\"151\",\"2025-09-21\",\"X-Burger\",\"Lanches\",\"Centro-Oeste\",\"1\",\"24.90\"\r\n\"152\",\"2025-09-28\",\"Refrigerante\",\"Bebidas\",\"Sul\",\"2\",\"7.00\"\r\n\"153\",\"2025-10-10\",\"X-Salada\",\"Lanches\",\"Centro-Oeste\",\"4\",\"29.90\"\r\n\"154\",\"2025-10-17\",\"Suco natural\",\"Bebidas\",\"Sul\",\"1\",\"9.50\"\r\n\"155\",\"2025-10-24\",\"X-Salada\",\"Lanches\",\"Nordeste\",\"2\",\"29.90\"\r\n\"156\",\"2025-10-03\",\"Suco natural\",\"Bebidas\",\"Sul\",\"3\",\"9.50\"\r\n\"157\",\"2025-10-10\",\"X-Salada\",\"Lanches\",\"Nordeste\",\"4\",\"29.90\"\r\n\"158\",\"2025-10-17\",\"Suco natural\",\"Bebidas\",\"Sudeste\",\"1\",\"9.50\"\r\n\"159\",\"2025-10-24\",\"X-Salada\",\"Lanches\",\"Nordeste\",\"2\",\"29.90\"\r\n\"160\",\"2025-10-03\",\"Suco natural\",\"Bebidas\",\"Sudeste\",\"3\",\"9.50\"\r\n\"161\",\"2025-10-10\",\"X-Salada\",\"Lanches\",\"Norte\",\"4\",\"29.90\"\r\n\"162\",\"2025-10-17\",\"Suco natural\",\"Bebidas\",\"Sudeste\",\"1\",\"9.50\"\r\n\"163\",\"2025-10-24\",\"X-Salada\",\"Lanches\",\"Norte\",\"2\",\"29.90\"\r\n\"164\",\"2025-10-03\",\"Suco natural\",\"Bebidas\",\"Centro-Oeste\",\"3\",\"9.50\"\r\n\"165\",\"2025-10-10\",\"X-Salada\",\"Lanches\",\"Norte\",\"4\",\"29.90\"\r\n\"166\",\"2025-10-17\",\"Suco natural\",\"Bebidas\",\"Centro-Oeste\",\"1\",\"9.50\"\r\n\"167\",\"2025-10-24\",\"X-Salada\",\"Lanches\",\"Sul\",\"2\",\"29.90\"\r\n\"168\",\"2025-10-03\",\"Suco natural\",\"Bebidas\",\"Centro-Oeste\",\"3\",\"9.50\"\r\n\"169\",\"2025-11-13\",\"Batata frita\",\"Acompanhamentos\",\"Sul\",\"1\",\"14.50\"\r\n\"170\",\"2025-11-20\",\"Brownie\",\"Sobremesas\",\"Nordeste\",\"2\",\"12.00\"\r\n\"171\",\"2025-11-27\",\"Batata frita\",\"Acompanhamentos\",\"Sul\",\"3\",\"14.50\"\r\n\"172\",\"2025-11-06\",\"Brownie\",\"Sobremesas\",\"Nordeste\",\"4\",\"12.00\"\r\n\"173\",\"2025-11-13\",\"Batata frita\",\"Acompanhamentos\",\"Sudeste\",\"1\",\"14.50\"\r\n\"174\",\"2025-11-20\",\"Brownie\",\"Sobremesas\",\"Nordeste\",\"2\",\"12.00\"\r\n\"175\",\"2025-11-27\",\"Batata frita\",\"Acompanhamentos\",\"Sudeste\",\"3\",\"14.50\"\r\n\"176\",\"2025-11-06\",\"Brownie\",\"Sobremesas\",\"Norte\",\"4\",\"12.00\"\r\n\"177\",\"2025-11-13\",\"Batata frita\",\"Acompanhamentos\",\"Sudeste\",\"1\",\"14.50\"\r\n\"178\",\"2025-11-20\",\"Brownie\",\"Sobremesas\",\"Norte\",\"2\",\"12.00\"\r\n\"179\",\"2025-11-27\",\"Batata frita\",\"Acompanhamentos\",\"Centro-Oeste\",\"3\",\"14.50\"\r\n\"180\",\"2025-11-06\",\"Brownie\",\"Sobremesas\",\"Norte\",\"4\",\"12.00\"\r\n\"181\",\"2025-11-13\",\"Batata frita\",\"Acompanhamentos\",\"Centro-Oeste\",\"1\",\"14.50\"\r\n\"182\",\"2025-11-20\",\"Brownie\",\"Sobremesas\",\"Sul\",\"2\",\"12.00\"\r\n\"183\",\"2025-11-27\",\"Batata frita\",\"Acompanhamentos\",\"Centro-Oeste\",\"3\",\"14.50\"\r\n\"184\",\"2025-11-06\",\"Brownie\",\"Sobremesas\",\"Sul\",\"4\",\"12.00\"\r\n\"185\",\"2025-12-16\",\"Refrigerante\",\"Bebidas\",\"Nordeste\",\"2\",\"7.00\"\r\n\"186\",\"2025-12-23\",\"X-Burger\",\"Lanches\",\"Sul\",\"3\",\"24.90\"\r\n\"187\",\"2025-12-02\",\"Refrigerante\",\"Bebidas\",\"Nordeste\",\"4\",\"7.00\"\r\n\"188\",\"2025-12-09\",\"X-Burger\",\"Lanches\",\"Sudeste\",\"1\",\"24.90\"\r\n\"189\",\"2025-12-16\",\"Refrigerante\",\"Bebidas\",\"Nordeste\",\"2\",\"7.00\"\r\n\"190\",\"2025-12-23\",\"X-Burger\",\"Lanches\",\"Sudeste\",\"3\",\"24.90\"\r\n\"191\",\"2025-12-02\",\"Refrigerante\",\"Bebidas\",\"Norte\",\"4\",\"7.00\"\r\n\"192\",\"2025-12-09\",\"X-Burger\",\"Lanches\",\"Sudeste\",\"1\",\"24.90\"\r\n\"193\",\"2025-12-16\",\"Refrigerante\",\"Bebidas\",\"Norte\",\"2\",\"7.00\"\r\n\"194\",\"2025-12-23\",\"X-Burger\",\"Lanches\",\"Centro-Oeste\",\"3\",\"24.90\"\r\n\"195\",\"2025-12-02\",\"Refrigerante\",\"Bebidas\",\"Norte\",\"4\",\"7.00\"\r\n\"196\",\"2025-12-09\",\"X-Burger\",\"Lanches\",\"Centro-Oeste\",\"1\",\"24.90\"\r\n\"197\",\"2025-12-16\",\"Refrigerante\",\"Bebidas\",\"Sul\",\"2\",\"7.00\"\r\n\"198\",\"2025-12-23\",\"X-Burger\",\"Lanches\",\"Centro-Oeste\",\"3\",\"24.90\"\r\n\"199\",\"2025-12-02\",\"Refrigerante\",\"Bebidas\",\"Sul\",\"4\",\"7.00\"\r\n\"200\",\"2025-12-09\",\"X-Burger\",\"Lanches\",\"Nordeste\",\"1\",\"24.90\"\r\n";

const moedaBR = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const numeroBR = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });
const nomesLegiveis = {
  id_venda: 'ID da venda',
  data: 'Data',
  dia_semana: 'Dia da semana',
  periodo: 'Período',
  produto: 'Produto',
  categoria: 'Categoria',
  quantidade: 'Quantidade',
  preco_unitario: 'Preço unitário',
  forma_pagamento: 'Forma de pagamento',
  canal: 'Canal',
  regiao: 'Região',
  tempo_espera_min: 'Espera (min)',
  avaliacao: 'Avaliação',
  faturamento_linha: 'Faturamento da linha'
};

const elementos = {
  filtroDataInicio: document.querySelector('#data-inicial'),
  filtroDataFim: document.querySelector('#data-final'),
  filtroCategoria: document.querySelector('#filtro-categoria'),
  filtroArea: document.querySelector('#filtro-area'),
  rotuloArea: document.querySelector('#rotulo-area'),
  tituloArea: document.querySelector('#titulo-area-grafico'),
  descricaoArea: document.querySelector('#descricao-area-grafico'),
  importar: document.querySelector('#botao-importar'),
  arquivo: document.querySelector('#arquivo-csv'),
  limpar: document.querySelector('#botao-limpar'),
  exportar: document.querySelector('#botao-exportar'),
  pesquisa: document.querySelector('#pesquisa-tabela'),
  resumo: document.querySelector('#resumo-base'),
  status: document.querySelector('#status-dados'),
  contagem: document.querySelector('#contagem-registros'),
  contagemTabela: document.querySelector('#contagem-tabela'),
  cabecalho: document.querySelector('#cabecalho-tabela'),
  corpo: document.querySelector('#corpo-tabela'),
  mensagemVazia: document.querySelector('#mensagem-vazia'),
  faturamento: document.querySelector('#indicador-faturamento'),
  vendas: document.querySelector('#indicador-vendas'),
  unidades: document.querySelector('#indicador-unidades'),
  ticket: document.querySelector('#indicador-ticket'),
  graficoMensal: document.querySelector('#grafico-mensal'),
  graficoCategoria: document.querySelector('#grafico-categoria'),
  graficoArea: document.querySelector('#grafico-area'),
  vazioMensal: document.querySelector('#vazio-mensal'),
  vazioCategoria: document.querySelector('#vazio-categoria'),
  vazioArea: document.querySelector('#vazio-area'),
  listaMaisVendidos: document.querySelector('#lista-mais-vendidos'),
  listaMenosVendidos: document.querySelector('#lista-menos-vendidos'),
  vazioMaisVendidos: document.querySelector('#vazio-mais-vendidos'),
  vazioMenosVendidos: document.querySelector('#vazio-menos-vendidos')
};

let colunas = [];
let campo = {};
let campoArea = null;
let todosRegistros = [];
let registrosFiltrados = [];
let graficos = { mensal: null, categoria: null, area: null };
let ordenacao = { coluna: 'data', direcao: 'desc' };
let nomeBase = 'dados-exemplo.csv';

function normalizarNome(valor) {
  return String(valor ?? '').trim().replace(/^\uFEFF/, '').toLocaleLowerCase('pt-BR')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s-]+/g, '_');
}

function encontrarColuna(campos, alternativas) {
  const indice = new Map(campos.map(nome => [normalizarNome(nome), nome]));
  for (const alternativa of alternativas) {
    const encontrada = indice.get(normalizarNome(alternativa));
    if (encontrada) return encontrada;
  }
  return null;
}

function lerNumero(valor) {
  if (valor === null || valor === undefined || String(valor).trim() === '') return null;
  let texto = String(valor).trim().replace(/[\s\u00a0]/g, '');
  const temVirgula = texto.includes(',');
  const temPonto = texto.includes('.');
  if (temVirgula && temPonto) {
    if (texto.lastIndexOf(',') > texto.lastIndexOf('.')) {
      texto = texto.replace(/\./g, '').replace(',', '.');
    } else {
      texto = texto.replace(/,/g, '');
    }
  } else if (temVirgula) {
    texto = texto.replace(',', '.');
  }
  const numero = Number(texto);
  return Number.isFinite(numero) ? numero : null;
}

function dataISOValida(valor) {
  const texto = String(valor ?? '').trim();
  const partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(texto);
  if (!partes) return false;
  const [, ano, mes, dia] = partes.map(Number);
  const data = new Date(Date.UTC(ano, mes - 1, dia));
  return data.getUTCFullYear() === ano && data.getUTCMonth() === mes - 1 && data.getUTCDate() === dia;
}

function criarBase(linhas, camposRecebidos) {
  const camposLimpos = (camposRecebidos || []).map(nome => String(nome).trim().replace(/^\uFEFF/, ''));
  const obrigatorios = {
    id: encontrarColuna(camposLimpos, ['id_venda', 'id']),
    data: encontrarColuna(camposLimpos, ['data']),
    categoria: encontrarColuna(camposLimpos, ['categoria']),
    quantidade: encontrarColuna(camposLimpos, ['quantidade', 'unidades']),
    preco: encontrarColuna(camposLimpos, ['preco_unitario', 'preço_unitário', 'preco', 'preço'])
  };
  const ausentes = Object.entries(obrigatorios).filter(([, nome]) => !nome).map(([nome]) => nome);
  if (ausentes.length) return { erro: `Colunas obrigatórias não encontradas: ${ausentes.join(', ')}.` };

  const mapeamento = {
    id: obrigatorios.id,
    data: obrigatorios.data,
    categoria: obrigatorios.categoria,
    quantidade: obrigatorios.quantidade,
    preco: obrigatorios.preco,
    produto: encontrarColuna(camposLimpos, ['produto']),
    regiao: encontrarColuna(camposLimpos, ['regiao', 'região']),
    canal: encontrarColuna(camposLimpos, ['canal'])
  };
  const campoComparacao = mapeamento.regiao || mapeamento.canal;
  const registros = [];
  const motivos = new Map();

  for (const linha of linhas) {
    const problemas = [];
    const id = linha[mapeamento.id];
    const data = String(linha[mapeamento.data] ?? '').trim();
    const quantidadeRaw = linha[mapeamento.quantidade];
    const precoRaw = linha[mapeamento.preco];
    const quantidade = lerNumero(quantidadeRaw);
    const preco = lerNumero(precoRaw);

    if (String(id ?? '').trim() === '') problemas.push('ID de venda vazio');
    if (!dataISOValida(data)) problemas.push('data ausente ou inválida (use AAAA-MM-DD)');
    if (quantidade === null || quantidade < 0) problemas.push('quantidade ausente, inválida ou negativa');
    if (preco === null || preco < 0) problemas.push('preço unitário ausente, inválido ou negativo');

    if (problemas.length) {
      for (const problema of problemas) motivos.set(problema, (motivos.get(problema) || 0) + 1);
      continue;
    }

    const valores = {};
    for (const coluna of camposLimpos) valores[coluna] = linha[coluna] ?? '';
    registros.push({
      valores,
      id: String(id).trim(),
      data,
      categoria: String(linha[mapeamento.categoria] ?? '').trim() || 'Sem categoria',
      quantidade,
      preco,
      faturamento: quantidade * preco,
      comparacao: campoComparacao ? String(linha[campoComparacao] ?? '').trim() || 'Sem informação' : ''
    });
  }

  const ausentesOpcional = new Map();
  for (const registro of registros) {
    for (const coluna of camposLimpos) {
      if (String(registro.valores[coluna] ?? '').trim() === '') {
        ausentesOpcional.set(coluna, (ausentesOpcional.get(coluna) || 0) + 1);
      }
    }
  }

  return {
    registros,
    colunas: camposLimpos,
    campos: mapeamento,
    campoComparacao,
    descartes: motivos,
    ausentes: ausentesOpcional,
    linhasRecebidas: linhas.length
  };
}

function formatarNumero(valor) {
  return numeroBR.format(valor);
}

function formatarMoeda(valor) {
  return moedaBR.format(Number.isFinite(valor) ? valor : 0);
}

function formatarData(valor) {
  if (!dataISOValida(valor)) return String(valor ?? '');
  const [ano, mes, dia] = valor.split('-').map(Number);
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(ano, mes - 1, dia)));
}

function rotuloColuna(coluna) {
  return nomesLegiveis[normalizarNome(coluna)] || coluna.replace(/_/g, ' ').replace(/\b\w/g, letra => letra.toLocaleUpperCase('pt-BR'));
}

function textoBusca(valor) {
  return String(valor ?? '').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function preencherFiltros() {
  const categorias = [...new Set(todosRegistros.map(registro => registro.categoria))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  const areas = [...new Set(todosRegistros.map(registro => registro.comparacao).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  const menorData = todosRegistros.reduce((menor, registro) => !menor || registro.data < menor ? registro.data : menor, '');
  const maiorData = todosRegistros.reduce((maior, registro) => !maior || registro.data > maior ? registro.data : maior, '');

  elementos.filtroCategoria.replaceChildren(new Option('Todas as categorias', ''));
  for (const categoria of categorias) elementos.filtroCategoria.add(new Option(categoria, categoria));
  elementos.filtroArea.replaceChildren(new Option(campoArea ? 'Todas as opções' : 'Indisponível', ''));
  for (const area of areas) elementos.filtroArea.add(new Option(area, area));
  // Ao limpar ou trocar de base, não preserve seleções antigas por acidente.
  elementos.filtroCategoria.value = '';
  elementos.filtroArea.value = '';
  elementos.filtroArea.disabled = !campoArea;
  elementos.filtroDataInicio.min = menorData;
  elementos.filtroDataInicio.max = maiorData;
  elementos.filtroDataFim.min = menorData;
  elementos.filtroDataFim.max = maiorData;
  elementos.filtroDataInicio.value = menorData;
  elementos.filtroDataFim.value = maiorData;

  if (campoArea) {
    const regiao = normalizarNome(campoArea) === 'regiao';
    elementos.rotuloArea.textContent = regiao ? 'Região' : 'Canal';
    elementos.tituloArea.textContent = `Faturamento por ${regiao ? 'região' : 'canal'}`;
    elementos.descricaoArea.textContent = `Receita total em cada ${regiao ? 'região' : 'canal'} de venda.`;
    elementos.graficoArea.setAttribute('aria-label', `Gráfico de barras do faturamento por ${regiao ? 'região' : 'canal'}`);
    elementos.filtroArea.options[0].textContent = regiao ? 'Todas as regiões' : 'Todos os canais';
  } else {
    elementos.rotuloArea.textContent = 'Região / canal';
    elementos.tituloArea.textContent = 'Comparação por região ou canal';
    elementos.descricaoArea.textContent = 'A base não contém uma coluna de região ou canal.';
  }
}

function linhasAplicandoFiltros() {
  const inicio = elementos.filtroDataInicio.value;
  const fim = elementos.filtroDataFim.value;
  const categoria = elementos.filtroCategoria.value;
  const area = elementos.filtroArea.value;
  return todosRegistros.filter(registro => {
    if (inicio && registro.data < inicio) return false;
    if (fim && registro.data > fim) return false;
    if (categoria && registro.categoria !== categoria) return false;
    return !area || registro.comparacao === area;
  });
}

function atualizarIndicadores(registros) {
  const faturamento = registros.reduce((total, registro) => total + registro.faturamento, 0);
  const unidades = registros.reduce((total, registro) => total + registro.quantidade, 0);
  const vendas = new Set(registros.map(registro => registro.id)).size;
  elementos.faturamento.textContent = formatarMoeda(faturamento);
  elementos.vendas.textContent = formatarNumero(vendas);
  elementos.unidades.textContent = formatarNumero(unidades);
  elementos.ticket.textContent = formatarMoeda(vendas ? faturamento / vendas : 0);
}

function agregarProdutos(registros) {
  if (!campo.produto) return [];
  const totais = new Map();
  for (const registro of registros) {
    const produto = String(registro.valores[campo.produto] ?? '').trim() || 'Sem produto';
    totais.set(produto, (totais.get(produto) || 0) + registro.quantidade);
  }
  return [...totais.entries()].map(([produto, quantidade]) => ({ produto, quantidade }));
}

function preencherListaProdutos(elementoLista, elementoVazio, produtos, mensagemVazia) {
  elementoLista.replaceChildren();
  if (!produtos.length) {
    elementoLista.hidden = true;
    elementoVazio.textContent = mensagemVazia;
    elementoVazio.hidden = false;
    return;
  }

  elementoLista.hidden = false;
  elementoVazio.hidden = true;
  const maximo = Math.max(...produtos.map(item => item.quantidade), 0);
  const itens = document.createDocumentFragment();
  produtos.forEach((item, indice) => {
    const linha = document.createElement('li');
    linha.className = 'ranking-item';

    const posicao = document.createElement('span');
    posicao.className = 'ranking-position';
    posicao.textContent = String(indice + 1);

    const detalhes = document.createElement('span');
    detalhes.className = 'ranking-product-details';
    const nome = document.createElement('span');
    nome.className = 'ranking-product-name';
    nome.textContent = item.produto;
    const trilha = document.createElement('span');
    trilha.className = 'ranking-track';
    trilha.setAttribute('aria-hidden', 'true');
    const preenchimento = document.createElement('span');
    preenchimento.className = 'ranking-fill';
    preenchimento.style.width = `${maximo ? (item.quantidade / maximo) * 100 : 0}%`;
    trilha.append(preenchimento);
    detalhes.append(nome, trilha);

    const quantidade = document.createElement('strong');
    quantidade.className = 'ranking-quantity';
    quantidade.textContent = `${formatarNumero(item.quantidade)} `;
    const unidade = document.createElement('small');
    unidade.textContent = 'unid.';
    quantidade.append(unidade);

    linha.append(posicao, detalhes, quantidade);
    itens.append(linha);
  });
  elementoLista.replaceChildren(itens);
}

function atualizarRankingProdutos(registros) {
  const mensagemVazia = !campo.produto
    ? 'Esta base não possui uma coluna de produto.'
    : 'Sem vendas correspondentes aos filtros.';
  const produtos = agregarProdutos(registros);
  if (!produtos.length) {
    preencherListaProdutos(elementos.listaMaisVendidos, elementos.vazioMaisVendidos, [], mensagemVazia);
    preencherListaProdutos(elementos.listaMenosVendidos, elementos.vazioMenosVendidos, [], mensagemVazia);
    return;
  }

  const porUnidadesDecrescente = [...produtos].sort((a, b) => b.quantidade - a.quantidade || a.produto.localeCompare(b.produto, 'pt-BR'));
  const porUnidadesCrescente = [...produtos].sort((a, b) => a.quantidade - b.quantidade || a.produto.localeCompare(b.produto, 'pt-BR'));
  preencherListaProdutos(elementos.listaMaisVendidos, elementos.vazioMaisVendidos, porUnidadesDecrescente.slice(0, 5), mensagemVazia);
  preencherListaProdutos(elementos.listaMenosVendidos, elementos.vazioMenosVendidos, porUnidadesCrescente.slice(0, 5), mensagemVazia);
}

function criarMeses() {
  if (!todosRegistros.length) return [];
  const inicio = elementos.filtroDataInicio.value || todosRegistros.reduce((menor, registro) => registro.data < menor ? registro.data : menor, todosRegistros[0].data);
  const fim = elementos.filtroDataFim.value || todosRegistros.reduce((maior, registro) => registro.data > maior ? registro.data : maior, todosRegistros[0].data);
  if (inicio > fim) return [];
  const primeiro = new Date(`${inicio.slice(0, 7)}-01T00:00:00Z`);
  const ultimo = new Date(`${fim.slice(0, 7)}-01T00:00:00Z`);
  const meses = [];
  for (const cursor = new Date(primeiro); cursor <= ultimo; cursor.setUTCMonth(cursor.getUTCMonth() + 1)) {
    const chave = `${cursor.getUTCFullYear()}-${String(cursor.getUTCMonth() + 1).padStart(2, '0')}`;
    const mes = new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(cursor);
    meses.push({ chave, rotulo: mes.replace('.', '') });
  }
  return meses;
}

function agruparReceita(registros, seletor) {
  const totais = new Map();
  for (const registro of registros) {
    const chave = seletor(registro) || 'Sem informação';
    totais.set(chave, (totais.get(chave) || 0) + registro.faturamento);
  }
  return [...totais.entries()].sort((a, b) => b[1] - a[1]);
}

function opcoesComuns() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false, mode: 'index' },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: { color: '#728297', usePointStyle: true, pointStyle: 'circle', boxWidth: 7, boxHeight: 7, padding: 18, font: { family: 'DM Sans', size: 10 } }
      },
      tooltip: {
        backgroundColor: '#172b43',
        padding: 10,
        titleFont: { family: 'DM Sans', size: 11, weight: '600' },
        bodyFont: { family: 'DM Sans', size: 11 },
        callbacks: { label: contexto => `${contexto.dataset.label}: ${formatarMoeda(contexto.parsed.y ?? contexto.parsed.x)}` }
      }
    },
    scales: {
      x: { grid: { color: '#f0f3f7', drawBorder: false }, ticks: { color: '#7c8b9b', font: { family: 'DM Sans', size: 10 } }, border: { display: false } },
      y: { beginAtZero: true, grid: { color: '#edf1f5', drawBorder: false }, ticks: { color: '#7c8b9b', font: { family: 'DM Sans', size: 10 }, callback: valor => moedaEixo(valor) }, border: { display: false } }
    }
  };
}

function moedaEixo(valor) {
  return `R$ ${new Intl.NumberFormat('pt-BR', { notation: 'compact', maximumFractionDigits: 1 }).format(valor)}`;
}

function desenharGraficos(registros) {
  for (const grafico of Object.values(graficos)) if (grafico) grafico.destroy();
  graficos = { mensal: null, categoria: null, area: null };
  const temRegistros = registros.length > 0;
  elementos.graficoMensal.hidden = !temRegistros;
  elementos.graficoCategoria.hidden = !temRegistros;
  elementos.vazioMensal.hidden = temRegistros;
  elementos.vazioCategoria.hidden = temRegistros;
  elementos.vazioArea.hidden = temRegistros && Boolean(campoArea);
  elementos.graficoArea.hidden = !temRegistros || !campoArea;
  if (!temRegistros || !campoArea || !window.Chart) return;

  const meses = criarMeses();
  const totaisMensais = new Map(meses.map(mes => [mes.chave, 0]));
  for (const registro of registros) {
    const chave = registro.data.slice(0, 7);
    if (totaisMensais.has(chave)) totaisMensais.set(chave, totaisMensais.get(chave) + registro.faturamento);
  }
  const linha = opcoesComuns();
  linha.scales.x.grid.display = false;
  linha.scales.y.ticks.callback = valor => moedaEixo(valor);
  linha.plugins.tooltip.callbacks.label = contexto => `${contexto.dataset.label}: ${formatarMoeda(contexto.parsed.y)}`;
  graficos.mensal = new Chart(elementos.graficoMensal, {
    type: 'line',
    data: {
      labels: meses.map(mes => mes.rotulo),
      datasets: [{ label: 'Faturamento (R$)', data: meses.map(mes => totaisMensais.get(mes.chave)), borderColor: '#159777', backgroundColor: 'rgba(21, 151, 119, .10)', fill: true, tension: .32, borderWidth: 2.5, pointRadius: 3, pointHoverRadius: 5, pointBackgroundColor: '#fff', pointBorderWidth: 2, pointBorderColor: '#159777' }]
    },
    options: { ...linha, scales: { ...linha.scales, y: { ...linha.scales.y, suggestedMax: 0 } } }
  });

  const categorias = agruparReceita(registros, registro => registro.categoria);
  const barrasCategoria = opcoesComuns();
  barrasCategoria.indexAxis = 'y';
  barrasCategoria.plugins.legend.display = false;
  barrasCategoria.scales.x = { ...barrasCategoria.scales.x, beginAtZero: true, ticks: { ...barrasCategoria.scales.x.ticks, callback: moedaEixo } };
  barrasCategoria.scales.y = { ...barrasCategoria.scales.y, grid: { display: false } };
  barrasCategoria.plugins.tooltip.callbacks.label = contexto => formatarMoeda(contexto.parsed.x);
  graficos.categoria = new Chart(elementos.graficoCategoria, {
    type: 'bar',
    data: { labels: categorias.map(item => item[0]), datasets: [{ label: 'Faturamento (R$)', data: categorias.map(item => item[1]), backgroundColor: ['#2b70de', '#58a0ed', '#87bbee', '#b4d5f4'], borderRadius: 5, borderSkipped: false, maxBarThickness: 26 }] },
    options: { ...barrasCategoria, scales: { ...barrasCategoria.scales, x: { ...barrasCategoria.scales.x, grid: { color: '#edf1f5' } } } }
  });

  const areas = agruparReceita(registros, registro => registro.comparacao);
  const barrasArea = opcoesComuns();
  barrasArea.indexAxis = 'y';
  barrasArea.plugins.legend.display = false;
  barrasArea.scales.x = { ...barrasArea.scales.x, beginAtZero: true, ticks: { ...barrasArea.scales.x.ticks, callback: moedaEixo } };
  barrasArea.scales.y = { ...barrasArea.scales.y, grid: { display: false } };
  barrasArea.plugins.tooltip.callbacks.label = contexto => formatarMoeda(contexto.parsed.x);
  graficos.area = new Chart(elementos.graficoArea, {
    type: 'bar',
    data: { labels: areas.map(item => item[0]), datasets: [{ label: 'Faturamento (R$)', data: areas.map(item => item[1]), backgroundColor: ['#169577', '#62baa0', '#a0d5c4', '#d1eade'], borderRadius: 5, borderSkipped: false, maxBarThickness: 26 }] },
    options: { ...barrasArea, scales: { ...barrasArea.scales, x: { ...barrasArea.scales.x, grid: { color: '#edf1f5' } } } }
  });
}

function valorParaTabela(registro, coluna) {
  if (coluna === 'faturamento_linha') return formatarMoeda(registro.faturamento);
  const valor = registro.valores[coluna] ?? '';
  if (normalizarNome(coluna) === 'data') return formatarData(valor);
  if (normalizarNome(coluna) === 'preco_unitario') {
    const numero = lerNumero(valor);
    return numero === null ? '' : formatarMoeda(numero);
  }
  if (['quantidade', 'tempo_espera_min', 'avaliacao'].includes(normalizarNome(coluna))) {
    const numero = lerNumero(valor);
    return numero === null ? '' : formatarNumero(numero);
  }
  return String(valor);
}

function desenharTabela(registros) {
  const colunasTabela = [...colunas, 'faturamento_linha'];
  const cabecalho = document.createDocumentFragment();
  const linhaCabecalho = document.createElement('tr');
  for (const coluna of colunasTabela) {
    const th = document.createElement('th');
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.textContent = rotuloColuna(coluna);
    botao.setAttribute('aria-sort', ordenacao.coluna === coluna ? (ordenacao.direcao === 'asc' ? 'ascending' : 'descending') : 'none');
    const marca = document.createElement('span');
    marca.className = 'sort-mark';
    marca.textContent = ordenacao.coluna === coluna ? (ordenacao.direcao === 'asc' ? '▲' : '▼') : '↕';
    botao.append(marca);
    botao.addEventListener('click', () => {
      ordenacao.direcao = ordenacao.coluna === coluna && ordenacao.direcao === 'asc' ? 'desc' : 'asc';
      ordenacao.coluna = coluna;
      desenharTabela(registrosFiltrados);
    });
    th.append(botao);
    linhaCabecalho.append(th);
  }
  cabecalho.append(linhaCabecalho);
  elementos.cabecalho.replaceChildren(cabecalho);

  const consulta = textoBusca(elementos.pesquisa.value.trim());
  const pesquisados = registros.filter(registro => {
    if (!consulta) return true;
    return colunas.some(coluna => textoBusca(registro.valores[coluna]).includes(consulta)) ||
      textoBusca(registro.faturamento).includes(consulta);
  });
  const listaOrdenada = [...pesquisados].sort((a, b) => {
    let valorA;
    let valorB;
    if (ordenacao.coluna === 'faturamento_linha') {
      valorA = a.faturamento;
      valorB = b.faturamento;
    } else if (ordenacao.coluna === campo.data) {
      valorA = a.data;
      valorB = b.data;
    } else {
      valorA = a.valores[ordenacao.coluna] ?? '';
      valorB = b.valores[ordenacao.coluna] ?? '';
      const numeroA = lerNumero(valorA);
      const numeroB = lerNumero(valorB);
      if (numeroA !== null && numeroB !== null) {
        valorA = numeroA;
        valorB = numeroB;
      }
    }
    if (valorA < valorB) return ordenacao.direcao === 'asc' ? -1 : 1;
    if (valorA > valorB) return ordenacao.direcao === 'asc' ? 1 : -1;
    return 0;
  });

  const linhas = document.createDocumentFragment();
  for (const registro of listaOrdenada) {
    const tr = document.createElement('tr');
    for (const coluna of colunasTabela) {
      const td = document.createElement('td');
      td.textContent = valorParaTabela(registro, coluna);
      if (['quantidade', 'preco_unitario', 'tempo_espera_min', 'faturamento_linha'].includes(normalizarNome(coluna))) td.classList.add('numeric');
      tr.append(td);
    }
    linhas.append(tr);
  }
  elementos.corpo.replaceChildren(linhas);
  const temResultados = listaOrdenada.length > 0;
  elementos.mensagemVazia.hidden = temResultados;
  elementos.cabecalho.parentElement.hidden = !temResultados;
  elementos.contagemTabela.textContent = consulta
    ? `${formatarNumero(listaOrdenada.length)} resultado(s) para a pesquisa dentro das vendas filtradas.`
    : `${formatarNumero(listaOrdenada.length)} venda(s) nesta tabela.`;
  elementos.exportar.disabled = registrosFiltrados.length === 0;
}

function atualizarContagem(registros) {
  const texto = elementos.pesquisa.value.trim();
  const encontrados = texto
    ? registros.filter(registro => colunas.some(coluna => textoBusca(registro.valores[coluna]).includes(textoBusca(texto))) || textoBusca(registro.faturamento).includes(textoBusca(texto))).length
    : registros.length;
  elementos.contagem.textContent = `${formatarNumero(registros.length)} registro(s) após os filtros${texto ? ` · ${formatarNumero(encontrados)} na tabela` : ''}`;
}

function atualizarPainel() {
  registrosFiltrados = linhasAplicandoFiltros();
  atualizarContagem(registrosFiltrados);
  atualizarIndicadores(registrosFiltrados);
  atualizarRankingProdutos(registrosFiltrados);
  desenharGraficos(registrosFiltrados);
  desenharTabela(registrosFiltrados);
}

function detalhesDeQualidade(base) {
  const totalDescartado = [...base.descartes.values()].reduce((total, quantidade) => total + quantidade, 0);
  const ausencias = [...base.ausentes.entries()].filter(([, quantidade]) => quantidade > 0);
  const ausenciasTexto = ausencias.map(([coluna, quantidade]) => `${formatarNumero(quantidade)} em ${rotuloColuna(coluna).toLocaleLowerCase('pt-BR')}`).join(', ');
  const motivos = [...base.descartes.entries()].map(([motivo, quantidade]) => `${formatarNumero(quantidade)} ${motivo}`).join('; ');
  const nomeComparacao = base.campoComparacao ? (normalizarNome(base.campoComparacao) === 'regiao' ? 'região' : 'canal') : null;
  const resumo = `${formatarNumero(base.registros.length)} registros válidos de ${formatarNumero(base.linhasRecebidas)} linhas lidas. ${nomeComparacao ? `A comparação disponível é por ${nomeComparacao}.` : 'A base não contém região nem canal para comparação.'}`;
  const status = totalDescartado
    ? `${formatarNumero(totalDescartado)} registro(s) descartado(s): ${motivos}.`
    : 'Nenhum registro descartado.';
  return { resumo, status: `${status}${ausenciasTexto ? ` Valores ausentes mantidos: ${ausenciasTexto}.` : ''}` };
}

function aplicarBase(base, nomeArquivo, linhasComErroPapa = 0) {
  todosRegistros = base.registros;
  colunas = base.colunas;
  campo = base.campos;
  campoArea = base.campoComparacao;
  nomeBase = nomeArquivo;
  ordenacao = { coluna: campo.data, direcao: 'desc' };
  elementos.pesquisa.value = '';
  preencherFiltros();
  const qualidade = detalhesDeQualidade(base);
  elementos.resumo.textContent = `${nomeBase} · ${qualidade.resumo}`;
  elementos.status.textContent = linhasComErroPapa ? `${qualidade.status} Papa Parse sinalizou ${formatarNumero(linhasComErroPapa)} problema(s) de estrutura no CSV.` : qualidade.status;
  atualizarPainel();
}

function importarDemonstracao() {
  if (!window.Papa) {
    elementos.resumo.textContent = 'A biblioteca Papa Parse não carregou. Conecte-se à internet para abrir o dashboard.';
    return;
  }
  const resultado = Papa.parse(CSV_DEMONSTRACAO, { header: true, skipEmptyLines: 'greedy', dynamicTyping: false });
  const base = criarBase(resultado.data, resultado.meta.fields);
  if (base.erro) {
    elementos.resumo.textContent = base.erro;
    return;
  }
  aplicarBase(base, nomeBase, resultado.errors.length);
}

function importarArquivo(arquivo) {
  if (!arquivo) return;
  if (!window.Papa) {
    elementos.status.textContent = 'Não foi possível importar: Papa Parse requer acesso à internet.';
    return;
  }
  Papa.parse(arquivo, {
    header: true,
    skipEmptyLines: 'greedy',
    dynamicTyping: false,
    complete: resultado => {
      const base = criarBase(resultado.data, resultado.meta.fields);
      if (base.erro) {
        elementos.status.textContent = `CSV não importado. ${base.erro}`;
        return;
      }
      aplicarBase(base, arquivo.name, resultado.errors.length);
      elementos.arquivo.value = '';
    },
    error: erro => { elementos.status.textContent = `Erro ao ler o CSV: ${erro.message}`; }
  });
}

function limparFiltros() {
  preencherFiltros();
  elementos.pesquisa.value = '';
  atualizarPainel();
}

function exportarCSV() {
  if (!registrosFiltrados.length || !window.Papa) return;
  const camposSaida = [...colunas, 'faturamento_linha'];
  const dados = registrosFiltrados.map(registro => [
    ...colunas.map(coluna => registro.valores[coluna] ?? ''),
    registro.faturamento.toFixed(2)
  ]);
  const csv = Papa.unparse({ fields: camposSaida, data: dados });
  const arquivo = new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(arquivo);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'vendas-filtradas.csv';
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function iniciar() {
  elementos.importar.addEventListener('click', () => elementos.arquivo.click());
  elementos.arquivo.addEventListener('change', evento => importarArquivo(evento.target.files[0]));
  elementos.limpar.addEventListener('click', limparFiltros);
  elementos.exportar.addEventListener('click', exportarCSV);
  elementos.pesquisa.addEventListener('input', () => {
    atualizarContagem(registrosFiltrados);
    desenharTabela(registrosFiltrados);
  });
  for (const filtro of [elementos.filtroDataInicio, elementos.filtroDataFim, elementos.filtroCategoria, elementos.filtroArea]) {
    filtro.addEventListener('change', atualizarPainel);
  }
  importarDemonstracao();
  if (!window.Chart) elementos.status.textContent = 'Os gráficos precisam da biblioteca Chart.js. Verifique sua conexão com a internet.';
}

document.addEventListener('DOMContentLoaded', iniciar);
