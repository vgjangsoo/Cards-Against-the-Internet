class MessageSerializer < ActiveModel::Serializer
  
  # To choose which properties to send / pass over broadcast.
  attributes :id, :conversation_id, :text, :created_at
end