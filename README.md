# projetoMobile
Projeto final de Desenvolvimento Mobile.

# Requisitos
- Instalar o Node.js (https://nodejs.org/dist/v12.18.1/node-v12.18.1-x64.msi)
- Instalar o Git (https://github.com/git-for-windows/git/releases/download/v2.27.0.windows.1/Git-2.27.0-64-bit.exe)

# Passo a passo para rodar o projeto
- Abrir uma pasta qualquer, clicar com o botão direito e selecionar Git Bash Here para abrir o terminal do Git.
- Para clonar o projeto, executar o comando "git clone https://github.com/brenobrandao2/projetoMobile.git" no terminal que foi aberto no passo anterior.
- Abrir o Visual Studio Code (download: https://aka.ms/win32-x64-user-stable), clicar em File > Open Folder > selecionar a pasta que foi clonada anteriormente.
- Ainda no VS Code, clicar em Terminal > New Terminal para abrir um terminal que apontará automaticamente para a pasta do projeto.
- No terminal que foi aberto no VS Code, executar os seguintes comandos:
   -"npm install -g @ionic/cli" para instalar o Ionic.
   -"git checkout develop" para alternar para a branch develop.
   -"npm install" para instalar as dependências do projeto.
   -"ionic serve" para executar o projeto
Ao executar o último comando, o projeto será executado no Chrome. Para visualizar o app simulando uma tela mobile siga os seguintes passos:
- Aperte F12 para abrir o Inspecionar do Chrome.
- Clicar em Toggle Device Toolbar (Pequena imagem de um tablet e um celular no canto superior direito).
- Trocar o item "Responsive" para algum celular android.
Qualquer dúvida me avise!
