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
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline'

const Icons = [
  {
    id: 1,
    Icon: HomeIcon,
    text: 'Home',
    style: 'active',
  },
  {
    id: 2,
    Icon: HashtagIcon,
    text: 'HashtagIcon',
    style: '',
  },
  {
    id: 3,
    Icon: BellIcon,
    text: 'Notifications',
    style: '',
  },
  {
    id: 4,
    Icon: InboxIcon,
    text: 'Messages',
    style: '',
  },
  {
    id: 5,
    Icon: BookmarkIcon,
    text: 'Bookmarks',
    style: '',
  },
  {
    id: 6,
    Icon: ClipboardIcon,
    text: 'List',
    style: '',
  },
  {
    id: 7,
    Icon: UserIcon,
    text: 'Profile',
    style: '',
  },
  {
    id: 8,
    Icon: EllipsisHorizontalCircleIcon,
    text: 'More',
    style: '',
  },
]

const SideBar = () => {
  return (
    <div className="hidden sx:flex sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-start w-14 h-14 hoverAnimation p-0 ">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>

      <div className="space-y-2.5 text-white">
        {Icons.map(({id, Icon, text, style }) => (
          <SidebarLink key={}={id} text={text} Icon={Icon} style={style} />
        ))}

        {/* <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={EllipsisHorizontalCircleIcon} /> */}
      </div>

      <button className="hidden xl:inline xl:mt-4 bg-[#1d9bf0] font-bold text-white w-56 h-[52px] rounded-full hover:bg-[#1a8cd8] shadow-md duration-200 text-lg">
        Tweet
      </button>

      <div className='text-[#d9d9d9] flex items-center justify-center hoverAnimation mt-auto'>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6819/6819113.png"
          alt=""
          className='h-10 w-10 rounded-full xl:mr-2.5'
        />
        <div className='hidden xl:inline leading-5'>
          <h4 className='font-bold'>firebase 1854</h4>
          <p className='text-[#6e767d]'>@firebase1854</p>
        </div>

        <EllipsisHorizontalIcon className='text-white h-5 hidden xl:inline ml-10'/>
      </div>

    </div>
  )
}

export default SideBar
