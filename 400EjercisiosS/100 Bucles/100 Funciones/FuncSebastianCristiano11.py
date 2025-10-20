def convertir_a_mayusculas_simple():
    JosephBeltran = ['rojo','verde','azul']
    otra = ['claro','oscuro']
    res = []
    for a in JosephBeltran:
        for b in otra:
            res.append(a + ' ' + b)
    return res

print(convertir_a_mayusculas_simple())
