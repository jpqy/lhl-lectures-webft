user = {
  name: "Homer Simpson",
  age: 50,
}

# Equivalent older syntax
user2 = {
  :name => "Homer Simpson",
  :age => 50,
}

# We generally use symbols for the keys in a hash since keys represent properties/labels
# and symbols are great tool for storing those

puts user[:name]
