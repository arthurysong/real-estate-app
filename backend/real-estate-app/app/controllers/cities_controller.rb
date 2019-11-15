class CitiesController < ApplicationController
    def show
        city = City.find(params[:id])
        render json: city
    end
end
