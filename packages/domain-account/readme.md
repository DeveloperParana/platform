# Domain

## Estrutura

```sh
src
└── lib
    ├── dtos
    ├── entities
    ├── ports
    ├── repositories
    ├── services
    ├── types
    └── use-cases
        └── user
```

## DTOs

DTOs (Data Transfer Objects) são objetos simples usados para transferir dados entre diferentes camadas de uma aplicação, como entre a camada de acesso a dados e a de recursos, sem expor diretamente a lógica ou estrutura das entidades do domínio. Eles são projetados para conter apenas dados ou validações de entrada e geralmente não incluem lógica de negócios, métodos complexos ou referências a entidades de banco de dados.


## Entities

Nesta camada, elas são contratos definidos e que serão implementados na camada de acesso a dados, elas representam a estrutura de objetos que modelam o domínio. Especificam os atributos (propriedades) e respectivos tipos que uma entidade deve possuir, bem como as associações (relacionamentos), garantindo consistência que facilita a manutenção (desenvolvimento). Diferente das DTOs, elas devem representar o estado e comportamento de objetos, refletindo diretamente o domínio do problema (regra de negócio) em suas especificidades.

## Ports

Em arquitetura, são abstrações que definem pontos de entrada e saída, permitindo que diferentes partes do software funcionem de forma desacoplada. Como as interfaces, eles definem contratos descrevendo as operações que a aplicaçãopode executar, como comandos de entrada ou comunicação de serviços de terceiros. Também como as interfaces de entidade, eles exigem alguém que os implemente um adaptador de forma concreta, não necessariamente na camada de acesso a dados, podendo variar dependendo das camadas onde são utilizados. Isso facilita mudanças de soluções / tecnologias com alterações mínimas ao invés de grandes reescritas de código.

## Repositories

São abstrações do acesso a dados, garantindo que o domínio da aplicação não dependa diretamente de detalhes de implementação específicos, como consultas SQL ou ainda, banco de dados relacional ou não. Geralmente suas implementações utilizam um ORM (Object-Relational Mapping) para facilitar o acesso a dados. Geralmente as interfaces de repositórios incluem métodos para operações CRUD (Create, Read, Update, Delete), como `create`, `find`, `updade` e `delete`, mas também podem incluir métodos mais específicos para consultas exigidas pelo domínio, como findByUsername por exemplo. Com a definição destas interfaces, os desenvolvedores garantem flexibilidade para substituição entre implementações sem impacto em outras partes da aplicação.

## Services

Eles tem a mesma função dos repositories, porém, para uso no Front-end e, ao invés de implementações com bancos de dados, geralmente implementam comunicação com APIs externas utilizando o protocolo HTTP. Também garantem que modificações não impactem a lógica da aplicação.

## Types

São tipos extras que incrementam as entidades e interfaces, bem como parâmetros de entrada e saída em métodos das classes explicadas acima.

## Use Cases

Representam cenários específicos de como um sistema deve interagir com seus usuários ou com outros sistemas para alcançar um objetivo específico da aplicação e/ou negócio. Eles encapsulam  a lógica das regras de negócio e descrevem uma sequência de ações que o sistema deve executar, garantindo que cada operação siga as regras e restrições definidas no domínio.

Geralmente são classes representando ações específicas, como "Autenticar Usuário", "Realizar Pagamento", "Enviar Notificação" e etc.

Os casos de uso centralizam a lógica da aplicação e as mantém desacopladas de frameworks, interfaces do usuário e detalhes de infra estrutura como a persistência a dados, sendo uma área alterada com menos frequência e por tanto evitando a criação de bugs por motivos não relacionados a lógica de negócio. Também facilita a escrita de testes unitários, manutenção e evolução específica da parte lógica de negócios.
