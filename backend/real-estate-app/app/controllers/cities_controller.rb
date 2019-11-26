class CitiesController < ApplicationController
    def show
        city = City.find(params[:id])
        render json: city, include: [:zipcodes]
    end

    def index
        cities = City.all
        render json: cities
    end

end
