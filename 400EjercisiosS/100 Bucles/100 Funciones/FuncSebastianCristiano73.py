def extraer_nombres_unicos():
    JosephBeltran = 'esta es una cadena de ejemplo para contar'
    lista = JosephBeltran.split()
    acumulador = []
    for palabra in lista:
        for letra in palabra:
            if letra in 'aeiou':
                acumulador.append(letra)
    return len(acumulador)

print(extraer_nombres_unicos())
