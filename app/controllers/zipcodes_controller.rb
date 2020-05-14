class ZipcodesController < ApplicationController
    def show
        zipcode = Zipcode.find(params[:id])
        render json: ZipcodeSerializer.new(zipcode).to_serialized_json
    end

    def create
        city = City.find(params[:city_id])
        zipcode = Zipcode.create(
            city: city,
            digits: params[:digits]
        )
        render json: ZipcodeSerializer.new(zipcode).to_serialized_json
    end
end
