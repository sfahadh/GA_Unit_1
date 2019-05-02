# In mathematics, the factorial of a non-negative integer `n`,
# denoted by `n!`, is the product of all positive integers less
# than or equal to `n`.

# Solution

# Write a function called factorial() that takes a number and multiplies
# up all numbers from 1 through that number. Example: factorial(5) should
# equal 1 * 2 * 3 * 4 * 5.

def factorial(num)
  result = 1;
  for i in 1..num
    result *= i
  end
    puts result
end

factorial(6)
