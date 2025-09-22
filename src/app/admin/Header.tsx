"use client";
import Link from "next/link";
import { SearchIcon, UserCircle, Bell, LogIn, UserPlus } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const HeaderAdmin = () => {
  return (
    <header className="px-1 lg:px-10 bg-white h-20 border-b z-10 ">
      <div className="h-full flex justify-between font-medium ">
        <div className="flex items-center">
          {" "}
          <Link href={"/"}>
            <span
              className={cn(
                "text-2xl md:text-3xl lg:text-5xl font-semibold",
                poppins.className
              )}
            >
              Thawgs
            </span>
          </Link>
        </div>
        <div className="flex items-center  gap-4 ml-4 lg:ml-0">
          <div className="relative flex items-center">
            <Input
              placeholder="Tìm kiếm..."
              className="rounded-full lg:min-w-2xl"
            />
            <SearchIcon
              size={20}
              className="absolute cursor-pointer top-[25%] right-2 "
            />
          </div>
          <div className="relative flex items-center p-0">
            <Bell size={30} className="cursor-pointer" />
            <span className="absolute inline-flex size-5 items-center justify-center text-white text-[12px] rounded-full -top-2 -right-2 bg-red-500">
              1
            </span>
          </div>
          <Menubar className="border-none outline-none shadow-none max-w-max">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer p-0">
                <UserCircle size={30} />
              </MenubarTrigger>
              <MenubarContent sideOffset={8} align="end" className="w-48">
                <MenubarItem asChild>
                  <Link href={"/sign-in"} className="flex items-center gap-3">
                    <LogIn size={20} className="text-black" />
                    Đăng nhập
                  </Link>
                </MenubarItem>
                <MenubarItem asChild>
                  <Link href={"/sign-up"} className="flex items-center gap-3">
                    <UserPlus size={20} className="text-black" />
                    Đăng ký
                  </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
