"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  DollarSign,
  Users,
  Package,
  Megaphone,
  ChevronRight,
  LineChart,
  Tags,
  ShoppingCart,
  Layers,
  Shield,
  ClipboardList,
  FileText,
  Image as ImageIcon,
  Inbox,
  MessageSquare,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const sidebarItems = [
  {
    title: "Thống kê",
    items: [
      { name: "Tổng quan", icon: BarChart3, href: "/admin" },
      { name: "Tài chính", icon: DollarSign, href: "/admin/finance" },
      { name: "Bán hàng", icon: LineChart, href: "/admin/sales" },
      { name: "Marketing", icon: Megaphone, href: "/admin/marketing" },
    ],
  },
  {
    title: "Quản lý",
    items: [
      { name: "Người dùng", icon: Users, href: "/admin/users" },
      { name: "Sản phẩm", icon: Package, href: "/admin/products" },
      { name: "Loại sản phẩm", icon: Layers, href: "/admin/categories" },
      { name: "Thương hiệu", icon: Tags, href: "/admin/brands" },
      { name: "Đơn hàng", icon: ShoppingCart, href: "/admin/orders" },
      { name: "Khuyến mãi", icon: ClipboardList, href: "/admin/promotions" },
      { name: "Bài viết / Blog", icon: FileText, href: "/admin/blog" },
      { name: "Banner / Quảng cáo", icon: ImageIcon, href: "/admin/banners" },
      { name: "Kho hàng / Tồn kho", icon: Inbox, href: "/admin/inventory" },
      {
        name: "Phản hồi khách hàng",
        icon: MessageSquare,
        href: "/admin/feedback",
      },
      { name: "Phân quyền", icon: Shield, href: "/admin/roles" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <nav className="flex-1 p-4 space-y-6">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item, itemIndex) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={itemIndex} href={item.href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        isActive
                          ? "bg-purple-50 text-purple-700 hover:bg-purple-100"
                          : "text-gray-600 hover:bg-gray-50"
                      )}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                      <ChevronRight className="ml-auto h-4 w-4" />
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
