
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function PricingPage() {
    return (
        <MainLayout>
            <h1 className="title">
                Ir a  <Link href="/">Pricing</Link>
            </h1>

            <p className="description">
                Estamos en{' '}
                <code className="code">pages/pricing.js</code>
            </p>
        </MainLayout>
    )
}