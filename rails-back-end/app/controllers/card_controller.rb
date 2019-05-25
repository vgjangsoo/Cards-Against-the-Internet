class CardController < ApplicationController
  def show_card
    @cards = Card.all.order(created_at: :desc)

    render :json => {
      message: {
        cards: @cards 
      }
    }
  end

end
