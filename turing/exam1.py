arr = [1,2,3,2]
arr2 = [1, 1, 3]
arr3 = [1, 2, 3, 4, 1, 6]
arr4 = [1, 2, 3, 4, 4]

arr = arr4

for i in range(0, len(arr)):
    if arr[i] + 1 != arr[i + 1]:
        index = i + 1
        break

xx = range(1, len(arr))
missing = set(range(1, len(arr) + 1)) - set(arr)
repeat = arr[index]
missing.add(repeat)

result = list(missing)
print(result)