N = int(input())
L = list(map(int, input().split()))
R = list()
R.append(L[0])
for v in L:
	if R[-1] < v:
		R.append(v)
	else:
		for k in range(len(R)):
			if R[k] == v: break
			if R[k] > v:
				R[k] = v
				break	
print(len(R))
