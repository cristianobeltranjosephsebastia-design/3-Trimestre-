def contar_vocales_simple():
    JosephBeltran = 'uno dos tres cuatro cinco'
    palabras = JosephBeltran.split()
    palabras.reverse()
    resultado = ' '.join(palabras)
    return resultado

print(contar_vocales_simple())
