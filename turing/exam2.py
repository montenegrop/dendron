arr = [2, 2, 3, 4, 4, 4, 4, 3, 3, 3]
arr = [1, 1]
arr = None
reduce = list(set(arr))
reduce.sort(reverse=True)



for x in reduce:
    if x == arr.count(x):
        result= x
        break
    result = -1

print(result)
