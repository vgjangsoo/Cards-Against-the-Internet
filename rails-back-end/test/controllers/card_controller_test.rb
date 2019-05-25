require 'test_helper'

class CardControllerTest < ActionDispatch::IntegrationTest
  test "should get show_card" do
    get card_show_card_url
    assert_response :success
  end

end
