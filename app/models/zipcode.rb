class Zipcode < ApplicationRecord
    belongs_to :city
    has_many :schools
    has_many :homes
end
