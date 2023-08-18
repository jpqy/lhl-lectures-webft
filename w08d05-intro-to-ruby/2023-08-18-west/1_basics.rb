# Comments in Ruby start with the hash symbol

# Numbers
my_number = 42
puts my_number + 1


# Strings
my_string = "nice string #{my_number}"
puts my_string
my_single_quote_string = 'single quote string'

puts my_string + my_single_quote_string
# Print to console

# Symbols
my_symbol = :my_symbol

# In Ruby there are no primitives; everything is an object
true.class

# Array
my_array = [1, 2, 3]
puts my_array.last
my_array.first


# We can use ! and ? in method names?!11eleven1!
puts my_array.empty? # in js, it would be named isEmpty
p my_array.shuffle!
p my_array

# Everything is synchronous in Ruby
puts "timer start"
sleep(5)
puts "timer end"
