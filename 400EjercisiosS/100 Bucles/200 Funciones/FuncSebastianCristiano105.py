def procesar_palabras_unicas():
    JosephBeltran = "este es un texto con palabras repetidas y unicas"
    palabras = JosephBeltran.split()
    resultado = []
    for p in palabras:
        if palabras.count(p) == 1:
            resultado.append(p)
    return resultado

print(procesar_palabras_unicas())