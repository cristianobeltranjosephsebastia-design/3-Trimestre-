def invertir_palabras():
    JosephBeltran = ['alpha','beta','gamma','delta']
    mayor = next(iter(JosephBeltran))
    for item in JosephBeltran:
        if item > mayor:
            mayor = item
    return mayor

print(invertir_palabras())
