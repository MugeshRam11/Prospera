import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type NavItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      link?: string;
    }[];
  }[];
  link?: string;
};

type Props = {
  navItems: NavItem[];
};

export function DropdownNavigation({ navItems }: Props) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-1">
        {navItems.map((navItem) => (
          <div
            key={navItem.id}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            <Link
              to={navItem.link || "#"}
              className="flex items-center gap-1 px-4 py-2 text-sm font-sans tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 relative"
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              {navItem.label}
              {navItem.subMenus && (
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    openMenu === navItem.label ? "rotate-180" : ""
                  }`}
                />
              )}
              {(isHover === navItem.id || openMenu === navItem.label) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                  transition={{ duration: 0.2 }}
                />
              )}
            </Link>

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="fixed top-20 left-1/2 -translate-x-1/2 pt-3 z-50"
                >
                  <div className={`bg-background border border-foreground/[0.08] card-shadow px-8 py-6 ${navItem.subMenus.length >= 3 ? 'w-[780px]' : 'min-w-[520px]'}`}>
                    <div className={`grid ${navItem.subMenus.length >= 3 ? 'grid-cols-3 gap-8' : 'grid-cols-2 gap-6'}`}>
                      {navItem.subMenus.map((sub) => (
                        <div key={sub.title}>
                          <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-3">
                            {sub.title}
                          </h4>
                          <div className="space-y-1">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.label}
                                  to={item.link || "#"}
                                  className="flex items-start gap-3 p-2.5 rounded-sm hover:bg-primary/[0.04] transition-colors duration-200 group"
                                >
                                  <div className="mt-0.5">
                                    <Icon
                                      size={16}
                                      className="text-primary/60 group-hover:text-primary transition-colors"
                                    />
                                  </div>
                                  <div>
                                    <span className="block text-sm font-sans text-foreground group-hover:text-primary transition-colors">
                                      {item.label}
                                    </span>
                                    <span className="block text-xs text-muted-foreground mt-0.5">
                                      {item.description}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
