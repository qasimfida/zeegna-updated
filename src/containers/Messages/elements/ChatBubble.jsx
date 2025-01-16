import { getNameInitials } from "@/utils/getNameInitials";
import { useInbox } from "@/contexts/Inbox";
import cls from "classnames";
import moment from "moment";
import { useScreenWidth } from "@/hooks";
import { AllDoneIcon } from "@/svgs/AllDoneIcon";
import Image from "next/image";
import { DownloadIcon } from "@/svgs/DownloadIcon";
import { FileIcon } from "@/svgs/FileIcon";
import formatSize from "@/utils/fileSize";

const ChatBubble = ({ message }) => {
  const { user } = useInbox();

  const isSender = message.id !== user.id;
  const userProfile = message.user.image ? (
    <Image
      src={message.user.image}
      alt={getNameInitials(
        `${message.user.firstName} ${message.user.lastName}`
      )}
      style={{ objectFit: "cover" }}
      fill
    />
  ) : (
    getNameInitials(`${message.user.firstName} ${message.user.lastName}`)
  );
  const bubbleClass = isSender
    ? "bg-white-400 text-blue-800 ml-auto border-transparent border rounded-br-lg "
    : "bg-white text-grey-800 mr-auto border-grey-100 border rounded-bl-lg ";
  const initialsClass = isSender ? "justify-end" : "justify-start";

  const formatMessageTime = (time) => {
    const messageTime = moment(time);
    return messageTime.format("LT");
  };
  const width = useScreenWidth();
  const edge = isSender ? (
    <div className="absolute z-10 h-6 w-6 bottom-[1px] -right-2.5">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.0229 24.1299C18.0229 25.6299 3.52295 24.6299 6.02292 23.6299C8.03159 19.0549 -4.3569 4.54387 3.82807 4.54344C5.72068 4.54344 6.13957 -1.42495 13.023 2.13012C13.0478 3.56728 13.023 10.2829 13.023 11.1299C13.023 24.8657 27.9462 22.4547 25.0229 24.1299Z"
          fill="#F4F4F4"
          stroke="#F4F4F4"
        />
      </svg>
    </div>
  ) : (
    <div className="absolute z-10 h-6 w-6 bottom-[1px] -left-2.5">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.38827 24.2428C8.38827 25.7428 23.0088 25.113 20.5088 24.113C18.5001 19.538 30.7681 4.65678 22.5831 4.65635C20.6905 4.65635 19.8923 -1.44209 13.0089 2.11298C12.9841 3.55014 13.0089 10.2661 13.0089 11.113C13.0089 24.8488 -1.53494 22.5676 1.38827 24.2428Z"
          fill="white"
          stroke="#EAEAF1"
        />
      </svg>
    </div>
  );
  const status = isSender ? <AllDoneIcon className={`text-grey-400`} /> : null;
  const hasAttachment = message?.attachment?.length > 0;
  const attachment = message.attachment;

  return (
    <div className={`flex ${initialsClass}`}>
      <div
        className={`flex items-end   ${
          isSender ? "flex-row-reverse space-x-reverse space-x-2" : "space-x-2"
        } ${width > 1280 ? "max-w-[60%]" : "max-w-full"}
        `}
      >
        <div
          className={`w-8 h-8 min-w-[1.75rem] min-h-[1.75rem] max-w-[1.75rem] max-h-[1.75rem] rounded-full flex items-center justify-center bg-white-300  text-grey-200 text-xs relative  border-2 border-grey-100`}
        >
          {userProfile}
        </div>
        <div className={`${bubbleClass} relative  rounded-2xl `}>
          {edge}
          <div
            className={cls(
              `z-20 relative px-4 py-3 space-x-2 flex flex-col flex-wrap justify-end  rounded-2xl  ${
                isSender
                  ? "bg-white-400 rounded-br-lg  "
                  : "bg-white rounded-bl-lg "
              } `
            )}
          >
            <div className="ml-0">
              {hasAttachment &&
                attachment?.map(({ id, name, size }) => {
                  return (
                    <div
                      key={id}
                      className="flex items-start gap-3 text-grey-400"
                    >
                      <FileIcon className="w-6 h-6" />
                      <div>
                        <p className="text-grey-400 text-xs font-medium">
                          {name}
                        </p>
                        <p className="text-grey-400 text-xs font-medium">
                          {formatSize(size)}
                        </p>
                      </div>
                      <div>
                        <DownloadIcon className="w-5 h-5 cursor-pointer" />
                      </div>
                    </div>
                  );
                })}
            </div>
            <div
              className={`flex flex-col m-auto ml-0 ${
                hasAttachment ? "mt-2.5 " : ""
              } items-center justify-between `}
            >
              <p
                className={`text-sm text-grey-400 font-normal w-full ${
                  hasAttachment ? "text-end" : "text-start"
                }`}
              >
                {message.text}
              </p>
              <p className="text-sm text-grey-2100 font-medium text-right min-w-max self-end flex items-center gap-1">
                {status} {formatMessageTime(message.time)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
