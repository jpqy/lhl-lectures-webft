# .times
5.times { puts "hello" }

5.times do
  puts "hello"
end

# upto/downto
5.upto(10) do |n|
  puts n
end

20.downto(15) do |n|
  puts n
end

# each
my_array = [1, 2, 3]
my_second_array = [4, 5, 6]


my_array.each do |n|
  puts n
end

my_array.each { |n| puts n }

my_array.each do |i|
  my_second_array.each do |j|
    puts "#{i} #{j}"
  end
end

user = {
  name: "Homer Simpson",
  age: 50,
}

user.each do |key, value|
  puts "#{key} key's value is #{value}"
end

# each_with_index
my_third_array = [10, 11, 12]

my_third_array.each_with_index do |number, index|
  puts "The value is #{number} at index position #{index}"
end
