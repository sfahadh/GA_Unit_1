# Write an efficient function that checks whether any permutation of an
# input string is a palindrome. A palindrome is a string that's the same
# when read forward and backward; for example: civic, mom, racecar, kayak

def isPalindrome(word)

end

# Solution

def isPalindrome(word)
  if word == word.reverse
    puts true
  else
    puts false
  end
end

isPalindrome('celeste')
