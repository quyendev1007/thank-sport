import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface SidebarProps {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Sidebar = ({ items, open, onOpenChange }: SidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center">Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col h-full pb-2">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
