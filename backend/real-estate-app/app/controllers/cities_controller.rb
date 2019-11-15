class CitiesController < ApplicationController
    def show
        city = City.find(params[:id])
        render json: city, include: [:zipcodes]
    end
end
