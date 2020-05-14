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
# t.string :median_household_income
# t.string :job_growth
# median age
# home_value_growth
# income_growth
tucson = City.create(
    name: "Tucson",
    median_homeprice: 182300,
    home_value_growth: 7.05,
    population: 1020000,
    median_age: 38.5,
    median_household_income: 51425,
    income_growth: 8.13,
    job_growth_percentage: 0.849)
san_bernardino = City.create(
    name: "San Bernardino", 
    median_homeprice: 202100, 
    home_value_growth: 14.3,
    population: 215252,
    median_age: 29.4, 
    median_household_income: 41027, 
    income_growth: 6.69,
    job_growth_percentage: 2.6)
glendale = City.create(
    name: "Glendale (CA)",
    median_homeprice: 675300, 
    home_value_growth: 5.57,
    population: 199750,
    median_age: 41.2, 
    median_household_income: 58657, 
    income_growth: 4.62,
    job_growth_percentage: 1.44)  
reno = City.create(
    name: "Reno",
    median_homeprice: 361800, 
    home_value_growth: 9.9,
    population: 471265,
    median_age: 38.4, 
    median_household_income: 63466, 
    income_growth: 3.43,
    job_growth_percentage: 2.45)  
colorado_springs = City.create(
    name: "Colorado Springs",
    median_homeprice: 290100, 
    home_value_growth: 5.84,
    population: 738939,
    median_age: 34.8, 
    median_household_income: 67430, 
    income_growth: 2.8,
    job_growth_percentage: 5.55)  

#85746 zipcode seed data
zip_code_1 = Zipcode.create(city: tucson, digits: 85746)
zip_code_2 = Zipcode.create(city: tucson, digits: 85747)
zip_code_3 = Zipcode.create(city: san_bernardino: digits: 92346)
zip_code_3 = Zipcode.create(city: san_bernardino: digits: 92407)

