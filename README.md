
# Project Title

WebApp Market Cap:

Develop a simple web application that allows users to see current prices of
several major cryptocurrencies. The application will connect to a marketplace API
public cryptocurrencies (such as CoinGecko or CoinMarketCap) to obtain this data.



## Installation (backend)

Install kairos-test dependencies with npm (backend)

```bash
  cd kairos-test/web3-server
  npm install 
```

Create a docker container to create the database.

```bash
  docker compose up -d
```

Do the schema and database migration from the Prisma ORM.


```bash
  npx prisma init --datasource-provider postgres
  npx prisma migrate dev --name init
```


Add records to the database through a client


## Installation (frontend)


Install kairos-test dependencies with npm (frontend)

```bash
  cd kairos-test/web3-client
  npm install 
```



    
## Run Locally (backend server)

Run the server

```bash
  npm run dev
```

## Run Locally (frontend)

```bash
  npm run dev
```

## Tech Stack

**Client:** React, Redux ToolKit, NextJS TailwindCSS

**Server:** Node, Express, Prisma ORM, Docker

