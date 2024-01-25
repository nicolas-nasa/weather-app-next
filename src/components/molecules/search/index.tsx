import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete'
import React from 'react'
type Iitens = {
  name: string
  lat: number
  lon: number
}

type SearchInputProps = {
  placeHolder: string
  label: string
  items: Iitens[]
  onSelectionChange: (key: React.Key) => void
}

export default function SearchInput({
  placeHolder,
  label,
  items,
  onSelectionChange
}: SearchInputProps) {
  const [value, setValue] = React.useState<Iitens[]>()
  const onInputChange = async (value: string) => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=33ef601950bb46f19b100859242401&q=${value}&aqi=no`,
      { cache: 'no-store' }
    )
    const json: Iitens[] = await res.json()
    console.log(json)
    if (json.length > 0) setValue(json)
  }

  return (
    <>
      <Autocomplete
        defaultItems={items}
        items={value}
        label={label}
        placeholder={placeHolder}
        className='w-full max-w-60'
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}
      >
        {iten => (
          <AutocompleteItem key={`${iten.lat},${iten.lon}`}>
            {iten.name}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </>
  )
}
