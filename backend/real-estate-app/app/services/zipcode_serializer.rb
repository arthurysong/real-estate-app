class ZipcodeSerializer
    def initialize(zipcode_object)
        @zipcode = zipcode_object
    end

    def to_serialized_json
        options = {
            include: {
                homes: {
                    except: [:updated_at, :created_at]
                },
                schools: {
                    except: [:updated_at, :created_at]
                }
            },
            except: [:updated_at, :created_at]
        }
        @zipcode.to_json(options)
    end
end