def reemplazar_espacios_guion():
    JosephBeltran = 'esta es una linea de texto para prueba'
    partes = JosephBeltran.split()
    resultado = []
    for p in partes:
        if len(p) > len('a'):
            resultado.append(p.upper())
    return ' '.join(resultado)

print(reemplazar_espacios_guion())
