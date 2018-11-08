class LandingController < ApplicationController
  def index
    render_react_app 'styles'
  end
end
