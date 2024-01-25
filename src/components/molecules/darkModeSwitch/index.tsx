import { Switch } from '@nextui-org/switch'
import { MoonIcon } from 'public/moonIcon'
import { SunIcon } from 'public/sunIcon'
type DarkModeSwitchProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function DarkModeSwitch({ onChange }: DarkModeSwitchProps) {
  return (
    <Switch
      onChange={onChange}
      defaultSelected
      size='lg'
      color='success'
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  )
}
