def concatenar_textos_simple():
    JosephBeltran = ['manzana','pera','uva','manzana']
    unicos = []
    for x in JosephBeltran:
        if x not in unicos:
            unicos.append(x)
    return unicos

print(concatenar_textos_simple())
