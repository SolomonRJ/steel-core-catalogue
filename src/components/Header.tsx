import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="J C Enterprises Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
            <div className="text-xl md:text-2xl font-bold tracking-tighter">
              J C ENTERPRISES
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              end
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              activeClassName="text-foreground"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              activeClassName="text-foreground"
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              activeClassName="text-foreground"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              activeClassName="text-foreground"
            >
              Contact
            </NavLink>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search pipes, sheets, rods..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/"
                end
                className="text-sm font-medium py-2"
                activeClassName="text-foreground font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="text-sm font-medium py-2"
                activeClassName="text-foreground font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                className="text-sm font-medium py-2"
                activeClassName="text-foreground font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="text-sm font-medium py-2"
                activeClassName="text-foreground font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              <div className="relative pt-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Request Quote
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
