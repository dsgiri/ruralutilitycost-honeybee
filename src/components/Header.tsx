import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const primaryNav = [
    { name: 'Platform', href: 'https://ruralutilitycost.com/', isExternal: true },
    { name: 'Plan', href: 'https://plan.ruralutilitycost.com/', isExternal: true },
    { name: 'Forecast', href: 'https://forecast.ruralutilitycost.com/', isExternal: true },
    { name: 'What-If', href: 'https://whatif.ruralutilitycost.com/', isExternal: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Honeybee', href: '/', isActive: true },
    { name: 'My favorites', href: '/favorites' },
  ];

  return (
    <>
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center h-full">
              <Link to="/" className="flex items-center gap-3 group h-full py-2">
                <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center font-bold text-slate-900 transition-colors">
                  H
                </div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                  Honeybee <span className="font-normal text-slate-400">Apiary Hub</span>
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 items-center h-full">
              {primaryNav.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-sm font-medium transition-colors flex items-center h-full min-h-[48px] text-slate-600 hover:text-amber-600"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'px-3 py-2 text-sm font-medium transition-colors flex items-center h-full min-h-[48px]',
                      (item.isActive || location.pathname === item.href)
                        ? 'text-amber-600 border-b-2 border-amber-500'
                        : 'text-slate-600 hover:text-amber-600'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center h-full">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 p-3 -mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[48px] min-w-[48px] flex justify-center items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg absolute w-full left-0">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {primaryNav.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-3 rounded-md text-base font-medium transition-colors text-slate-600 hover:text-amber-600 hover:bg-slate-50"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'block px-3 py-3 rounded-md text-base font-medium transition-colors',
                      (item.isActive || location.pathname === item.href)
                        ? 'text-amber-600 border-l-4 border-amber-500 bg-amber-50'
                        : 'text-slate-600 hover:text-amber-600 hover:bg-slate-50'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
