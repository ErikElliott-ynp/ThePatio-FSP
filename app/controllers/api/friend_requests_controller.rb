class Api::FriendRequestsController < ApplicationController
    def index 
        @incoming = FriendRequest.where(friend: current_user)
        @outgoing = current_user.friend_requests
    end

    def create
        @friend_request = FriendRequest.new(friend_id: params[:friend_request][:friend_id]) 
        @friend_request.user_id = current_user.id
        if @friend_request.save 
            render :show
        else
            render json: @friend_request.errors.full_messages, status: 422
        end
    end

    def update
       @friend_request = FriendRequest.find(params[:id])
        if @friend_request.accept
            render json: {}
        else
            render json: @friend_request.errors.full_messages
        end
    end

    def destroy
        @friend_request = FriendRequest.find(params[:id])
        if @friend_request.destroy
            render json: {}
        else
            render @friend_request.errors.full_messages, status: 422
        end
    end


    private 
end
