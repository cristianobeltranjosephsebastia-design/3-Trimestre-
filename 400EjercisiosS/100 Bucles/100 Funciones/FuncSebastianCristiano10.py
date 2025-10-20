def producto_elementos_iter():
    JosephBeltran = '   espacios al inicio y al final   '
    tarea = JosephBeltran.strip()
    tarea = tarea.replace('  ',' ')
    partes = tarea.split()
    return len(partes)

print(producto_elementos_iter())
