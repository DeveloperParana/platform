# Platform

Plataforma da comunidade DevParaná que além de cumprir sua missão como software, também ensina sobre software.

Encontraremos conceitos essenciais para desenvolver software de qualidade, fazendo conexões entre conceitos teóricos e aplicações práticas.

## Responsabilidades e relacionamentos

Trata-se de responsabilidade e relacionamentos, ou seja, qual a responsabilidade de cada camada e quais camadas podem depender diretamente uma das outras. Na tabela a seguir vemos que camadas do tipo `util` podem depender apenas de camadas que também sejam do tipo `util`, camadas do tipo `domain` podem depender apenas de camadas do tipo `util`, camadas do tipo `data-source` podem depender apenas dos tipos `util` e `domain` e assim por diante.

Caso tenha interesse em aprofundar neste assunto e descobrir os motivos, recomendo que leia um conteúdo que escrevi ano passado, você pode fazer download através do link a seguir. [Arquitetura em camadas, uma abordagem sobre responsabilidades e relacionamentos](https://conteudode.dev/pdf/nx)

|               | util | domain | data-source | data-access | resource | feature | app | api |
| ------------: | :--: | :----: | :---------: | :---------: | :------: | :-----: | :-: | :-: |
|        `util` |  ✓   |   ✓    |      ✓      |      ✓      |    ✓     |    ✓    |  ✓  |  ✓  |
|      `domain` |  𝗫   |   𝗫    |      ✓      |      ✓      |    𝗫     |    𝗫    |  𝗫  |  ✓  |
| `data-source` |  𝗫   |   𝗫    |      𝗫      |      𝗫      |    ✓     |    𝗫    |  ✓  |  ✓  |
| `data-access` |  𝗫   |   𝗫    |      𝗫      |      𝗫      |    𝗫     |    ✓    |  ✓  |  ✓  |
|    `resource` |  𝗫   |   𝗫    |      𝗫      |      𝗫      |    ✓     |    𝗫    |  ✓  |  ✓  |
|     `feature` |  𝗫   |   𝗫    |      𝗫      |      𝗫      |    𝗫     |    ✓    |  ✓  |  ✓  |
|         `app` |  𝗫   |   𝗫    |      𝗫      |      𝗫      |    𝗫     |    𝗫    |  𝗫  |  𝗫  |
|         `api` |  𝗫   |   𝗫    |      ✓      |      ✓      |    𝗫     |    ✓    |  ✓  |  ✓  |

## Conceitos

### SOLID

1. **Single Responsibility Principle** ou Princípio da Responsabilidade Única diz que uma classe deve ter apenas uma única responsabilidade e assim, um único motivo para mudar.

1. **Open-Closed Principle** ou Princípio do Aberto-Fechado diz que uma classe deve estar aberta para novos cenários, mas fechada para modificação.

1. **Liskov Substitution Principle** ou Princípio da Substituição de Liskov diz que os objetos de uma classe derivada devem ser substituíveis por objetos de sua classe base sem alterar o comportamento do software.

1. **Interface Segregation Principle** ou Princípio da Segregação de Interface diz que interfaces devem ser separadas para que classes possam depender apenas dos métodos que utilizam.

1. **Dependency Inversion Principle** ou Princípio da Inversão de Dependência diz que módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

### Conceitos aplicados

#### Liskov Substitution Principle

- A função [`provideCryptoService`](packages/data-source-account/src/lib/providers/crypto.ts) aplica este princípio permitindo a possibilidade de substituição da classe abstrata [`CryptoService`](packages/domain-account/src/lib/ports/crypto.service.ts) por outra, no nosso caso, está sendo substituída pela classe [`CryptoServiceImpl`](packages/data-source-account/src/lib/services/crypto.ts), do arquivo [`providers.ts`](packages/data-source-account/src/lib/providers.ts)

```ts
const dataSourceAccountProviders: Provider[] = [
  // ...

  provideCryptoService(CryptoServiceImpl),

  // ...
];
```
