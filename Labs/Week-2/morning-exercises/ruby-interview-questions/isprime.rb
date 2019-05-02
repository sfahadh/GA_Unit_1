# A prime number is an integer greater than 1 that cannot be formed by
# multiplying two smaller natural numbers. A primality test is an algorithm
# for determining whether an input number is prime or not.

# Write a function called is_prime? that returns a boolean depending on
# whether or not a given number is a prime number or not. For example,
# is_prime?(3) should return true, whereas is_prime(12) should return false.

def is_prime?(num)

end


# Solution

def is_prime?(num)
  if num <= 2
    puts "prime number"
  elsif num % 2 == 0
    puts "not a prime number"
  else
    for i in 2..num
      if num % i == 0
        puts "prime number"
      end
    end
  end
end

is_prime?(11)


