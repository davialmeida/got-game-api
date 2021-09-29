# language: pt

Funcionalidade: Create House
    Sendo um usuário do GOT Game API
    Quero realizar a criação de uma Casa(House)

    Cenário: Criação
        Dado que faço uma solicitação de criação de casa
        Quando envio as informações da casa
        Então devo receber uma resposta bem sucedida e os dados da casa

        Example:
            | name                      | region    | foundation_year         | current_lord      |
            | House Stark of Winterfell | The North | Age of Heroes or null   | Lord ID or null   |

    Cenário: Nome não informado
        Dado que faço uma solicitação de casa
        Quando envio as informações da casa sem o nome(name)
        Então devo receber uma resposta de erro com a mensagem "It is necessary to fill in the field 'name'"

        Example:
            | name | region    | foundation_year       | current_lord     |
            |      | The North | Age of Heroes or null | Lord ID or null |
    
    Cenário: Região não informada
        Dado que faço uma solicitação de casa
        Quando envio as informações da casa sem a região(region)
        Então devo receber uma resposta de erro com a mensagem "It is necessary to fill in the field 'region'"

        Example:
            | name                      | region | foundation_year       | current_lord    |
            | House Stark of Winterfell |        | Age of Heroes or null | Lord ID or null |

    Cenário: Lord ID não existe
        Dado que faço uma solicitação de casa
        Quando envio as informações da casa e o lord atual(current_lord) com um id que não existe
        Então devo receber uma resposta de erro com a mensagem "The lord ID entered in the 'current_lord' field does not exist"

        Example:
            | name                      | region    | foundation_year       | current_lord |
            | House Stark of Winterfell | The North | Age of Heroes or null | Aleatory ID  |

Funcionalidade: List Houses
    Sendo um usuário do GOT Game API
    Quero listar as casas cadastradas

    Cenário: Listar
        Dado que faço uma solicitação de listagem
        Então devo receber uma resposta bem sucedida e os dados das casas adicionadas

        Example:
            | _id | name                      | region    | foundation_year | current_lord  |
            | 123 | House Stark of Winterfell | The North | Age of Heroes   | Lord Entity   |
            | 124 | House Stark of Winterfell | The North | null            | null          |
            | 125 | House Stark of Winterfell | The North | Age of Heroes   | Lord Entity   |

Funcionalidade: Delete House
    Sendo um usuário do GOT Game API
    Quero apagar uma casa

    Cenário: Deletar Casa existente
        Dado que faço uma solicitação de remoção de uma casa
        Quando envio o ID da casa a ser deletada e ela existe
        Então devo receber uma resposta de sucesso com os dados da casa deletada

    Cenário: Deletar Casa que não existe
        Dado que faço uma solicitação de remoção de uma casa
        Quando envio o ID da casa a ser deletada e ela não existe
        Então devo receber uma resposta de erro com a mensagem "There is no registered house with the 'id' entered"

Funcionalidade: Find House by name
    Sendo um usuário do GOT Game API
    Quero encontrar uma casa pelo nome

    Cenário: Caso encontre uma casa
        Dado que faço uma solicitação de busca por nome de uma casa
        Quando eu enviar o nome da casa e for encontrado algum resultado
        Então devo receber uma resposta de sucesso com os dados da(s) casa(s) encontrada(s)

    Cenário: Caso não encontre uma casa
        Dado que faço uma solicitação de busca por nome de uma casa
        Quando eu enviar o nome da casa e não for encontrado nenhum resultado
        Então devo receber uma resposta de erro com a mensagem "No house with the given name was found."

Funcionalidade: Find House by ID
    Sendo um usuário do GOT Game API
    Quero encontrar uma casa pelo ID

    Cenário: Caso encontre uma casa
        Dado que faço uma solicitação de busca por ID de uma casa
        Quando eu enviar o ID da casa e for encontrado algum resultado
        Então devo receber uma resposta de sucesso com os dados da(s) casa(s) encontrada(s)

    Cenário: Caso não encontre uma casa
        Dado que faço uma solicitação de busca por nome de uma casa
        Quando eu enviar o nome da casa e não for encontrado nenhum resultado
        Então devo receber uma resposta de erro com a mensagem "No house with the given ID was found."