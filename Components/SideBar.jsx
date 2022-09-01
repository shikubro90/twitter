import Image from 'next/image'
import SidebarLink from './SidebarLink'
import { HomeIcon } from "@heroicons/react/20/solid"

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon
} from "@heroicons/react/24/outline";


const SideBar = () => {
  return (
    <div className='hidden sm:flex flex-col items-center xl:w-[340px] xl:items-start p-2 fixed h-full'>
      
      <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
        <Image src="https://rb.gy/ogau5a" width={30} height={30}/>
      </div>

      <div className='space-y-2.5 text-white'>
          <SidebarLink text="Home" Icon={HashtagIcon} active/>
          <SidebarLink text="Explore" Icon={BellIcon}/>
          <SidebarLink text="Notification" Icon={InboxIcon}/>
          <SidebarLink text="Message" Icon={BookmarkIcon}/>
          <SidebarLink text="Bookmarks" Icon={BookmarkIcon}/> 
          <SidebarLink text="Lists" Icon={ClipboardListIcon}/>
          <SidebarLink text="Profile" Icon={UserIcon}/>
          <SidebarLink text="More" Icon={DotsCircleHorizontalIcon}/>
      </div>


    </div>
  )
}

export default SideBar
