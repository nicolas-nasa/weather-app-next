import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image
} from '@nextui-org/react'
import NextImage from 'next/image'
import waterIcon from 'public/water.png'
import windIcon from 'public/wind.png'

export type ICondition = {
  icon: string
  text: string
}
export type ITodayCurrent = {
  temp_c: number
  temp_f: number
  humidity: number
  condition: ICondition
  wind_mph: number
  wind_kph: number
}
export type ILocation = {
  name: string
}

export type IToday = {
  current: ITodayCurrent
  location: ILocation
}

export type IweekWeatherDay = {
  condition: ICondition
  avghumidity: number
  avgtemp_c: number
  avgtemp_f: number
  maxwind_kph: number
  maxwind_mph: number
}

export type IWeekWeatherForecastday = {
  day: IweekWeatherDay
  date: string
}
export type IWeekWeatherForecast = {
  forecastday: IWeekWeatherForecastday[]
}

export type IWeekWeather = {
  forecast: IWeekWeatherForecast
}

export type WeatherWeekCardProps = {
  weekWeather: IWeekWeatherForecastday
  temperature: string
}

export default function WeatherWeekCard({
  weekWeather,
  temperature
}: WeatherWeekCardProps) {
  const weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const data = (date: string) => {
    const day = new Date(date)
    return weekday[day.getDay()]
  }

  return (
    <Card className='w-full max-w-28 justify-center'>
      <CardHeader className='flex justify-center gap-3'>
        <Image
          alt='weather image Representation'
          src={weekWeather.day.condition.icon}
        ></Image>
        <p>{data(weekWeather.date)}</p>
      </CardHeader>
      <Divider></Divider>
      <CardBody className='flex flex-row justify-center'>
        <div className='flex flex-row'>
          <p className='text-4xl'>
            {temperature === 'c'
              ? weekWeather.day.avgtemp_c
              : weekWeather.day.avgtemp_f}
          </p>
          <p className='font-thin'>{temperature === 'c' ? 'ºC' : 'ºF'}</p>
        </div>
      </CardBody>
      <Divider></Divider>
      <CardFooter className='flex flex-row justify-center'>
        <div className='flex flex-col '>
          <div className='flex flex-row place-items-center gap-1'>
            <NextImage
              className='h-4 w-4'
              alt='weather image Representation'
              src={waterIcon}
            ></NextImage>
            <div className='flex flex-row place-items-center'>
              <p className='text-2xl font-medium'>
                {weekWeather.day.avghumidity}
              </p>
              <p className='text-xs font-extralight'>%</p>
            </div>
          </div>
          <div className='flex flex-row place-items-center gap-1'>
            <NextImage
              className='h-4 w-4'
              alt='weather image Representation'
              src={windIcon}
            ></NextImage>
            <div className='flex flex-row place-items-center'>
              <p className='text-1xl font-semibold'>
                {weekWeather.day.maxwind_kph}
              </p>
              <p className='text-xs font-thin'>km/h</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
