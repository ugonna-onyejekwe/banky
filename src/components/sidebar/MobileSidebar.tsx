import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarContent from "./sidebarContent";

const MobileSidebar = ({ isOpen, setIsOpen }: MobilseSideBarProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-white w-[95%]  max-w-[350px]">
        <SheetHeader>
          <SheetTitle className="sr-only">menu list</SheetTitle>
        </SheetHeader>

        <div className="w-full" onClick={() => setIsOpen(false)}>
          <SidebarContent type="sm_sidebar" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
