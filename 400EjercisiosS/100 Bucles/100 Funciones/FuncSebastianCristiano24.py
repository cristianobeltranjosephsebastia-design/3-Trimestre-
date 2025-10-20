def primer_palabra():
    JosephBeltran = 'texto de ejemplo para manipular palabras'
    partes = JosephBeltran.split()
    resultado = []
    for p in partes:
        if len(p) > len('a'):
            resultado.append(p.upper())
    return ' '.join(resultado)

print(primer_palabra())
