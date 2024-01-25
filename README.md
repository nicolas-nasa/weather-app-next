## How to Run

First, install the package:

```bash
npm install
# or
yarn 
# or
pnpm 
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Finilly open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

First to create the docker image execute:

```bash
 docker build -t next-docker . 
```

Next, run the container:

```bash
  docker run -p 3000:3000 next-docker
```

Finilly open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies

- nextui
- tailwind
- frame motion

## Dev Dependencies

- prettier

## Features

[x] Integrate with public weather API
[x] Display informations (temperature, description, humidity, windspeed)
[x] User Friendly interface with proper Styling
[x] Search funcionality (put city name and retrive weather)
[x] Used search funcionality to block search erros (select input)
[] Loading indicators
[] Tests
[x] Switch bottom between celsius and fahrenheit
[x] Deploy
[x] Typescript
[x] DockerFile
[] abstract fetch and functions
[] secured sensitive information ( api key )
[] create interface and types files separately
[] create a providers
[] create a swith between kpm and mph
[x] Responsive application ( fits well in all devices )
[x] Show weather for upcoming days
[x] Theme Dark and light
[x] Get weather with current location