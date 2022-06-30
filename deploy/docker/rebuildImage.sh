docker-compose down
docker build -t image-proxy .
cd ../../service/feed && docker build -t image_feed .
cd ../user && docker build -t image_user .
cd ../../web-ui && docker build -t image_frontend .
cd ../deploy/docker && docker-compose up