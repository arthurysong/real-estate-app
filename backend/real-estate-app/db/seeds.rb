# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
zip_code_1 = Zipcode.create(digits: 85746);

# t.integer :zipcode_id
# t.integer :price
# t.string :address
# t.integer :bedrooms
# t.integer :bathrooms
# t.integer :sqft
# t.integer :year_built

home_1 = Home.create(zipcode: zip_code_1, price: 175000, address: "3037 W Utah St, Tucson, AZ 85746", bedrooms: 3, bathrooms: 2, sqft: 1071, year_built: 1977 );
home_2 = Home.create(zipcode: zip_code_1, price: 198500, address: "3627 W Avenida Fria, Tucson, AZ 85746", bedrooms: 3, bathrooms: 3, sqft: 1516, year_built: 1993 );
home_3 = Home.create(zipcode: zip_code_1, price: 216500, address: "2971 W Calle Leonido, Tucson, AZ 85746", bedrooms: 4, bathrooms: 2, sqft: 1873, year_built: 2001 );
home_4 = Home.create(zipcode: zip_code_1, price: 180500, address: "5513 S Stockwell Rd, Tucson, AZ 85746", bedrooms: 3, bathrooms: 2, sqft: 1234, year_built: 1997 );
home_5 = Home.create(zipcode: zip_code_1, price: 150000, address: "7911 S Caballo Rd, Tucson, AZ 85746", bedrooms: 3, bathrooms: 2, sqft: 1520, year_built: 1971 );
