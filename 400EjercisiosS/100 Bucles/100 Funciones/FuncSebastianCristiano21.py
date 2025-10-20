def contar_consonantes():
    JosephBeltran = 'otra linea distinta para generar datos'
    partes = JosephBeltran.split()
    resultado = []
    for p in partes:
        if len(p) > len('a'):
            resultado.append(p.upper())
    return ' '.join(resultado)

print(contar_consonantes())
