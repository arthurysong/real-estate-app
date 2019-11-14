class Zipcode < ApplicationRecord
    has_many :schools
    has_many :homes
end
