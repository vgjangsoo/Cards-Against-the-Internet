class Api::GamesController < ApplicationController
  def new
    # dont have to send any HTML to react
  end

  def create
    #  when user clicks on "Create Room" button on Room Settings form
    #  theme, player #, round #, isEveryone deck 

    @safeDeck = Deck.where(theme: "Base").first
    
    @newGame = Game.new({
      maxRound: params[:maxRound],
      currentRound: 0,
      isEveryoneDeck: true,
      currentQuestion: nil,
      currentAnswer: nil,
      maxPlayers: params[:maxPlayers],
      creator: params[:creator],
      currentQuestioner: params[:creator],
      roundWinner: nil,
      deck_id: @safeDeck.id,
      gameStatus: 'waiting' 
    })

    if @newGame.save
    # redirect to game room id 
      redirect_to api_game_path
    end 
    
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def game_params
    params.require(:game).permit(
      :maxRound,
      :maxPlayers
    )
  end


end
