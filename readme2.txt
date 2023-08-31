<--start-->
yarn start:dev
docker start dev-database
yarn db:run:restart
<---->
yarn add -D prisma
npx prisma init
npx prisma --help
npx prisma migrate dev

docker exec -it dev-database bash
root@fsafdf# whoami
root@fsafdf# psql -U postgres -W testdb

<!-- xem tables -->

\dt
select * from "Note"
select * from "User"
exit
exit
npx prisma studio

<!-- g:generate -->

nest g module prisma
nest g service prisma --no-spec
yarn start:dev
POST http://localhost:3000/auth/register?email=abc@gmail.com

<!-- x-www-form-urlencoded -->
<!-- email: tuan@gmail.com -->

yarn add class-validator class-transformer;
docker start dev-database
docker exec -it dev-database bash
npx prisma migrate dev

> yes
> add relationship
> npx prisma studio

<- @unique: k duoc trung ->

<- --stop: neu dang chay thi stop, --volumes: xoa luon volumes, --detach: chay ngam ->
    "prisma:dev:deploy": "prisma migrate deploy",
    "db:dev:remove": "docker compose rm dev-database --stop --force --volumes",
    "db:dev:create": "docker compose up dev-database --detach",
    "db:dev:restart": "yarn db:dev:remove && yarn db:dev:create && sleep 2 && yarn prisma:dev:deploy",
    
yarn add @nestjs/config
yarn add @nestjs/jwt passport-jwt
yarn add -D @type/passport-jwt
yarn add @nestjs/passport passport
1:20:42