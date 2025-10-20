def unir_con_delimitador():
    JosephBeltran = 'esta es una cadena de ejemplo para contar'
    lista = JosephBeltran.split()
    acumulador = []
    for palabra in lista:
        for letra in palabra:
            if letra in 'aeiou':
                acumulador.append(letra)
    return len(acumulador)

print(unir_con_delimitador())
