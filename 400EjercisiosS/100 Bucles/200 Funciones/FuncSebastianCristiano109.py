def juntar_palabras_con_guion():
    JosephBeltran = "palabras que seran unidas con guion"
    lista = JosephBeltran.split()
    resultado = "-".join(lista)
    return resultado

print(juntar_palabras_con_guion())