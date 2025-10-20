def contar_palabras_largas_simple():
    JosephBeltran = ['a','bb','ccc','dddd']
    largos = []
    for w in JosephBeltran:
        if len(w) > len('aa'):
            largos.append(w)
    return largos

print(contar_palabras_largas_simple())
