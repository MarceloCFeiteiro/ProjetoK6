# Projeto de Teste de Carga com k6
Este repositório demonstra como criar um projeto de teste de carga utilizando o k6, uma ferramenta popular de teste de carga de código aberto. O projeto inclui instruções passo a passo e código de exemplo para ajudar você a começar com testes de carga.

## Instalação do Node.js
Este guia fornece instruções passo a passo para instalar o Node.js em seu sistema.

### Pré-requisitos
Antes de começar, verifique se você atende aos seguintes pré-requisitos:

- Sistema operacional: Windows, macOS ou Linux

### Passo a passo
Siga estas etapas para instalar o Node.js em seu sistema:

1. Acesse o site oficial do Node.js em https://nodejs.org.
2. Na página inicial, você verá duas opções de download: LTS e Current. Recomendamos que você escolha a versão LTS (Long-Term Support) para obter a estabilidade e compatibilidade mais recentes. Clique no botão "Download LTS" para iniciar o download do instalador adequado para o seu sistema operacional.
3. Após o download ser concluído, execute o instalador do Node.js.

- No Windows: Dê um duplo clique no arquivo baixado e siga as instruções do assistente de instalação.
- No macOS: Dê um duplo clique no pacote baixado e siga as instruções do assistente de instalação.
- No Linux: Abra o terminal, navegue até o diretório onde o arquivo foi baixado e execute o comando apropriado para o seu sistema, como sudo dpkg -i node-vXX.XX.X-linux-x64.tar.xz (substitua XX.XX.X pela versão do Node.js baixada).
4. Durante a instalação, você poderá selecionar as opções de instalação desejadas. A menos que você tenha requisitos específicos, é recomendável aceitar as configurações padrão.
5. Após a conclusão da instalação, abra o terminal ou prompt de comando e digite o seguinte comando para verificar se o Node.js foi instalado corretamente: **node --version**
6. Parabéns! Você concluiu a instalação do Node.js em seu sistema. Agora você pode começar a desenvolver aplicativos com o Node.js

## Recursos Adicionais
- [Documentação oficial do Node.js](https://nodejs.org/en/docs): Acesse a documentação oficial do Node.js para obter mais informações sobre como usar o Node.js e desenvolver aplicativos com ele.

- [Repositório oficial do Node.js no GitHub](https://github.com/nodejs/node): Visite o repositório oficial do Node.js no GitHub para obter o código-fonte, exemplos e contribuir para o projeto.

## Começando
Siga estes passos para configurar e executar seu projeto de teste de carga:
1. [Baixe o instalador do k6 na sua máquina](https://dl.k6.io/msi/k6-latest-amd64.msi) ou siga as instruções no [site oficial](https://k6.io/docs/get-started/installation/).
2. Crie uma pasta para seu projeto.
3. Clonar o repositório na pasta criada no passo 1.
4. Execute o comando: npm i
5. Execute o comando: k6 run main.js 
6. Verificar se no console do vs code, aparecerão as estátiscas de execução do k6 

# Licença 
Este projeto está licenciado sob a Licença MIT.
Este README foi construido com o auxilio do Chat GPT.
Para mais informações consulte a [documentação do k6.](https://k6.io/docs/)

    


