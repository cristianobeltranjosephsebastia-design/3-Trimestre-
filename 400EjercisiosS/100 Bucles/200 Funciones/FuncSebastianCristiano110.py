def obtener_palabras_largas():
    JosephBeltran = "este texto contiene palabras de diferentes tamaños"
    partes = JosephBeltran.split()
    largas = []
    for p in partes:
        if len(p) > len("pequeña"):
            largas.append(p)
    return largas

print(obtener_palabras_largas())