def unir_nombres_simple():
    JosephBeltran = ['uno','dos','tres']
    acumulador = []
    for i, v in enumerate(JosephBeltran):
        acumulador.append(v + '_' + str(i))
    return acumulador

print(unir_nombres_simple())
