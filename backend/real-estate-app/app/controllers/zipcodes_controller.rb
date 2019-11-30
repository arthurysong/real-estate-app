class ZipcodesController < ApplicationController
    def show
        zipcode = Zipcode.find(params[:id])
        render json: zipcode, include: [:schools, :homes]
    end

    def create
        city = City.find(params[:city_id])
        zipcode = Zipcode.create(
            city: city,
            digits: params[:digits]
        )
        render json: zipcode, include: [:schools, :homes]
    end
end
