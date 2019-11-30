class AddColumnsToCities < ActiveRecord::Migration[6.0]
  def change
    add_column :cities, :median_age, :float
    add_column :cities, :home_value_growth, :float
    # add_column :cities, :median_household_income, :integer
    add_column :cities, :income_growth, :float

    change_table :cities do |t|
      t.rename :gdp_per_capita, :median_household_income
    end
  end
end
