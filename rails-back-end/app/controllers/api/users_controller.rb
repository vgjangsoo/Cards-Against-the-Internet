class Api::UsersController < ApplicationController

    def new
    end

    def create
        # URL: POST api/users
        puts "=====user controller - create===== "
        user = User.new(user_params)

        puts user.username
        puts user.email
        puts user.password_digest

        if user.save
          session[:user_id] = user.id
        #   redirecting dont work from back end to front end
        #   redirect_to '/lobbies'

            # rails cookie that can be accessed on every controller by:   cookies[:user]
            user ||= cookies[:user].present? ? JSON.parse(cookies[:user]) : {}
            
            # render json: session[:user_id]
            render json: user
        else
            puts user.errors.full_messages 
            redirect_to '/signup'
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end

end

