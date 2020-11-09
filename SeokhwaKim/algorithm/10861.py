import os

N, X = input().split()
N = int(N)
X = int(X) 
S = input().strip().split()
print(S)
R = list()
for v in S:
	if int(v) < X:
		R.append(v)

for v in R:
	print(v, end = ' ')

'''
N, X = map(int, input().split())
list_number = list(filter(lambda value: value < X, map(int, input().split())))

for value in list_number:
    print(value, end=' ')
'''
