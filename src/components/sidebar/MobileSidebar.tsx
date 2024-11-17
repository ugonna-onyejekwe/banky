import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import SidebarContent from "./sidebarContent";

const MobileSidebar = ({ isOpen, setIsOpen, user }: MobilseSideBarProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-white w-[95%]  max-w-[350px]">
        <SheetHeader>
          <SheetTitle className="sr-only">menu list</SheetTitle>
        </SheetHeader>

        <div className="w-full h-full" onClick={() => setIsOpen(false)}>
          <SidebarContent type="sm_sidebar" user={user} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
