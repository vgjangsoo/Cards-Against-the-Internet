Rails.application.routes.draw do
  get 'card/show_card'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :cards
    get '/data', to: 'tests#index'
    get '/display', to: 'tests#display'
    get '/allcards', to: 'tests#show_cards'
  end
end
