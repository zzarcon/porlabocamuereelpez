default: push

push:
	git push
	git push heroku master

add_remote:
	git remote rm heroku
	heroku git:remote -a porlabocamuereelpez