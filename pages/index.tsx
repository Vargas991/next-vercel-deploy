import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
  <MainLayout>
    <h1 className="title">
          Ir a  <Link href="/about">About</Link>
        </h1>

        <p className="description">
          Estamos en{' '}
          <code className="code">pages/index.js</code>
        </p>
  </MainLayout>
  )
}
