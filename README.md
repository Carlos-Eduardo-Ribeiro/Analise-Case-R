# Análise dos Impactos da Distorção Idade–Série e do Abandono Escolar na Taxa de Aprovação

Este repositório reúne todo o processo de análise sobre como a distorção idade–série e o abandono escolar influenciam a taxa de aprovação no Brasil, utilizando dados abertos do INEP. O objetivo é compreender relações entre esses indicadores e apoiar estudos e políticas públicas voltadas para a melhoria do fluxo escolar.

---

## 📂 Estrutura do Repositório

/  
├── dados/ # Arquivos brutos e tratados (não versionados, se muito grandes)  
├── scripts/ # Scripts de limpeza, análise e visualização  
├── relatorios/ # RMarkdown, HTML ou PDFs com resultados   
├── figuras/ # Gráficos e imagens geradas  
├── README.md # Documentação principal  

---

## 🎯 Objetivos do Projeto

- Analisar a relação entre **distorção idade–série** e **taxa de aprovação**.
- Investigar como o **abandono escolar** interfere no fluxo e desempenho.
- Criar tabelas e visualizações que destaquem padrões e tendências.
- Desenvolver um pipeline reprodutível de limpeza e preparação dos dados do INEP.

---

## 📊 Fonte dos Dados

Os dados são obtidos no portal aberto do INEP:

**INEP – Indicadores Educacionais**  
🔗 https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/indicadores-educacionais

Os indicadores utilizados podem incluir (dependendo da análise):
- Taxa de aprovação
- Distorção idade–série
- Abandono escolar
- Fluxo escolar
- Indicadores por UF, município e rede de ensino

---

## 🛠️ Tecnologias Utilizadas

- **R** com `tidyverse`, `readxl`, `janitor`, `ggplot2`
- **RMarkdown** para documentação
- **Git/GitHub** para versionamento

---

## 🚀 Como Reproduzir a Análise

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/repositorio.git
2. Instale os pacotes necessários no R:
   ```bash
   install.packages(c("tidyverse", "readxl", "janitor", "ggplot2"))
3. Abra o arquivo principal de análise:
   ```bash
   relatorios/analise-inep.Rmd
4. Baixe a base de dados pelo link fixado
   ```bash
   https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/indicadores-educacionais
7. altere as referências/caminhos
   ````bash
   caminho <- "C:/Users/nome/Documentos/data"
9. Execulte o script

---

## 📈 Resultados Esperados

- Visão geral dos indicadores de fluxo escolar.

- Comparação da taxa de aprovação entre grupos com maior/menor distorção idade–série.

- Relação entre abandono e aprovação ao longo do tempo.

- Gráficos e tabelas que sintetizam os padrões encontrados.
