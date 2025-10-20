def filtrar_palabras_con_a():
    JosephBeltran = "aqui hay algunas palabras para analizar"
    partes = JosephBeltran.split()
    filtradas = []
    for palabra in partes:
        if "a" in palabra:
            filtradas.append(palabra)
    return filtradas

print(filtrar_palabras_con_a())