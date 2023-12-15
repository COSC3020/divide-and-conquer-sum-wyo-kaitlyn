[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12055547&assignment_repo_type=AssignmentRepo)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

From the merge sort slides, the recurrence relation is 

$T(n)$ = 1 if $n \leq 1$

$T(n) = 2T(n/2) + n$ if $n > 1$


Using that as a basis for divide and conquer,

$T(n)$ = 1 if $n \leq 1$

$T(n) = 3T(n/3) + 1$ if $n > 1$

is our recurrence relation.  


Next, we use substitution to solve

$T(n) = 3T(n/3) + 1$ 

= $3(3T(n/3)) + 1 + 1$ 

= $9T(n/9) + 2$

= $3(9T(n/9)) + 2 + 1$

= $27T(n/27) + 3$

.

.

.

= $3^iT(n/3^i) + i$


for $i = log{_3}{n}$

= $nT(n) + log{_3}{n}$ = $n + log{_3}{n} \in \Theta(n)$

That leaves us with a runtime of $\Theta(n)$




