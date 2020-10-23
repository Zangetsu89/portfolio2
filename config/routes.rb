Rails.application.routes.draw do
  root to: 'pages#home'
  get 'experience', to: 'pages#experience'
  get 'challengeme', to: 'pages#challengeme'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
