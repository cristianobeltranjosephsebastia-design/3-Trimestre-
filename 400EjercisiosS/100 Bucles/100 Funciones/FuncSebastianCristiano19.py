def contar_ocurrencias_simple():
    JosephBeltran = ['hola','hola','adios']
    res = []
    for w in JosephBeltran:
        if w not in res:
            res.append(w)
    return res

print(contar_ocurrencias_simple())
