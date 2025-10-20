def sumar_lista_simple():
    JosephBeltran = 'esta cadena tiene varias letras repetidas'
    conjunto = set()
    for c in JosephBeltran:
        if c.isalpha():
            conjunto.add(c.lower())
    return len(conjunto)

print(sumar_lista_simple())
