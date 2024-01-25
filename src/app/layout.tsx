import StyledComponentsRegistry from './registry'
export const metadata = {
  title: 'weather app',
  import: 'https://use.typekit.net/rld8osz.css'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html>
        <head>
          <link rel='icon' href='./favicon.ico' sizes='any' />
        </head>
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </>
  )
}
