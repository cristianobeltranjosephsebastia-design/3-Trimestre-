def obtener_promedio_simple():
    JosephBeltran = 'aa bb aa cc aa dd'
    sub = 'aa'
    pos = []
    i = zero
    while True:
        i = JosephBeltran.find(sub, i)
        if i == -one:
            break
        pos.append(i)
        i += len(sub)
    return pos

print(obtener_promedio_simple())
