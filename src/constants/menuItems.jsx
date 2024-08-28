import { BookmarksIcon, BookmarksIconfill, ExploreIcon, ExploreIconfill, HomeIcon, HomeIconfill, ListsIcon, ListsIconfill, MessagesIcon, MessagesIconfill, MoreIcon, NotificationIcon, NotificationIconfill, ProfileIcon, ProfileIconfill } from '../components/Icon';

const menuItems = [
  { id: 1, name: 'Home', icon: <HomeIcon />, activeIcon: <HomeIconfill/>, path: '/' },
  { id: 2, name: 'Explore', icon: <ExploreIcon />, activeIcon: <ExploreIconfill/>, path: '/explore' },
  { id: 3, name: 'Notifications', icon: <NotificationIcon />, activeIcon:<NotificationIconfill />, path: '/notifications' },
  { id: 4, name: 'Messages', icon: <MessagesIcon />, activeIcon: <MessagesIconfill />, path: '/messages' },
  { id: 5, name: 'Bookmarks', icon: <BookmarksIcon />, activeIcon: <BookmarksIconfill />, path: '/bookmarks' },
  { id: 6, name: 'Lists', icon: <ListsIcon />, activeIcon: <ListsIconfill />, path: '/lists' },
  { id: 7, name: 'Profile', icon: <ProfileIcon />, activeIcon: <ProfileIconfill />, path: '/profile' },
  { id: 8, name: 'More', icon: <MoreIcon />, activeIcon: <MoreIcon />,/*burada filled hali yok. pop up çıkıyor.*/ path: '/more' },
  
];

export default menuItems;