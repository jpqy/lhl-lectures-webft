# W8D5 - Intro to Ruby

## Today's menu

- History and context about Ruby / Ruby on Rails
- Variables
- Conditionals
- Loops
- Methods
- Hashes
- Blocks
- Classes

## What you should know by the end of the lecture

- Understanding the differences between JS and Ruby
- A basic understanding of:
  - Ruby data structures
  - Ruby iteration methods
  - Ruby blocks
  - Ruby classes
  - Ruby workflow

## Why Rails

- Learning a new language and framework
- Different approach to develop Web app (batteries included)
- Work with MVC pattern
- Coding with OO language
- A language/framework that makes your life easier

## Ruby on Rails

- Ruby was created by Yukihiro Matsumoto (Matz) in the mid-nineties
- Was designed for developer happiness and productivity
- Really took off with the release of Ruby on Rails (2005)

> Ruby on Rails pioneered many concepts/features that made web development easier. Many frameworks today have features that are heavily inspired by Ruby on Rails.

- Developer productivity
- Very Legible Code
- Develop a high-quality Web site rapidly
- Rich set of tooling and libraries out of the box
- Very good database functionality (ActiveRecord)
- Lots of abstraction

## Comparison between Ruby and JS

| JavaScript/NodeJS                     | Ruby/Rails                                                  |
| :------------------------------------ | :---------------------------------------------------------- |
| - Created in 10 days in 1995          | - Ruby was released in 1995 but took off with Rails in 2005 |
| - Created by Brendon Eich (Netscape)  | - Created by Yukihiro Matsumoto (Matz).                     |
|                                       | - Rails was released by David Heinemeier Hansson (Basecamp) |
| - Can run on both front and back ends | - Can only run on the back-end                              |
| - Syntax inspired by C and Java       | - Simplified, unclutered Syntax                             |
| - Primitive data types + objects      | - All types are objects                                     |
| - More low level                      | - High-level of abstractions                                |
| - Highly-performant                   | - Not highly-performant                                     |
| - Very flexible                       | - Very opinionated                                          |
| - Not so easy to use migrations       | - Easy to use migrations                                    |
| - Fairly good for rapid development   | - Excellent for rapid prototyping and development           |
| - Multi-paradigm, event-driven        | - Mostly object-oriented                                    |
| - Largest ecosystem (npm)             | - Fairly big ecosystem (Rubygems)                           |
| - Very active community               | - Established community                                     |
| - Asynchronous                        | - Synchronous                                               |

## Companies using Ruby on Rails

- Github
- AirBnB
- Shopify
- Twitch
- Stripe
- Basecamp
- Soundcloud
- Groupon
- CouchSurfing
- Kickstarter

## Variables

All data types are objects based on classes.

- Booleans (https://ruby-doc.org/core-3.1.1/TrueClass.html && https://ruby-doc.org/core-3.1.1/FalseClass.html)
- Symbols (https://ruby-doc.org/core-3.1.1/Symbol.html)
- Integers (https://ruby-doc.org/core-3.1.1/Numeric.html)
- Floats (https://ruby-doc.org/core-3.1.1/Numeric.html)
- Strings (https://ruby-doc.org/core-3.1.1/String.html)
- Arrays (https://ruby-doc.org/core-3.1.1/Array.html)
- Hashes (https://ruby-doc.org/core-3.1.1/Hash.html)

## Conditionnals

## Loops

You can iterate using a lot of different methods in Ruby :

### upto/downto

```rb
1.upto(100) do |n|
  puts n
end
```

### times

```rb
100.times do |n|
  puts n
end
```

### .each

#### range

```rb
(1..100).each do |n|
puts n
end
```

#### iterating with arrays

```rb
scrabble_words = ["QUARTZY", "OXAZEPAM", "QUIZZIFY", "OXYPHENBUTAZONE", "QUIXOTRY"]

scrabble_words.each_with_index do |word, index|
  puts "Word ##{index+1}: #{word} Length: #{word.length}"
end
```

## Methods

```rb
def my_method(arg1, arg2)
  arg1 + arg2
end
```

## Hashes

- Hash is the equivalent of objects in JavaScript
- Use symbols as the keys
- Cannot use dot notation like in JavaScript

```rb
  famous_painter = {
    first_name: "Pablo",
    last_name: "Picasso",
    date_of_birth: 1881,
    date_of_death: 1973
  }

  famous_painter.each do |key, value|
    puts "#{key}: #{value}"
  end
```

## Blocks

Ruby blocks are anonymous functions that can be passed to methods, they are the equivalent of JavaScript callbacks

### 2 possible syntax: (1) do end for multiline blocks (2) {} for single line blocks

```rb
  (1..100).each do |n|
    puts n
  end
```

or

```rb
  (1..100).each { |n| puts n }
```

We can use the yield keyword in a method to execute the code of the block given to the method:

# Ex.

```rb
def surround_with_stars
 puts "⭐⭐⭐⭐"
 yield
 puts "⭐⭐⭐⭐"
end

surround_with_stars { puts "I am surrounded by stars" }
```

Same with explicit block:

```rb
def surround_with_stars(&block)
 puts "⭐⭐⭐⭐"
 block.call
 puts "⭐⭐⭐⭐"
end

surround_with_stars { puts "I am surrounded by stars" }
```

## Classes

- You declare a class in Ruby with the class keyword.

```rb
class Car
end
```

### Initialize

- `initialize` is a special method in classes that is called when a class object is created with .new
- `initialize` methods are used to set the initial state of an object.

```rb
class Car
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end

my_car = Car.new("red", 2007, "matrix")
```

### Accessor && Readers

- You can set default read and write methods for instance variables with accessor and readers.

```rb
class Car
 attr_accessor :color
 attr_reader :year
 attr_writer :model

 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end
```

### Resources
- [Style Guide](https://rubystyle.guide/)
- [Ruby setup for M1/M2 Mac users](https://web.compass.lighthouselabs.ca/p/4/workbooks/web-ft-v2-prep/activities/1213?workbook=137)
