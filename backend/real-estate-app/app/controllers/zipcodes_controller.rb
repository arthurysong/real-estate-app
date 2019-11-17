class ZipcodesController < ApplicationController
    def show
        zipcode = Zipcode.find(params[:id])
        render json: zipcode, include: [:schools, :homes]
    end
end
