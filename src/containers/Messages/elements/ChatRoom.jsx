import React from "react";
import { Chat } from "./Chat";
import { ChatForm } from "./ChatForm";
import moment from "moment";
import Link from "next/link";
import userImg from "../../../../public/images/profile-pic.png";
import { useInbox } from "@/contexts/Inbox";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotMenu, EdgeIcon, ArrowRightIcon } from "@/svgs/icons";

export const ChatRoom = () => {
  const { onSelectContact, selectedContact, setMessages } = useInbox();
  const messages = selectedContact.messages;

  const sendMessage = ({ text, attachment }) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      attachment,
      time: moment(),
      status: messages.length >= 2 ? "delivered" : "alldone",
      user: {
        image: userImg,
        id: 2,
        firstName: "Qasim",
        lastName: "Fida",
      },
    };
    setMessages(newMessage);
  };

  const handleBack = () => {
    onSelectContact({});
  };

  return (
    <div className="w-full xl:border-l relative -left-[1px]">
      <div className="bg-white rounded-2xl">
        <div className="text-white px-5 h-16 py-3 text-lg border-b border-grey-100 flex items-center relative ">
          <div
            className="flex h-10 w-10 min-w-[2.5rem] border-grey-100 border items-center justify-center rounded-full xl:hidden absolute cursor-pointer top-3"
            onClick={handleBack}
          >
            <ArrowRightIcon className="text-black transform rotate-180" />
          </div>
          <div className="flex items-center gap-2.5 text-base font-semibold text-center xl:text-left w-full">
            <div>
              <h5 className="text-grey-400 ">Jane Doe</h5>
              <Link href="#" className="text-grey-400 decoration-primary ">
                Mount Sinai Hospital
              </Link>
            </div>
          </div>
          <div>
            <Menu as="div" className="relative">
              <Menu.Button className="h-8 w-8 text-sm flex items-center justify-center rounded-full hover:border-primary border">
                <DotMenu
                  className={`min-w-6 min-h-6 flex items-center rotate-90 relative text-primary`}
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="relative ">
                  <EdgeIcon />
                  <Menu.Items className="absolute right-0 z-10 w-48 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`${
                            active ? "bg-gray-100" : ""
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Update Profile Image
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/notifications"
                          className={`${
                            active ? "bg-gray-100" : ""
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Account Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`${
                            active ? "bg-gray-100" : ""
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Log Out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </div>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto app-scroll max-h-[calc(100vh-19rem)] min-h-[calc(100vh-19rem)] ">
          <Chat messages={messages} />
        </div>
        <ChatForm onSendMessage={sendMessage} />
      </div>
    </div>
  );
};
