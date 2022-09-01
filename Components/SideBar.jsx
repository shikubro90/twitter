import Image from 'next/image'
import SidebarLink from './SidebarLink'
import { HomeIcon } from '@heroicons/react/20/solid'

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/24/outline'

const SideBar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center xl:w-[340px] xl:items-start p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>

      <div className="space-y-2.5 text-white">


      

      {/* <HashtagIcon className='h-5 w-5 text-blue-500' /> */}

        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        {/* <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} /> */}

      </div>

      <button className="hidden xl:inline bg-[#1d9bf0] font-bold text-white w-56 h-[52px] rounded-full hover:bg-[#1a8cd8] shadow-md duration-200 text-lg ">
        Tweet
      </button>

    </div>
  )
}

export default SideBar
