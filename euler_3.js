var largestPrime = 1;
for (var i=1; i < 10000; i++) {
    for (var x=2; x < i; x++) {
        if ((i % x !== 0) && ((600851475143 % i) === 0)) {
			largestPrime = i;
		}
	}
}
console.log(largestPrime);