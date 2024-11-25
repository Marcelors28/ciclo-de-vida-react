# Ciclo de vida em componentes funcionais com React JS

Este repositório faz parte das atividades do curso Dev Full Stack da MaisPraTi, neste projeto é possível colocar em prática as estruturas abordadas no módulo 04 do curso.. 

## Estrutura do Projeto

A estrutura do projeto é desenvolvida em uma estrutura de pastas clara. Incluindo uma pasta components para armazenar os componentes criados em cada atividade, facilitando a navegação e a leitura do código.
Foi criado uma página principal como menu para acessar cada atividade individualmente. Dessa forma, cada atividade pode ser testada separadamente sem interferir nas demais.

## Estrutura de Pastas

```plaintext
ciclo-de-vida-react/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├──LimitedCounter.jsx
│   │   ├── PersistentCounter.jsx
│   │   ├── RealTimeClock.jsx
│   │   ├── ToggleText.jsx
│   │   ├── UpdateTitulo.jsx
│   │   └── WindowSize.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── LimitedCounter.css
│   │   ├── PersistentCounter.css
│   │   ├── RealTimeClock.css
│   │   ├── ToggleText.css
│   │   ├── UpdateTitulo.css
│   │   └── WindowSize.css
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE.txt
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Atividades desenvolvidas

  **1 - Atualização de Título com useEffect**: Atualizar o título da aba do navegador confrome o usuário interage com o componente.

   ![image](https://github.com/user-attachments/assets/6bb0999e-fdc9-41cd-b2d6-050d1207ad80)


   
* number: Variável de estado que armazena o número, inicializada com 0.

* Hook useEffect:
 Atualiza o título da aba do navegador usando document.title toda vez que number muda.

* Funções de Manipulação:
increment: Incrementa o valor de number em 1.
decrement: Decrementa o valor de number em 1.

* Renderização:
 Exibe o número atual em um elemento h1.
 Adiciona botões para incrementar e decrementar o número, com estilo básico aplicado.
  

 **2 - Monitoramento de Largura da Janela**: Criar um componente que monitore e exiba a largura da janela do navegador, atualizando-se conforme a janela é redimensionada.

 ![image](https://github.com/user-attachments/assets/1b59be3d-477d-4feb-aac6-57e3ee2119a8)


* windowWidth: Variável de estado que armazena a largura atual da janela, inicializada com window.innerWidth.

* Função de Atualização:
updateWindowWidth: Atualiza o estado windowWidth com a largura atual da janela (window.innerWidth).

* Hook useEffect:
Adiciona um event listener para o evento resize da janela, que chama a função updateWindowWidth toda vez que a janela é redimensionada.
Utiliza a função de limpeza (cleanup) para remover o event listener quando o componente for desmontado, evitando possíveis vazamentos de memória.

* Renderização:
Exibe a largura atual da janela em um elemento h1, centralizado na tela.


 
 **3 - Sincronização de Estado com Local Storage**: Sincronizar o estado de um componente com o Local Storage para manter dados entre as sessões do navegador.

 ![image](https://github.com/user-attachments/assets/eb05b396-0813-46cb-ace1-cb1ea49cd818)
 

* counter: Variável de estado que armazena o contador. Inicializa com o valor do Local Storage, se disponível, ou com 0 se não houver valor salvo.

* Hook useEffect:
Atualiza o Local Storage com o valor do contador toda vez que o contador mudar.

* Funções de Manipulação:
increment: Incrementa o valor do contador em 1.
decrement: Decrementa o valor do contador em 1.

* Renderização:
Exibe o valor do contador em um elemento h1.
Adiciona botões para incrementar e decrementar o contador, com estilo básico aplicado.


**4 - Relógio em Tempo Real**: Criar um relógio digital que atualiza a hora a cada segundo.

![image](https://github.com/user-attachments/assets/fea72054-62df-40a0-a546-c4d28e90cdea)


* currentTime: Variável de estado que armazena a hora atual, inicializada com o valor de new Date().

* Hook useEffect:
Configura um intervalo que atualiza currentTime a cada segundo com setInterval.
Utiliza a função de limpeza (cleanup) para remover o intervalo quando o componente for desmontado, evitando vazamentos de memória.

* Renderização:
Exibe a hora atual formatada com toLocaleTimeString() em um elemento h1, centralizado na tela.


**5 - Exibir/Mostrar Texto**: Criar um componente que alterna entre exibir e esconder um texto com o clique de um botão.

![image](https://github.com/user-attachments/assets/30c06e8c-8cf1-47ad-a9d2-b7ba11bc4ff3)


![image](https://github.com/user-attachments/assets/d1246f3e-c417-4c9c-8f05-09bca127975f)


* isVisible: Variável de estado que armazena se o texto está visível ou não, inicializada como false.

* Função de Manipulação:
toggleVisibility: Alterna o estado de visibilidade do texto, invertendo o valor atual de isVisible.

* Renderização:
Renderiza um botão com um texto que muda dinamicamente entre "Esconder" e "Exibir" com base no estado de visibilidade.
Exibe o texto condicionalmente, apenas se isVisible for true.



**6 - Contador com Limite**: Criar um contador que não ultrapasse um limite superior e que avise quando atingido.

![image](https://github.com/user-attachments/assets/fa25fa06-fd5d-4a1d-bff6-261e35df8d6a)


* counter: Variável de estado que armazena o valor do contador, inicializada com 0.

* message: Variável de estado que armazena a mensagem de limite atingido.

* Funções de Manipulação:
increment: Incrementa o valor do contador, mas impede que ele ultrapasse 10. Exibe uma mensagem quando o limite é atingido.
decrement: Decrementa o valor do contador, garantindo que ele não fique negativo.

* Renderização:
Exibe o valor do contador em um elemento h1.
Exibe a mensagem de limite atingido, se houver.
Adiciona botões para incrementar e decrementar o contador, com estilo básico aplicado.

## Tecnologias Utilizadas

- HTML: Estrutura básica da interface.

- CSS: Utilizado para estilizar a aplicação.

- React JS: Lógica para controlar os inputs e demais componentes da aplicação.


## Como Visualizar o Projeto Localmente

1.Clone este repositório:

```bash
https://github.com/Marcelors28/ciclo-de-vida-react.git
```
2.Navegue até o diretório do projeto::

```bash
cd ciclo-de-vida-react
```

2.Instale as dependências:

```bash
npm install
```

3.Inície o servidor:

```bash
npm run dev
```

4. Execute o projeto em:

```bash
http://localhost:5173/
```

## Licença
Este projeto é licenciado sob a MIT License.

