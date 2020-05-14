class HomesController < ApplicationController
    def create
        zipcode = Zipcode.find(params[:zipcode_id])
        month = params[:date_sold][0..1].to_i
        day = params[:date_sold][3..4].to_i
        year = params[:date_sold][6..9].to_i
        d = Date.new(year, month, day)
        home = Home.create(
            zipcode: zipcode, 
            date_sold: d, 
            price: params[:price], 
            address: params[:address], 
            bedrooms: params[:bedrooms], 
            bathrooms: params[:bathrooms], 
            sqft: params[:sqft], 
            year_built: params[:year_built] )
        render json: ZipcodeSerializer.new(zipcode).to_serialized_json
    end
end
