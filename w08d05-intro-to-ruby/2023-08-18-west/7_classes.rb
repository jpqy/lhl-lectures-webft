# What is a Class

class Pokemon
  def initialize(name, type, pokedex_number)
    @name = name
    @type = type
    @pokedex_number = pokedex_number
  end

  attr_reader :type, :pokedex_number
  attr_accessor :name

  def attack
    puts "#{name} used struggle!"
  end
end

magikarp = Pokemon.new("A random magikarp that I caught today", "Water", 67)

puts magikarp.name
puts magikarp.type
puts magikarp.attack

class Charizard < Pokemon
  def initialize(name)
    super(name, "Fire/Flying", 6)
  end

  def attack
    puts "#{name} used flamethrower!"
  end
end

charizard = Charizard.new("Ash's charizard")

puts charizard.attack
