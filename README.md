# Painel interativo de vendas

Dashboard estático para a atividade de Fundamentos de IA e Análise de Dados. O projeto usa HTML, CSS e JavaScript puros, sem backend, banco de dados ou etapa de compilação.

## Abrir o dashboard

Abra `public/index.html` diretamente no navegador. A página começa com a base fictícia `public/dados-exemplo.csv`; uma cópia do mesmo conteúdo está incorporada em `public/script.js`, então a demonstração não precisa buscar o CSV usando `fetch`.

Chart.js 4.4.8 e Papa Parse 5.4.1 são carregados por CDN. É necessário ter acesso à internet para carregar essas bibliotecas, desenhar os gráficos e importar ou exportar arquivos CSV. A fonte DM Sans também é carregada online; sem internet, o navegador usa fontes locais substitutas.

## Base de demonstração

Não havia um arquivo chamado `vendas.csv` no projeto. Por isso, foi criada uma base demonstrativa fictícia com 200 linhas distribuídas entre janeiro e dezembro de 2025. Cada linha representa a venda de um produto. O arquivo original `vendas_hamburgueria.csv` foi preservado sem alterações.

| Coluna | Descrição |
| --- | --- |
| `id_venda` | Identificador único da linha de venda. |
| `data` | Data no formato `AAAA-MM-DD`. |
| `produto` | Produto vendido. |
| `categoria` | Categoria do produto. |
| `regiao` | Região associada à venda. |
| `quantidade` | Unidades vendidas na linha. |
| `preco_unitario` | Preço por unidade, em reais, sem símbolo de moeda. |

O arquivo `vendas_hamburgueria.csv` que já existia no projeto não tem a coluna `regiao`; ele contém `canal` e cobre apenas julho a setembro de 2026. Ele não é publicado nem usado como demonstração inicial. Se for selecionado manualmente no botão de importação, o painel identifica `canal` como dimensão de comparação e filtro. Nenhum dado de região é inferido ou inventado para esse arquivo.

## Indicadores e regras

- **Faturamento por linha:** `quantidade × preco_unitario`.
- **Faturamento total:** soma do faturamento das linhas que passam pelos filtros.
- **Quantidade de vendas:** contagem de `id_venda` únicos nas linhas filtradas.
- **Unidades vendidas:** soma de `quantidade` nas linhas filtradas.
- **Ticket médio:** faturamento total dividido pela quantidade de vendas únicas. Sem vendas, o valor é R$ 0,00.

Datas e números essenciais são validados na importação. Linhas com ID vazio, data inválida/ausente ou quantidade/preço ausentes, inválidos ou negativos são descartadas, com a contagem e os motivos informados na interface. Zero é um valor numérico válido e não é tratado como dado ausente. Campos opcionais vazios são preservados e contabilizados. Linhas com IDs repetidos não são removidas: o faturamento e as unidades continuam sendo somados por linha, enquanto o indicador de vendas conta IDs únicos.

Os filtros de período, categoria e região (ou canal, se essa for a coluna disponível) atualizam os cartões, gráficos, rankings de cinco produtos mais/menos vendidos e tabela. Os rankings somam unidades por produto; se houver menos de dez produtos, alguns podem aparecer em ambas as listas. A pesquisa e a ordenação atuam na tabela. A exportação inclui as linhas após os filtros e uma coluna calculada `faturamento_linha`.

## Importar uma base própria

Use **Importar CSV** e selecione um arquivo no dispositivo. O conteúdo é lido localmente pelo navegador, sem envio a um servidor. O CSV precisa conter `id_venda` (ou `id`), `data`, `categoria`, `quantidade` e `preco_unitario` (ou `preco`); `produto` é recomendado. A comparação usa `regiao` quando disponível e, na ausência dela, usa `canal`. Datas devem estar em `AAAA-MM-DD`; números podem usar ponto ou vírgula decimal. As colunas extras são mantidas na tabela e no CSV exportado.

## Publicar como Static Site no Render

1. Envie o projeto ao GitHub, incluindo `AGENTS.md`, `README.md` e a pasta `public`.
2. No Render, crie um serviço **Static Site** e conecte o repositório GitHub.
3. Configure **Branch** para a branch que contém o projeto.
4. Deixe **Root Directory** vazio.
5. Em **Build Command**, informe `echo "Site pronto"`.
6. Em **Publish Directory**, informe `public`.
7. Crie o site. O Render publicará `public/index.html` e os arquivos relativos da pasta.

## Arquivos

- `AGENTS.md`: orientações de desenvolvimento do projeto.
- `public/index.html`: conteúdo e controles do dashboard.
- `public/logo-nunesflavio-dev.svg`: logotipo vetorial da marca.
- `public/styles.css`: aparência responsiva.
- `public/script.js`: dados demonstrativos incorporados, leitura/validação de CSV, filtros, cálculos, gráficos, tabela e exportação.
- `public/dados-exemplo.csv`: base fictícia usada na demonstração.
