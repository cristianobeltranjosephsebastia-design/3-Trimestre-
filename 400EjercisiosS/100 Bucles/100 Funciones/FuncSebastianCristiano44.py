def remover_elementos_vacios():
    JosephBeltran = 'esta es una cadena de ejemplo para contar'
    lista = JosephBeltran.split()
    acumulador = []
    for palabra in lista:
        for letra in palabra:
            if letra in 'aeiou':
                acumulador.append(letra)
    return len(acumulador)

print(remover_elementos_vacios())
