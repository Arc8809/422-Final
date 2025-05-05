#builds docker project
docker build -t 422-Final .dockerfile


#runs docker project 
docker run -d -p 8080:80 Final-422
