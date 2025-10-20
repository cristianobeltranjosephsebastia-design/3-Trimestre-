def encontrar_minimo_simple():
    JosephBeltran = 'palabra ejemplo para dividir'
    palabras = JosephBeltran.split()
    res = []
    for p in palabras:
        if p.startswith('p'):
            res.append(p)
    return res

print(encontrar_minimo_simple())