home_1 = Home.create(zipcode: zip_code_1, date_sold: Date.new(2019, 11, 12), price: 175000, address: "3037 W Utah St, Tucson, AZ 85746", bedrooms: 3, bathrooms: 2, sqft: 1071, year_built: 1977 );
home_2 = Home.create(zipcode: zip_code_1, date_sold: Date.new(2019, 11, 7), price: 198500, address: "3627 W Avenida Fria, Tucson, AZ 85746", bedrooms: 3, bathrooms: 3, sqft: 1516, year_built: 1993 );
home_3 = Home.create(zipcode: zip_code_1, date_sold: Date.new(2019, 11, 7), price: 216500, address: "2971 W Calle Leonido, Tucson, AZ 85746", bedrooms: 4, bathrooms: 2, sqft: 1873, year_built: 2001 );
home_4 = Home.create(zipcode: zip_code_1, date_sold: Date.new(2019, 11, 8), price: 180500, address: "5513 S Stockwell Rd, Tucson, AZ 85746", bedrooms: 3, bathrooms: 2, sqft: 1234, year_built: 1997 );
home_5 = Home.create(zipcode: zip_code_1, date_sold: Date.new(2019, 11, 8), price: 150000, address: "7911 S Caballo Rd, Tucson, AZ 85746", bedrooms: 3, bathrooms: 2, sqft: 1520, year_built: 1971 );
home_6 = Home.create(zipcode: zip_code_2, date_sold: Date.new(2019, 11, 22), price: 237000, address: "10621 E Avalon Park St, Tucson, AZ 85747", bedrooms: 3, bathrooms: 2, sqft: 1794, year_built: 2003 );
home_7 = Home.create(zipcode: zip_code_2, date_sold: Date.new(2019, 11, 15), price: 211000, address: "10024 E Paseo San Ardo, Tucson, AZ 85747", bedrooms: 4, bathrooms: 3, sqft: 2177, year_built: 1996 );
home_8 = Home.create(zipcode: zip_code_2, date_sold: Date.new(2019, 11, 14), price: 200000, address: "8697 S Desert Rainbow Dr, Tucson, AZ 85747", bedrooms: 3, bathrooms: 3, sqft: 1765, year_built: 1998 );
home_9 = Home.create(zipcode: zip_code_2, date_sold: Date.new(2019, 11, 18), price: 220000, address: "8944 E Martha Root Ct, Tucson, AZ 85747", bedrooms: 3, bathrooms: 2, sqft: 1339, year_built: 1998 );
home_10 = Home.create(zipcode: zip_code_2, date_sold: Date.new(2019, 11, 17), price: 185000, address: "9821 E Stonehaven Way, Tucson, AZ 85747", bedrooms: 3, bathrooms: 2, sqft: 1358, year_built: 1995 );
home_11 = Home.create(zipcode: zip_code_3, date_sold: Date.new(2020, 5, 13), price: 300000, address: "7649 Drummond Ave Highland, CA 92346", bedrooms: 3, bathrooms: 1, sqft: 1118, year_built: 1962 )
home_12 = Home.create(zipcode: zip_code_3, date_sold: Date.new(2020, 5, 11), price: 600000, address: "7787 San Benito St Highland, CA 92346", bedrooms: 4, bathrooms: 3, sqft: 3138, year_built: 2004 )
home_13 = Home.create(zipcode: zip_code_3, date_sold: Date.new(2020, 5, 11), price: 350000, address: "6070 Blythe Ave Highland, CA 92346", bedrooms: 4, bathrooms: 2, sqft: 1599, year_built: 1964 )
home_14 = Home.create(zipcode: zip_code_3, date_sold: Date.new(2020, 5, 11), price: 360000, address: "1495 Valaria Dr Highland, CA 92346", bedrooms: 3, bathrooms: 2, sqft: 1658, year_built: 1969 )
home_15 = Home.create(zipcode: zip_code_3, date_sold: Date.new(2020, 5, 10), price: 210000, address: "1991 Central Ave APT 2 Highland, CA 92346", bedrooms: 2, bathrooms: 3, sqft: 1312, year_built: 1981 )
home_16 = Home.create(zipcode: zip_code_4, date_sold: Date.new(2020, 5, 8), price: 445000, address: "5971 Honeysuckle Ln San Bernardino, CA 92407", bedrooms: 3, bathrooms: 3, sqft: 2374, year_built: 2001 )
home_17 = Home.create(zipcode: zip_code_4, date_sold: Date.new(2020, 5, 7), price: 400000, address: "5659 Justin Ct San Bernardino, CA 92407", bedrooms: 3, bathrooms: 2, sqft: 1664, year_built: 2002 )
home_18 = Home.create(zipcode: zip_code_4, date_sold: Date.new(2020, 5, 7), price: 190000, address: "2994 Glenview Ave San Bernardino, CA 92407", bedrooms: 4, bathrooms: 2, sqft: 1168, year_built: 1954 )
home_19 = Home.create(zipcode: zip_code_4, date_sold: Date.new(2020, 5, 6), price: 520000, address: "18146 Hillcrest Dr San Bernardino, CA 92407", bedrooms: 3, bathrooms: 2, sqft: 1982, year_built: 1958 )
home_20 = Home.create(zipcode: zip_code_4, date_sold: Date.new(2020, 5, 6), price: 350000, address: "5256 N I St San Bernardino, CA 92407", bedrooms: 4, bathrooms: 2, sqft: 1505, year_built: 1962 )


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
school_11 = School.create(zipcode: zip_code_3, name: "Cram Elementary School", rating: 9);
school_12 = School.create(zipcode: zip_code_3, name: "Oehl Elementary School", rating: 4);
school_13 = School.create(zipcode: zip_code_3, name: "Cypress Elementary School", rating: 3);
school_14 = School.create(zipcode: zip_code_3, name: "Arroyo Verde Elementary School", rating: 7);
school_15 = School.create(zipcode: zip_code_3, name: "Cole Elementary School", rating: 3);
school_15 = School.create(zipcode: zip_code_4, name: "Kimbark Elementary School", rating: 6);
school_15 = School.create(zipcode: zip_code_4, name: "Cesar E. Chavez Middle School", rating: 5);
school_15 = School.create(zipcode: zip_code_4, name: "Vermont Elementary School", rating: 5);
school_15 = School.create(zipcode: zip_code_4, name: "Little Mountain Elementary", rating: 5);
school_15 = School.create(zipcode: zip_code_4, name: "Paakuma K-8", rating: 6);

