import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Chats
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibraryIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Videos
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Groups
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Bookmarks
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Jobs
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Events
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Courses
                        </span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHR" />
                <ul className="sidebarFriendList">
                   {Users.map(u=>(
                       <CloseFriend key={u.id} user={u}/>
                   ))}
                </ul>
            </div>
        </div>
    )
}
