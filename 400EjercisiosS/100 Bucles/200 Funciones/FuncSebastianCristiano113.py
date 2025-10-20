def reemplazar_vocales_por_x():
    JosephBeltran = "frase de ejemplo para reemplazar las vocales"
    nueva = ""
    for c in JosephBeltran:
        if c in "aeiou":
            nueva += "x"
        else:
            nueva += c
    return nueva

print(reemplazar_vocales_por_x())