"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCart,
  UserCircle,
  Package,
  User,
  Heart,
  Bell,
  HelpCircle,
  LogOut,
  LogIn,
  UserPlus,
  Home,
  ShoppingBag,
  Info,
  Phone,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}
const NavbarItem = ({ children, href, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant={isActive ? "default" : "ghost"}
      className="text-base rounded-full"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navItems = [
  { href: "/", children: "Trang chủ", icon: Home },
  { href: "/products", children: "Sản phẩm", icon: ShoppingBag },
  { href: "/about", children: "Giới thiệu", icon: Info },
  { href: "/contact", children: "Liên lạc", icon: Phone },
];

const userFeatures = [
  { href: "/orders", children: "Đơn hàng của tôi", icon: Package },
  { href: "/account", children: "Tài khoản", icon: User },
  { href: "/wishlist", children: "Sản phẩm yêu thích", icon: Heart },
  { href: "/notifications", children: "Thông báo", icon: Bell },
  { href: "/help", children: "Trợ giúp", icon: HelpCircle },
  {
    href: "/logout",
    children: "Đăng xuất",
    icon: LogOut,
    action: () => {
      console.log("logout");
    },
  },
];

const Header = () => {
  const isAuth = false;

  const pathName = usePathname();

  return (
    <header className=" bg-white h-20 border-b">
      <div className="max-w-7xl mx-auto h-full flex justify-between font-medium px-2 lg:px-0">
        <div className="flex items-center">
          <Menubar className="block lg:hidden border-none outline-none shadow-none max-w-max">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer p-0 m-0 h-full w-auto border-none bg-transparent flex items-center justify-center">
                <MenuIcon size={20} />
              </MenubarTrigger>
              <MenubarContent>
                {navItems.map((item) => (
                  <MenubarItem key={item.href} asChild>
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon size={18} className="text-black" />
                      {item.children}
                    </Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Link href={"/"}>
            <span
              className={cn(
                "text-2xl lg:text-5xl font-semibold",
                poppins.className
              )}
            >
              Thawgs
            </span>
          </Link>
        </div>

        <nav className="items-center gap-4 hidden lg:flex">
          {navItems.map((item) => (
            <NavbarItem
              key={item.href}
              href={item.href}
              isActive={pathName === item.href}
            >
              {item.children}
            </NavbarItem>
          ))}
        </nav>
        <div className="flex items-center gap-4 ml-4 lg:ml-0">
          <div className="relative flex items-center">
            <Input placeholder="Tìm kiếm..." className="rounded-full " />
            <SearchIcon
              size={20}
              className="absolute cursor-pointer top-[30%] right-2"
            />
          </div>
          <Link href={"/cart"} className="relative flex items-center">
            <ShoppingCart size={30} className="cursor-pointer" />
            <span className="absolute inline-flex size-5 items-center justify-center text-white text-[12px] rounded-full -top-2 -right-2 bg-red-500">
              1
            </span>
          </Link>
          <Menubar className="border-none outline-none shadow-none max-w-max mr-5">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer p-0">
                <UserCircle size={30} />
              </MenubarTrigger>
              <MenubarContent sideOffset={8} align="end" className="w-48">
                {isAuth ? (
                  userFeatures.map((item) => (
                    <MenubarItem key={item.href} asChild>
                      <div className="flex items-center gap-3 cursor-pointer">
                        <item.icon size={20} className="text-black" />
                        {item.action ? (
                          <button onClick={item.action} className="text-left">
                            {item.children}
                          </button>
                        ) : (
                          <Link href={item.href}>{item.children}</Link>
                        )}
                      </div>
                    </MenubarItem>
                  ))
                ) : (
                  <>
                    <MenubarItem asChild>
                      <Link
                        href={"/sign-in"}
                        className="flex items-center gap-3"
                      >
                        <LogIn size={20} className="text-black" />
                        Đăng nhập
                      </Link>
                    </MenubarItem>
                    <MenubarItem asChild>
                      <Link
                        href={"/sign-up"}
                        className="flex items-center gap-3"
                      >
                        <UserPlus size={20} className="text-black" />
                        Đăng ký
                      </Link>
                    </MenubarItem>
                  </>
                )}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </header>
  );
};

export default Header;
