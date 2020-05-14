class City < ApplicationRecord
    has_many :zipcodes
    has_many :homes, through: :zipcodes
    has_many :schools, through: :zipcodes
end
