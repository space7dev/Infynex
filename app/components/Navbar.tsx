'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown, FileText, MessageSquare, Users, Award, Handshake, Newspaper, Users2 } from 'lucide-react'
import { navItems, siteConfig, phoneNumbers } from '@/lib/config'

interface NavItem {
  name: string
  href?: string
  submenu?: Array<{ name: string; href: string } | { category: string; items: Array<{ name: string; href: string }> }>
  megaMenu?: {
    title: string
    description: string
    ctaText: string
    ctaLink: string
    rightTitle?: string
    rightDescription?: string
    layout?: 'tiles'
    hideLeftPanel?: boolean
    columns: Array<{
      category?: string
      items: Array<{ name: string; href: string; description?: string; logo?: string; iconKey?: string }>
    }>
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setOpenSubmenu(null)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      {/* Main Header */}
      <div className={`bg-white ${isScrolled ? 'bg-white/95 backdrop-blur-sm' : ''}`}>
        <div className="container-custom" style={{ fontFamily: 'Graphik-Semibold !important', fontSize: '17px', color: '##303134' , lineHeight: '43px' }}>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center pt-[30px]" style={{ transform: 'translateX(-6cm)' }}>
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden w-[300px] h-[100px]">
                  <img
                    src="/agency-logo.png"
                    alt="Infynex"
                    className="h-full w-full object-cover mt-[50px]"
                    width='500px'
                  />
                </div>
                {/* <span className="hidden text-xl font-bold text-secondary-900 sm:inline">
                  {siteConfig.name}
                </span> */}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-1 xl:flex pt-[30px]">
              {(navItems as NavItem[]).map((item) => (
                <div key={item.name} className="group relative">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? 'text-primary-600'
                          : 'text-secondary-900 hover:text-primary-600'
                      }`}
                      style={{
                        color: '#303134',
                        fontFamily: 'Graphik-Semibold',
                        fontWeight: 500,
                        fontSize: '21px',
                        lineHeight: '100px',
                        position: 'relative',
                        padding: '5px 15px',
                        marginBottom: 0,
                      }}
                    >
                      <span>{item.name}</span>
                      {(item.submenu || item.megaMenu) && <ChevronDown className="h-3.5 w-3.5" />}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-secondary-900 transition-colors hover:text-primary-600"
                      style={{
                        color: '#303134',
                        fontFamily: 'Graphik-Semibold',
                        fontWeight: 500,
                        fontSize: '21px',
                        lineHeight: '100px',
                        position: 'relative',
                        padding: '5px 15px',
                        marginBottom: 0,
                      }}
                    >
                      <span>{item.name}</span>
                      {(item.submenu || item.megaMenu) && <ChevronDown className="h-3.5 w-3.5" />}
                    </button>
                  )}

                  {/* Desktop Mega Menu */}
                  {item.megaMenu && (
                    <div
                      className={`absolute left-1/2 top-full hidden -translate-x-1/2 bg-white pt-2 shadow-2xl group-hover:block rounded-lg overflow-hidden ${
                        item.megaMenu.hideLeftPanel
                          ? item.megaMenu.layout === 'tiles'
                            ? 'w-max'
                            : 'w-[960px]'
                          : item.megaMenu.columns[0]?.items[0]?.description
                          ? 'w-[1100px]'
                          : 'w-[900px]'
                      }`}
                    >
                      <div className={item.megaMenu.hideLeftPanel ? 'p-6' : 'flex'}>
                        {!item.megaMenu.hideLeftPanel && (
                          <div className="w-[320px] bg-gradient-to-br from-[#0b1f4d] to-[#071532] p-10 text-white flex flex-col justify-center text-center">
                            <h3 className="text-2xl font-bold mb-4 leading-tight">
                              {item.megaMenu.title}
                            </h3>
                            {item.megaMenu.description && (
                              <p className="text-lg text-blue-100 mb-8 italic leading-relaxed">
                                {item.megaMenu.description}
                              </p>
                            )}
                            {item.megaMenu.ctaText && (
                              <Link
                                href={item.megaMenu.ctaLink}
                                className="inline-block w-full bg-[#e11d2e] px-6 py-3 text-center text-xl font-semibold text-white rounded hover:bg-[#c81a2a] transition-all"
                              >
                                {item.megaMenu.ctaText}
                              </Link>
                            )}
                          </div>
                        )}

                        {item.megaMenu.layout === 'tiles' ? (
                          <div className="inline-grid grid-flow-col auto-cols-[200px] gap-6">
                            {item.megaMenu.columns.flatMap((column) => column.items).map((link) => {
                              const Icon =
                                link.iconKey === 'team'
                                  ? Users
                                  : link.iconKey === 'awards'
                                  ? Award
                                  : link.iconKey === 'policy'
                                  ? FileText
                                  : link.iconKey === 'partner'
                                  ? Handshake
                                  : link.iconKey === 'press'
                                  ? Newspaper
                                  : link.iconKey === 'partners'
                                  ? Users2
                                  : FileText
                              return (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="flex flex-col items-center gap-3 rounded-lg border border-gray-100 px-4 py-6 text-center hover:border-orange-200 hover:shadow-sm transition-all"
                                >
                                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200">
                                    <Icon className="h-6 w-6 text-orange-500" />
                                  </div>
                                  <span className="text-sm font-semibold text-gray-900">
                                    {link.name}
                                  </span>
                                </Link>
                              )
                            })}
                          </div>
                        ) : (
                          <div className="flex-1 p-8">
                            {item.megaMenu.rightTitle !== '' && (
                              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                                {item.megaMenu.rightTitle ??
                                  (item.name === 'Mobile'
                                    ? 'Experience World-Class Mobile App Development Services'
                                    : item.name === 'AI'
                                    ? 'AI Services'
                                    : item.name === 'Hire Developers'
                                    ? 'Experienced World-Class Low Cost Dedicated Remote Developers'
                                    : `${item.name} `)}
                              </h4>
                            )}
                            {item.megaMenu.rightDescription !== '' && (
                              <p className="text-base text-gray-600 mb-6">
                                {item.megaMenu.rightDescription ??
                                  (item.name === 'Mobile'
                                    ? 'We use best-in-class technologies to build top-notch and user-centric apps.'
                                    : item.name === 'Hire Developers'
                                    ? 'Scale your project with professional and proficient developers.'
                                    : 'Comprehensive solutions tailored to your business needs.')}
                              </p>
                            )}
                            <div
                              className={`grid gap-x-6 gap-y-6 ${
                                item.megaMenu.columns.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
                              }`}
                            >
                              {item.megaMenu.columns.map((column, colIdx) => (
                                <div key={colIdx}>
                                  {column.category && (
                                    <h6 className="mb-2 text-sm font-bold text-gray-900 border-b border-gray-200 pb-1">
                                      {column.category}
                                    </h6>
                                  )}
                                  <div className="space-y-4">
                                    {column.items.map((link) => (
                                      <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block group"
                                      >
                                        <div className="flex items-start gap-3">
                                          {link.logo && (
                                            <img
                                              src={link.logo}
                                              alt={link.name}
                                              className="h-9 w-9 object-contain"
                                            />
                                          )}
                                          <div>
                                            <h6 className="text-sm font-semibold text-gray-900 group-hover:text-gray-900 transition-colors mb-1">
                                              {link.name}
                                            </h6>
                                            {link.description && (
                                              <p className="text-xs text-gray-600 leading-relaxed">
                                                {link.description}
                                              </p>
                                            )}
                                          </div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Desktop Submenu */}
                  {item.submenu && !item.megaMenu && (
                    <div className="absolute left-0 top-full hidden min-w-[250px] bg-white pt-2 shadow-xl group-hover:block">
                      <div className="space-y-1 p-4">
                        {item.submenu.map((subitem: any, idx: number) => {
                          if ('category' in subitem) {
                            return (
                              <div key={idx} className="mb-4">
                                <h6 className="mb-2 border-b border-secondary-200 pb-1 text-xs font-bold uppercase text-primary-600">
                                  {subitem.category}
                                </h6>
                                <div className="space-y-1">
                                  {subitem.items.map((link: any) => (
                                    <Link
                                      key={link.href}
                                      href={link.href}
                                      className="block rounded px-3 py-1.5 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                                    >
                                      {link.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          }
                          return (
                            <Link
                              key={subitem.href}
                              href={subitem.href}
                              className="block rounded px-3 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                            >
                              {subitem.name}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden items-center xl:flex pt-[30px]">
              <Link
                href="/contact"
                className="flex items-center space-x-2 rounded border border-[#ff3b30] bg-white px-4 py-2 font-medium text-[#0a0a0a]"
                style={{
                  fontFamily: 'Graphik-Semibold',
                  fontWeight: 500,
                  fontSize: '21px',
                  lineHeight: '20px',
                }}
              >
                <MessageSquare className="h-4 w-4 text-[#ff3b30]" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-secondary-700 hover:bg-secondary-100 xl:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[120px] bg-white xl:hidden">
          <div className="h-full overflow-y-auto pb-20">
            <div className="container-custom">
              <div className="flex flex-col space-y-1 py-4">
                {(navItems as NavItem[]).map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className={`flex-1 px-4 py-3 text-left text-base font-medium transition-colors ${
                            pathname === item.href
                              ? 'text-primary-600'
                              : 'text-secondary-900 hover:bg-secondary-50'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          className="flex-1 px-4 py-3 text-left text-base font-medium text-secondary-900 hover:bg-secondary-50"
                        >
                          {item.name}
                        </button>
                      )}
                      {(item.submenu || item.megaMenu) && (
                        <button
                          onClick={() =>
                            setOpenSubmenu(
                              openSubmenu === item.name ? null : item.name
                            )
                          }
                          className="px-4 py-3"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              openSubmenu === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Mega Menu */}
                    {item.megaMenu && openSubmenu === item.name && (
                      <div className="bg-secondary-50 px-4 py-4">
                        <div className="mb-4 rounded-lg bg-gradient-to-br from-blue-900 to-blue-800 p-6 text-white">
                          <h3 className="text-lg font-bold mb-2">
                            {item.megaMenu.title}
                          </h3>
                          {item.megaMenu.description && (
                            <p className="text-sm text-blue-100 mb-4 italic">
                              {item.megaMenu.description}
                            </p>
                          )}
                          <Link
                            href={item.megaMenu.ctaLink}
                            className="inline-block w-full bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 text-center text-sm font-semibold text-white rounded"
                          >
                            {item.megaMenu.ctaText}
                          </Link>
                        </div>
                        <div className="space-y-1">
                          {item.megaMenu.columns.map((column, colIdx) => (
                            <div key={colIdx} className="mb-4">
                              {column.category && (
                                <h6 className="mb-2 text-sm font-bold text-gray-900 px-3">
                                  {column.category}
                                </h6>
                              )}
                              {column.items.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="block px-3 py-2 text-sm text-secondary-700 hover:text-primary-600"
                                >
                                  <div className="flex items-start gap-3">
                                    {link.logo && (
                                      <img
                                        src={link.logo}
                                        alt={link.name}
                                        className="h-7 w-7 object-contain"
                                      />
                                    )}
                                    <div>
                                      <div className="font-semibold">{link.name}</div>
                                      {link.description && (
                                        <div className="text-xs text-gray-600 mt-1">{link.description}</div>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Mobile Submenu */}
                    {item.submenu && !item.megaMenu && openSubmenu === item.name && (
                      <div className="space-y-1 bg-secondary-50 px-4 py-2">
                        {item.submenu.map((subitem: any, idx: number) => {
                          if ('category' in subitem) {
                            return (
                              <div key={idx} className="mb-3">
                                <h6 className="mb-2 text-xs font-bold uppercase text-primary-600">
                                  {subitem.category}
                                </h6>
                                {subitem.items.map((link: any) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block px-3 py-1.5 text-sm text-secondary-700 hover:text-primary-600"
                                  >
                                    {link.name}
                                  </Link>
                                ))}
                              </div>
                            )
                          }
                          return (
                            <Link
                              key={subitem.href}
                              href={subitem.href}
                              className="block px-3 py-2 text-sm text-secondary-700 hover:text-primary-600"
                            >
                              {subitem.name}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* <div className="border-t border-secondary-200 py-6 space-y-3">
                <div>
                  <p className="mb-3 px-4 text-sm font-bold text-secondary-700">Call Us</p>
                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:${phone.number.replace(/\D/g, '')}`}
                      className="mb-2 flex items-center space-x-2 px-4 text-sm text-secondary-700 hover:text-primary-600"
                    >
                      <span>{phone.flag}</span>
                      <span>{phone.number}</span>
                    </a>
                  ))}
                </div>

                <div className="px-4 space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center space-x-2 rounded bg-gradient-to-r from-orange-600 to-red-600 px-5 py-3 text-sm font-medium text-white"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
