class Api::TestsController < ApplicationController
  def index
    render :json => {
      message: "hello!"
    }
  end

  def display
    @data1 = 'Hello world! Im the best'
    @data2 = "data2 here Im better"
    render :json => {
      message: {
        data1: @data1,
        data2: @data2 
      }
    }
  end

  def show_cards
    @cards = Card.all.order(created_at: :desc)

    render :json => {
      message: {
        cards: @cards 
      }
    }
  end



end