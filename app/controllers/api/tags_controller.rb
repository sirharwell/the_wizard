class Api::TagsController < ApplicationController

  def index
    render json: current_user.tags

  def create
    name = params[:tag][:name]
    tag = Tag.find_or_create_by(name: name)
    if !current_user.tags.find_by(id: tag.id)
      Tagging.create(user_id: current_user.id, tag_id: tag.id)
      render json: tag
    end

  def destroy
    Tagging.find_by(
      user_id: current_user.id,
      tag_id: params[:id]
    ).destroy
  end
end
