class CreateHomes < ActiveRecord::Migration[6.0]
  def change
    create_table :homes do |t|
      t.string :price
      t.string :address
      t.string :bedrooms
      t.string :bathrooms
      t.string :sqft
      t.string :year_built

      t.timestamps
    end
  end
end
