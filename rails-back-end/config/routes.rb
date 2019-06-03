Rails.application.routes.draw do
  get 'games/new'
  get 'games/create'
  get 'games/show'
  get 'games/edit'
  get 'games/update'
  get 'games/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Testing Sockets
  
  namespace :api do
    resources :conversations, only: [:index, :create]
    resources :messages, only: [:create]
    resources :cards, only: [:index, :show]
    resources :games
    resources :users
    resources :decks
    resources :rounds
    resources :lobbies
    post '/games/:id/addUser', to: 'games#addUser'
    
    # These routes will be for signup. The first renders a form in the browse, the second will 
    # receive the form and create a user in our database using the data given to us by the user.
    # URL : api/signup  
    get '/signup', to: 'users#new'
    # URL : api/users  for creating new user 
    post '/users', to: 'users#create'


    # these routes are for showing users a login form, logging them in, and logging them out.
    # get '/login' not used because we have a separate react login form 
    get '/login', to: 'sessions#new'
    
    # URL : api/login   for logging in 
    post '/login', to: 'sessions#create'
    # URL : api/logout  for log out
    get '/logout', to: 'sessions#destroy'

    
    # for testing only, not used right now
    # get "cards/show_hand", to: 'cards#show_hand'
  end
  
  mount ActionCable.server => '/cable'
end
