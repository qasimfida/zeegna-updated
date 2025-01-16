import { BellIcon } from "./BellIcon";
import {
  AddIcon,
  BackButtonIcon,
  BarsMenu,
  CloseIcon,
  CoverIcon,
  DeleteIcon,
  DotMenu,
  DownloadIcon,
  EditIcon,
  InfoIcon,
  LockIcon,
  MessageIcon,
  QuestionIcon,
  SheildIcon,
  NextButtonIcon,
  ClockIcon,
  HeartIcon,
  MinusIcon,
  SearchIcon,
  AllDoneIcon,
  SendIcon,
  DropdownIcon,
  UpIcon,
  CheckCircleIcon,
  BellRingingIcon,
  DocumentNotificationIcon,
  TelephoneIcon,
  EnvolopeIcon,
  PointerIcon,
  QuestionMarkCircleIcon,
  CaseIcon,
  CapIcon,
  LikeIcon,
  MapIcon,
  AnnouncementIcon,
  StarOutlinedIcon,
  MagnifyIcon,
  SaveLaterIcon,
  TowerIcon,
  ProfileIcon,
  TickIcon,
  SuitCaseIcon,
  ProfileIconSmall,
} from "@/svgs/icons";
import cls from "classnames";

export const icons = {
  edit: (props) => <EditIcon {...props} />,
  add: (props) => <AddIcon {...props} />,
  close: (props) => <CloseIcon {...props} />,
  delete: (props) => <DeleteIcon {...props} />,
  back: (props) => <BackButtonIcon {...props} />,
  next: (props) => <NextButtonIcon {...props} />,
  message: (props) => <MessageIcon {...props} />,
  info: (props) => <InfoIcon {...props} />,
  bell: (props) => <BellIcon {...props} />,
  dot: (props) => <DotMenu {...props} />,
  bars: (props) => <BarsMenu {...props} />,
  question: (props) => <QuestionIcon {...props} />,
  sheild: (props) => <SheildIcon {...props} />,
  cover: (props) => <CoverIcon {...props} />,
  lock: (props) => <LockIcon {...props} />,
  download: (props) => <DownloadIcon {...props} />,
  clock: (props) => <ClockIcon {...props} />,
  heart: (props) => <HeartIcon {...props} />,
  minus: (props) => <MinusIcon {...props} />,
  search: (props) => <SearchIcon {...props} />,
  allDone: (props) => <AllDoneIcon {...props} />,
  send: (props) => <SendIcon {...props} />,
  down: (props) => <DropdownIcon {...props} />,
  up: (props) => <UpIcon {...props} />,
  checkCircle: (props) => <CheckCircleIcon {...props} />,
  bellRinging: (props) => <BellRingingIcon {...props} />,
  documentNotification: (props) => <DocumentNotificationIcon {...props} />,
  telephone: (props) => <TelephoneIcon {...props} />,
  envolope: (props) => <EnvolopeIcon {...props} />,
  pointer: (props) => <PointerIcon {...props} />,
  questionMarkCircle: (props) => <QuestionMarkCircleIcon {...props} />,
  case: (props) => <CaseIcon {...props} />,
  cap: (props) => <CapIcon {...props} />,
  like: (props) => <LikeIcon {...props} />,
  map: (props) => <MapIcon {...props} />,
  starOutlined: (props) => <StarOutlinedIcon {...props} />,
  announcement: (props) => <AnnouncementIcon {...props} />,
  magnify: (props) => <MagnifyIcon {...props} />,
  later: (props) => <SaveLaterIcon {...props} />,
  tower: (props) => <TowerIcon {...props} />,
  profile: (props) => <ProfileIcon {...props} />,
  check: (props) => <TickIcon {...props} />,
  suitcase: (props) => <SuitCaseIcon {...props} />,
  profilesmall: (props) => <ProfileIconSmall {...props} />,
};

export const Icon = ({
  name,
  filled = false,
  className = "",
  iconCls = "",
  handleClick,
  ...rest
}) => {
  const Icon = icons[name];

  if (filled) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={cls`flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-light ${className}`}
        {...rest}
      >
        <Icon className={iconCls} />
      </button>
    );
  } else {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={cls`flex items-center justify-center rounded-full border-2 text-grey-400 border-gray-100 hover:text-primary ${className}`}
        {...rest}
      >
        <Icon className={iconCls} />
      </button>
    );
  }
};
