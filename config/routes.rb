Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create,:update,:show,:update] 
    resources :pictures, only: [:show,:create,:destroy,:update]
    resources :songs, only: [:show,:index] 
    resources :albums, only: [:create,:destroy,:show,:update]
    resource :session, only: [:create,:destroy]
  end
  
  root 'static_pages#root'
end
