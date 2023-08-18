# do end vs { }

# &block/block.call vs yield
def surround_with_stars(number_of_stars, &block)
  number_of_stars.times { puts "🌟⭐🌟⭐" }
  block.call
  number_of_stars.times { puts "🌟⭐🌟⭐" }
end

def surround_with_stars(number_of_stars)
  number_of_stars.times { puts "🌟⭐🌟⭐" }
  yield
  number_of_stars.times { puts "🌟⭐🌟⭐" }
end

surround_with_stars(3) { puts "Hello" }
