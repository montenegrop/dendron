tester = "[{["

def nex(x):
    if x == "{":
        return "}"
    elif x == "[":
        return "]"
    elif x == "(":
        return ")"
    else:
        return False

print(tester)


def elimina(word):
    if word == []:
        return "valido"
    index = 0
    validez = "invalido"
    for x in word[:-1]:
        if nex(x) == word[index + 1]:
            validez = "valido"
            word.pop(index)
            word.pop(index)
            return elimina(word)
        index = index + 1
    return validez

print(elimina(list(tester)))
