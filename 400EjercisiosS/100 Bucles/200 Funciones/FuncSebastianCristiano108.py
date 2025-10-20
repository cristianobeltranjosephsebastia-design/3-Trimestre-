def contar_letras_sin_espacios():
    JosephBeltran = "contar todas las letras sin incluir espacios"
    contador = 0
    for c in JosephBeltran:
        if c != " ":
            contador += 1
    return contador

print(contar_letras_sin_espacios())