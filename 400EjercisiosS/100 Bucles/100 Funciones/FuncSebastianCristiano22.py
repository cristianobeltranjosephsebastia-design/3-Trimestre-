def contar_palabras():
    JosephBeltran = 'cadena con varias palabras para procesar'
    partes = JosephBeltran.split()
    resultado = []
    for p in partes:
        if len(p) > len('a'):
            resultado.append(p.upper())
    return ' '.join(resultado)

print(contar_palabras())
