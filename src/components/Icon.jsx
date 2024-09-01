import logo from '../assets/icons/twitter-logo.png'
import star from '../assets/icons/star.png'
import search from '../assets/icons/search.png'
import settings from '../assets/icons/settings.png'
import location from '../assets/icons/location.png'
import link from '../assets/icons/link.png'
import birthday from '../assets/icons/birthday.png'
import date from '../assets/icons/date.png'

import home from '../assets/icons/home.png'
import homefill from '../assets/icons/homefill.png'

import explore from '../assets/icons/explore.png'
import explorefill from '../assets/icons/explorefill.png'

import notifications from '../assets/icons/notifications.png'
import notificationsfill from '../assets/icons/notificationsfill.png'

import messages from '../assets/icons/messages.png'
import messagesfill from '../assets/icons/messagesfill.png'

import bookmarks from '../assets/icons/bookmarks.png'
import bookmarksfill from '../assets/icons/bookmarksfill.png'

import lists from '../assets/icons/lists.png'
import listsfill from '../assets/icons/listsfill.png'

import profile from '../assets/icons/profile.png'
import profilefill from '../assets/icons/profilefill.png'

import more from '../assets/icons/more.png'

import replyicon from '../assets/icons/replyicon.png'
import retweeticon from '../assets/icons/retweet.png'
import likeicon from '../assets/icons/like.png'
import shareicon from '../assets/icons/share.png';
import stats from '../assets/icons/stats.png'
import threedots from '../assets/icons/threedots.png'

export const TwitterLogo = () => {
  return (
    <img src={logo} alt="Logo Icon" />
  )
}

export const StarIcon = () => {
  return (
    <img className="h-5" src={star} alt="Logo Icon" />
  )
}

export const SearchIcon = () => {
  return (
    <img className="ml-1 h-5" src={search} alt="Logo Icon" />
  )
}

export const SettingsIcon = () => {
  return (
    <img className="ml-1 h-5" src={settings} alt="Logo Icon" />
  )
}
//--Tweet Card Icons---//

export const ReplyIcon = () => {
  return (
    <img src={replyicon} alt="" />
  )
}

export const RetweetIcon = () => {
  return (
    <img src={retweeticon} alt="" />
  )
}

export const LikeIcon = () => {
  return (
    <img src={likeicon} alt="" />
  )
}

export const ShareIcon = () => {
  return (
    <img src={shareicon} alt="" />
  )
}

export const StatsIcon = () => {
  return (
    <img src={stats} alt="" />
  )
}

export const ThreeDotsIcon = () => {
  return (
    <img src={threedots} alt="" />
  )
}

//-------------------/profile icons-----------------------------------//

export const LocationIcon = ({className}) => {
  return (
    <img className={className} src={location} alt="" />
  )
}

export const LinkIcon = ({className}) => {
  return (
    <img className={className} src={link} alt="" />
  )
}

export const BirthdayIcon = ({className}) => {
  return (
    <img className={className} src={birthday} alt="" />
  )
}

export const DateIcon = ({className}) => {
  return (
    <img className={className} src={date} alt="" />
  )
}
//-------------------Inactive Menu Icons------------------------------//

export const HomeIcon = () => {
  return (
    <img src={home} alt="Home Icon" />
  )
}

export const ExploreIcon = () => {
  return (
    <img src={explore} alt="Explore Icon" />
  )
}

export const NotificationIcon = () => {
  return (
    <img src={notifications} alt="Notification Icon" />
  )
}

export const MessagesIcon = () => {
  return (
    <img src={messages} alt="Messages Icon" />
  )
}

export const BookmarksIcon = () => {
  return (
    <img src={bookmarks} alt="Bookmarks Icon" />
  )
}

export const ListsIcon = () => {
  return (
    <img src={lists} alt="Lists Icon" />
  )
}

export const ProfileIcon = () => {
  return (
    <img src={profile} alt="Profile Icon" />
  )
}

export const MoreIcon = () => {
  return (
    <img src={more} alt="More Icon" />
  )
}

//-------------------Active Menu Icons------------------------------//

export const HomeIconfill = () => {
  return (
    <img src={homefill} alt="Home Icon" />
  )
}

export const ExploreIconfill = () => {
  return (
    <img src={explorefill} alt="Explore Icon" />
  )
}

export const NotificationIconfill = () => {
  return (
    <img src={notificationsfill} alt="Notification Icon" />
  )
}

export const MessagesIconfill = () => {
  return (
    <img src={messagesfill} alt="Messages Icon" />
  )
}

export const BookmarksIconfill = () => {
  return (
    <img src={bookmarksfill} alt="Bookmarks Icon" />
  )
}

export const ListsIconfill = () => {
  return (
    <img src={listsfill} alt="Lists Icon" />
  )
}

export const ProfileIconfill = () => {
  return (
    <img src={profilefill} alt="Profile Icon" />
  )
}
