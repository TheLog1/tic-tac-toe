# TOKEN="3d864fb952197c7a641e6a450e5797ef"
curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games/" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data {}

echo
