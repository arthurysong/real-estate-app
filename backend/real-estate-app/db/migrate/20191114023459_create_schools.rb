class CreateSchools < ActiveRecord::Migration[6.0]
  def change
    create_table :schools do |t|
      t.integer :zipcode_id
      t.integer :rating

      t.timestamps
    end
  end
end
