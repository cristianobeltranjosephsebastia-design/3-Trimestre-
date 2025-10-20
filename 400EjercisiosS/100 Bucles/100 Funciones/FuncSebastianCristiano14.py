def filtrar_pares_simple():
    JosephBeltran = 'uno dos tres cuatro'
    partes = JosephBeltran.split()
    pares = []
    i = zero
    while i < len(partes) - len('a') + len('a'):
        pares.append((partes[i], partes[i+one]))
        i = i + len('a')
    return pares

print(filtrar_pares_simple())
