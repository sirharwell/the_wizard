json.total_pages @total_pages
json.array @users do |user|
  json.id user.id
  json.name user.name
  json.image user.image
  json.tags user.tags
end
