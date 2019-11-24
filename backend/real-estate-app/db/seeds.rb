# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# t.string :name
# t.string :median_homeprice
# t.string :population
# t.string :gdp
# t.string :job_growth
tucson = City.create(name: "Tucson", median_homeprice: 194100, population: 535677, gdp_per_capita: 33088, job_growth_percentage: 1.2);
san_bernardino = City.create(name: "San Bernardino", median_homeprice: 296200, population: 216995, gdp_per_capita: 29687, job_growth_percentage: 2.6)

#85746 zipcode seed data
zip_code_1 = Zipcode.create(city: tucson, digits: 85746);
zip_code_2 = Zipcode.create(city: tucson, digits: 85747);

home_1 = Home.create(zipcode: zip_code_1, date_sold: 111219, price: 175000, address: "3037 W Utah St, Tucson, AZ 85746", bedrooms: 3, bathrooms: 2, sqft: 1071, year_built: 1977 );
home_2 = Home.create(zipcode: zip_code_1, date_sold: 110719, price: 198500, address: "3627 W Avenida Fria, Tucson, AZ 85746", bedrooms: 3, bathrooms: 3, sqft: 1516, year_built: 1993 );
home_3 = Home.create(zipcode: zip_code_1, date_sold: 110719, price: 216500, address: "2971 W Calle Leonido, Tucson, AZ 85746", bedrooms: 4, bathrooms: 2, sqft: 1873, year_built: 2001 );
home_4 = Home.create(zipcode: zip_code_1, date_sold: 110819, price: 180500, address: "5513 S Stockwell Rd, Tucson, AZ 85746", bedrooms: 3, bathrooms: 2, sqft: 1234, year_built: 1997 );
home_5 = Home.create(zipcode: zip_code_1, date_sold: 110819, price: 150000, address: "7911 S Caballo Rd, Tucson, AZ 85746", bedrooms: 3, bathrooms: 2, sqft: 1520, year_built: 1971 );
home_6 = Home.create(zipcode: zip_code_2, date_sold: 112219, price: 237000, address: "10621 E Avalon Park St, Tucson, AZ 85747", bedrooms: 3, bathrooms: 2, sqft: 1794, year_built: 2003 );
home_7 = Home.create(zipcode: zip_code_2, date_sold: 111519, price: 211000, address: "10024 E Paseo San Ardo, Tucson, AZ 85747", bedrooms: 4, bathrooms: 3, sqft: 2177, year_built: 1996 );
home_8 = Home.create(zipcode: zip_code_2, date_sold: 111419, price: 200000, address: "8697 S Desert Rainbow Dr, Tucson, AZ 85747", bedrooms: 3, bathrooms: 3, sqft: 1765, year_built: 1998 );
home_9 = Home.create(zipcode: zip_code_2, date_sold: 111819, price: 220000, address: "8944 E Martha Root Ct, Tucson, AZ 85747", bedrooms: 3, bathrooms: 2, sqft: 1339, year_built: 1998 );
home_10 = Home.create(zipcode: zip_code_2, date_sold: 111719, price: 185000, address: "9821 E Stonehaven Way, Tucson, AZ 85747", bedrooms: 3, bathrooms: 2, sqft: 1358, year_built: 1995 );

school_1 = School.create(zipcode: zip_code_1, name: "Mccorkle Pk-8", rating: 4);
school_2 = School.create(zipcode: zip_code_1, name: "Pima Rose Academy", rating: 1);
school_3 = School.create(zipcode: zip_code_1, name: "John E White Elementary School", rating: 5);
school_4 = School.create(zipcode: zip_code_1, name: "Pistor Middle School", rating: 3);
school_5 = School.create(zipcode: zip_code_1, name: "Valencia Middle School", rating: 2);
school_6 = School.create(zipcode: zip_code_2, name: "Rincon Vista Middle School", rating: 9);
school_7 = School.create(zipcode: zip_code_2, name: "Civano Charter School", rating: 7);
school_8 = School.create(zipcode: zip_code_2, name: "Desert Sky Middle School", rating: 10);
school_9 = School.create(zipcode: zip_code_2, name: "Mesquite Elementary School", rating: 10);
school_10 = School.create(zipcode: zip_code_2, name: "Vail Digital Learning Program", rating: 7);
