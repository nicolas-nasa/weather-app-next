'use client'

import SearchInput from '@/components/molecules/search'
import Header from '@/components/organisms/header'
import WeatherCard, { IToday } from '@/components/organisms/weatherCard'
import WeatherWeekCard, {
  IWeekWeather,
  IWeekWeatherForecastday
} from '@/components/organisms/weatherWeekCard'

import React, { useEffect, useState } from 'react'

export default function Home() {
  const [todayWeather, setTodayWeather] = useState<IToday>()
  const [weekWeather, setWeekWeather] = useState<IWeekWeatherForecastday[]>()
  const [temperature, setTemperature] = useState<string>('c')
  const [actuaPosition, setPosition] = useState<{
    latitude: number
    longitude: number
  }>()

  const setWhether = async (pos: { latitude: number; longitude: number }) => {
    const today = await fetch(
      `https://api.weatherapi.com/v1/current.json?q=${pos.latitude},${pos.longitude}&key=33ef601950bb46f19b100859242401`
    )
    const week = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=33ef601950bb46f19b100859242401&q=${pos.latitude},${pos.longitude}&&days=7`
    )
    const todayFormated: IToday = await today.json()
    if (todayFormated.current) setTodayWeather(todayFormated)
    const weekFormated: IWeekWeather = await week.json()
    if (weekFormated.forecast.forecastday.length > 0) {
      weekFormated.forecast.forecastday.shift()
      setWeekWeather(weekFormated.forecast.forecastday)
    }
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async position => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
        if (actuaPosition) {
          await setWhether(actuaPosition)
        } else {
          const today = await fetch(
            `https://api.weatherapi.com/v1/current.json?q=sao paulo&key=33ef601950bb46f19b100859242401`
          )
          const week = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=33ef601950bb46f19b100859242401&q=sao paulo&days=7`
          )
          const todayFormated: IToday = await today.json()
          if (todayFormated.current) setTodayWeather(todayFormated)
          const weekFormated: IWeekWeather = await week.json()
          if (weekFormated.forecast.forecastday.length > 0) {
            weekFormated.forecast.forecastday.shift()
            setWeekWeather(weekFormated.forecast.forecastday)
          }
        }
      })
    }
  }, [actuaPosition])

  const onSelectionChange = async (key: React.Key) => {
    const week = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=33ef601950bb46f19b100859242401&q=${key}&days=7`
    )
    const today = await fetch(
      `https://api.weatherapi.com/v1/current.json?q=${key}&key=33ef601950bb46f19b100859242401`
    )
    const weekFormated: IWeekWeather = await week.json()
    const todayFormated: IToday = await today.json()
    console.log(weekFormated.forecast.forecastday)
    if (weekFormated.forecast.forecastday.length > 0) {
      weekFormated.forecast.forecastday.shift()
      setWeekWeather(weekFormated.forecast.forecastday)
    }

    if (todayFormated.current) setTodayWeather(todayFormated)
  }

  return (
    <>
      <Header></Header>
      <div className='flex h-full w-full flex-col place-items-center justify-between gap-9'>
        <SearchInput
          label='City Selected'
          placeHolder='Select City'
          items={[{ name: '', lat: 0, lon: 0 }]}
          onSelectionChange={onSelectionChange}
        ></SearchInput>
        {todayWeather?.location?.name && (
          <WeatherCard
            todayWeather={todayWeather}
            onChange={() => setTemperature(temperature === `c` ? 'f' : 'c')}
            temperature={temperature}
          ></WeatherCard>
        )}
        <div className='flex w-full max-w-60 flex-row flex-wrap content-between gap-4'>
          {weekWeather &&
            weekWeather.map((day, index) => {
              return (
                <WeatherWeekCard
                  key={index}
                  weekWeather={day}
                  temperature={temperature}
                ></WeatherWeekCard>
              )
            })}
        </div>
      </div>
    </>
  )
}
