class CitySerializer
    def initialize (city)
        @city = city
    end

    def to_serialized_json
        options = {
            include: {
                zipcodes: {
                    except: [:updated_at, :created_at, :city_id]
                }
            },
            except: [:updated_at, :created_at]
        }
        @city.to_json(options)
    end
end