N = int(input())
for i in range(N):
	a = list(map(int, input().split()))
	avg = sum(a[1:]) / a[0]
	cnt = 0
	for v in a[1:]:
		if v > avg: 
			cnt += 1
	print("%.3f" % (cnt / a[0] * 100))
