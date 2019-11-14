class CreateCities < ActiveRecord::Migration[6.0]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :median_homeprice
      t.string :population
      t.string :gdp
      t.string :job_growth

      t.timestamps
    end
  end
end
