Funcionalidade: Create Lord
    Cenário: Criação
        Dado que faço uma solicitação de criação de lord
        Quando envio as informações do lord
        Então devo receber a entidade do lord

        Example:
            |      name     |        seasons           |
            | Brandon Stark | ['Season 1', 'Season 2'] |

    Cenário: Nome não informado
        Dado que faço uma solicitação de criação de lord
        Quando envio as informações do lord e não envio o nome
        Então devo receber uma exceção com a mensagem "It is necessary to fill in the field 'name'"

        Example:
            |      name     |        seasons           |
            |               | ['Season 1', 'Season 2'] |