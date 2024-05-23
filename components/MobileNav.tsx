"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { headerLinks } from "@/constants"
import { UserButton } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
    const pathName = usePathname();
  return (
    <Sheet>
  <SheetTrigger><MenuIcon /></SheetTrigger>
  <SheetContent className="border-0 bg-[#ffffff11]">
    <UserButton />
    <SheetClose asChild>
    <nav className='md:flex-between mt-10 px-4 w-full flex flex-col items-start  gap-5 md:flex-row'>
               {
                    headerLinks.map((i)=>{
                        const isActive = pathName === i.route || pathName.startsWith(`${i.label}/`)
                        return (<SheetClose asChild key={i.label}>
                            <Link href={`${i.route}`} className={`${isActive?"font-bold text-xl":"text-md font-[500]"} duration-300`} key={i.route}>
                            {i.label}
                        </Link>
                        </SheetClose>)
                    })
                }
               </nav>
    </SheetClose>
  </SheetContent>
</Sheet>
  )
}

export default MobileNav
