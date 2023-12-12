class Api::GreetingsController < ApplicationController
  def random
    render json: { greeting: Message.order('RANDOM()').first }
  end
end
