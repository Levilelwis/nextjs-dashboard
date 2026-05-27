"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home, Users, FileText } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Customers",
      href: "/dashboard/customers",
      icon: Users,
    },
    {
      name: "Invoices",
      href: "/dashboard/invoices",
      icon: FileText,
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <aside
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#f9fafb",
        borderRight: "1px solid #e5e7eb",
        padding: "20px",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          background: "#0d6efd",
          color: "white",
          padding: "14px",
          borderRadius: "10px",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        🌐 ACME
      </div>

      {/* MENU */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {links.map((link) => {
          const Icon = link.icon;

          const active = isActive(link.href);

          return (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.background = "#eef6ff";
                  e.currentTarget.style.color = "#2563eb";
                  e.currentTarget.style.transform = "translateX(4px)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = active
                  ? "#dbeafe"
                  : "transparent";

                e.currentTarget.style.color = active
                  ? "#1d4ed8"
                  : "#111";

                e.currentTarget.style.transform = active
                  ? "translateX(6px)"
                  : "translateX(0)";
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px",
                borderRadius: "10px",
                textDecoration: "none",

                transition: "all 0.2s ease",

                // 🟦 ativo mais forte
                color: active ? "#1d4ed8" : "#111",

                background: active
                  ? "#dbeafe"
                  : "transparent",

                fontWeight: active ? "bold" : "normal",

                transform: active
                  ? "translateX(6px)"
                  : "translateX(0)",
              }}
            >
              <Icon size={18} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}