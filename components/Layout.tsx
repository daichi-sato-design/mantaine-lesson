import { FC, ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ children, title = 'Mantaine' }) => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <header></header>
      <main className="flex flex-1 flex-col justify-center p-4">
        {children}
      </main>
      <footer></footer>
    </div>
  )
}
