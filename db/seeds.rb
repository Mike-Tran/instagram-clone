require 'pry'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# This will delete any existing rows from the Product and User tables
# so you can run the seed file multiple times without having duplicate entries in your database
puts "Deleting old data..."
# User.destroy_all
# Comment.destroy_all
# Post.destroy_all

puts "Creating users..."
user1 = User.create(username: Faker::Name.first_name, password: "password")
user2 = User.create(username: Faker::Name.first_name, password: "password")
user3 = User.create(username: Faker::Name.first_name, password: "password")
user3 = User.create(username: "miketran", password: "password")

# c1 = Comment.create(likes: 3, comment: Faker::Lorem.sentence)
# c2 = Comment.create(likes: 4, comment: Faker::Lorem.sentence)
# c3 = Comment.create(likes: 5, comment: Faker::Lorem.sentence)

puts "Creating posts..."
p1 = Post.create(description: Faker::Lorem.sentence, likes: 5, user: user1)
p2 = Post.create(description: Faker::Lorem.sentence, likes: 5, user: user1)
p3 = Post.create(description: Faker::Lorem.sentence, likes: 5, user: user1)


puts "Seeding done!"