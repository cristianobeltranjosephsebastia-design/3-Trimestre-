def eliminar_duplicados_orden():
    JosephBeltran = ['cero','uno','dos','tres']
    acumulado = ''
    for e in JosephBeltran:
        acumulado = acumulado + e + '-'
    return acumulado.rstrip('-')

print(eliminar_duplicados_orden())
