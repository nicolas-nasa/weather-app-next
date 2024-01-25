import { Switch } from '@nextui-org/switch'
type SwitchTempProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function SwitchTemp({ onChange }: SwitchTempProps) {
  return (
    <Switch
      defaultSelected
      color='default'
      onChange={onChange}
      startContent={<p className='text-base'>ºC</p>}
      endContent={<p className='text-base'>ºF</p>}
    ></Switch>
  )
}
