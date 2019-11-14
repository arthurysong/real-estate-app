class CreateHomes < ActiveRecord::Migration[6.0]
  def change
    create_table :homes do |t|
      t.integer :price
      t.string :address
      t.integer :bedrooms
      t.integer :bathrooms
      t.integer :sqft
      t.integer :year_built

      t.timestamps
    end
  end
end
