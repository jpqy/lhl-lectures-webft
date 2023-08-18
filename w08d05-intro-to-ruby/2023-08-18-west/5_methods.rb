def my_method
  puts "My method was called"
end

my_method # No brackets needed when calling a method

# implicit return

def one_plus_one
  1 + 1
end

puts one_plus_one

def conditional_method(number)
  if number==1
    return "bananas" # need `return`` here because otherwise it won't be the last line evaluated
  end

  if number==2
    return "apple"
  end
end

# We generally use brackets when giving arguments to a method unless method is a Domain Specific Language (DSL)
# or a method like puts
puts conditional_method(2)
