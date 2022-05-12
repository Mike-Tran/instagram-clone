class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :likes
end
