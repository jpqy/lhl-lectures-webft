if 1 == 1
  puts "1 equals 1"
end

puts "1 equals 1" if 1 == 1

user = {
  admin: false
}

unless user[:admin]
  puts "Sorry, you're not authorized"
end

puts "Sorry, you're not authorized" unless user[:admin]

language = {
  needs_semicolons: false
}

if !language[:needs_semicolons]
  puts "Jimmy thinks this is a cool language"
end


puts "Jimmy thinks this is a cool language" unless language[:needs_semicolons]
