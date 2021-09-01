
<h1>Big O Notation</h1>

<h2>There are five basic rules for calculating an algorithm’s Big O notation:</h2>

1. If an algorithm performs a certain sequence of steps f(N) times for a math-
	ematical function f, it takes O(f(N)) steps.
	
2. If an algorithm performs an operation that takes O(f(N)) steps and then
	performs a second operation that takes O(g(N)) steps for functions f and
g, the algorithm’s total performance is O(f(N) + g(N)).	

3. If an algorithm takes O(f(N) + g(N)) and the function f(N) is greater than
	g(N) for large N, the algorithm’s performance can be simplified to O(f(N)).
	
4. If an algorithm performs an operation that takes O(f(N)) steps, and for
	every step in that operation it performs another O(g(N)) steps, the algo-
	rithm’s total performance is O(f(N) × g(N)).
	
5. Ignore constant multiples. If C is a constant, O(C × f(N)) is the same as
	O(f(N)), and O(f(C × N)) is the same as O(f(N)).
	










