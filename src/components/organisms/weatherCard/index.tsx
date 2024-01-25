import SwitchTemp from '@/components/atoms/switch'
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
  text: string
  icon: string
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

export type WeatherCardProps = {
  todayWeather: IToday
  onChange: React.ChangeEventHandler<HTMLInputElement>
  temperature: string
}

export default function WeatherCard({
  todayWeather,
  onChange,
  temperature
}: WeatherCardProps) {
  return (
    <Card className='w-full max-w-60'>
      <CardHeader className='flex gap-3'>
        <Image
          alt='weather image Representation'
          src={todayWeather.current.condition.icon}
        ></Image>
        <div className='flex flex-col'>
          <p className='text-ellipsis text-nowrap text-xl font-bold'>
            {todayWeather.location.name}
          </p>
          <p className='font-thin'>{todayWeather.current.condition.text}</p>
        </div>
      </CardHeader>
      <Divider></Divider>
      <CardBody className='flex flex-row justify-between'>
        <div className='flex flex-row'>
          <p className='text-5xl'>
            {temperature === 'c'
              ? todayWeather.current.temp_c
              : todayWeather.current.temp_f}
          </p>
          <p className='font-thin'>{temperature === 'c' ? 'ºC' : 'ºF'}</p>
        </div>
        <div className='flex flex-col '>
          <div className='flex flex-row place-items-center gap-1'>
            <NextImage
              className='h-4 w-4'
              alt='weather image Representation'
              src={waterIcon}
            ></NextImage>
            <div className='flex flex-row place-items-center'>
              <p className='text-2xl font-medium'>
                {todayWeather.current.humidity}
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
                {todayWeather.current.wind_kph}
              </p>
              <p className='text-xs font-thin'>km/h</p>
            </div>
          </div>
        </div>
      </CardBody>
      <Divider></Divider>
      <CardFooter className='flex flex-row justify-between'>
        <p className='text-sm font-semibold'>Change temperature:</p>
        <SwitchTemp onChange={onChange}></SwitchTemp>
      </CardFooter>
    </Card>
  )
}
