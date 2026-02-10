import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { Blocks, Lock, Coins, FileCode, Wallet, Network } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blockchain Development Services',
  description:
    'Expert blockchain development services including smart contracts, DeFi, NFTs, and decentralized applications.',
}

export default function BlockchainPage() {
  const services = [
    {
      icon: FileCode,
      title: 'Smart Contract Development',
      description: 'Secure and audited smart contracts for Ethereum, BSC, and other chains',
      features: ['Solidity development', 'Security audits', 'Gas optimization'],
    },
    {
      icon: Coins,
      title: 'DeFi Solutions',
      description: 'Build decentralized finance protocols and platforms',
      features: ['Lending protocols', 'DEX development', 'Yield farming'],
    },
    {
      icon: Wallet,
      title: 'NFT Platforms',
      description: 'Create NFT marketplaces and minting platforms',
      features: ['NFT minting', 'Marketplace', 'IPFS integration'],
    },
    {
      icon: Network,
      title: 'dApp Development',
      description: 'Full-stack decentralized application development',
      features: ['Web3 integration', 'Wallet connectivity', 'Multi-chain support'],
    },
    {
      icon: Lock,
      title: 'Blockchain Security',
      description: 'Comprehensive security audits and penetration testing',
      features: ['Smart contract audits', 'Security testing', 'Best practices'],
    },
    {
      icon: Blocks,
      title: 'Custom Blockchain',
      description: 'Build private or consortium blockchain networks',
      features: ['Hyperledger', 'Enterprise solutions', 'Custom protocols'],
    },
  ]

  return (
    <>
      <Hero
        subtitle="Blockchain Development"
        title="Build Decentralized Applications with Confidence"
        description="We develop secure, scalable blockchain solutions including smart contracts, DeFi platforms, NFT marketplaces, and custom blockchain networks."
        primaryCTA={{ text: 'Discuss Your Project', href: '/contact' }}
        secondaryCTA={{ text: 'View Case Studies', href: '/case-studies' }}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Blockchain Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-600">
              Comprehensive blockchain development solutions
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6">Supported Blockchain Networks</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {['Ethereum', 'Binance Smart Chain', 'Polygon', 'Solana', 'Avalanche', 'Arbitrum', 'Optimism', 'Hyperledger'].map(
                (network) => (
                  <div key={network} className="rounded-lg bg-white p-4 font-semibold shadow-sm">
                    {network}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
