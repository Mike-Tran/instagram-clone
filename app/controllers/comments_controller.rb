class CommentsController < ApplicationController

    def index
        render json: Comment.all
    end

    def create
        @comment = Comment.create!(comment_params)
        render json: @comment, status: :created
    end

    private

    def comment_params
        params.permit(:comment, :likes)
    end
end
