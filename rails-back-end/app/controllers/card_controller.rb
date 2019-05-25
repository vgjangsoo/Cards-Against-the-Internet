class CardController < ApplicationController
  # not used right now, not under a name space in routes.rb
  def show_card
    @cards = Card.all.order(created_at: :desc)

    render :json => {
      message: {
        cards: @cards 
      }
    }
  end

end
