class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  def authorize
    auth_header = request.headers[:Authorization]

    if !auth_header
      render json: { message: 'Must send token in request.' }, status: :forbidden
    else
      token = auth_header.split(' ')[1]
      secret = 'tZFkyaT@bGj(y/cXK@*2yC6UT44dc+'

      begin
        decoded_token = JWT.decode token, secret
        payload = decoded_token.first
        user_id = payload['user_id']
        @user = User.find user_id
      rescue
        render json: { message: 'Invalid token.' }, status: :forbidden
      end
    end 
  end
end
