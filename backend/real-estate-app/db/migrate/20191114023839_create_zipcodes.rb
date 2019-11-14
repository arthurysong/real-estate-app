class CreateZipcodes < ActiveRecord::Migration[6.0]
  def change
    create_table :zipcodes do |t|
      t.integer :digits

      t.timestamps
    end
  end
end
