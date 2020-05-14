class CreateCities < ActiveRecord::Migration[6.0]
  def change
    create_table :cities do |t|
      t.string :name
      t.integer :median_homeprice
      t.integer :population
      t.integer :gdp_per_capita
      t.float :job_growth_percentage

      t.timestamps
    end
  end
end
