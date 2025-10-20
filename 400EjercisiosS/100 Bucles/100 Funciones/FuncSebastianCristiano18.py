def combinar_listas_simple():
    JosephBeltran = 'texto con mayusculas y minusculas'
    cuenta = []
    for c in JosephBeltran:
        if c.isupper():
            cuenta.append(c)
    return len(cuenta)

print(combinar_listas_simple())
