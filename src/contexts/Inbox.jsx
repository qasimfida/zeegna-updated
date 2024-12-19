"use client";
import React, { createContext, useCallback, useContext, useState } from "react";
import moment from "moment";
import userImg from "../../public/images/profileImage.png";

const Inbox = createContext(false);

const data = [
  {
    id: 1,
    image: userImg,
    firstName: "Qasim",
    lastName: "Fida",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
    messages: [
      {
        id: 1,
        text: "hello There!",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
    ],
  },
  {
    id: 2,
    image: null,
    firstName: "John",
    lastName: "Wick",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 0,
    messages: [
      {
        id: 1,
        text: "Hello!",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
      {
        id: 2,
        text: "Hi I would like to make an appointment",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
    ],
  },
  {
    id: 3,
    image: userImg,
    firstName: "Qasim",
    lastName: "Fida",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 0,
    messages: [
      {
        id: 1,
        text: "Hello How may i help you?",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
      {
        id: 2,
        text: "I would like to make an appointment",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
    ],
  },
  {
    id: 4,
    image: null,
    firstName: "John",
    lastName: "Wick",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
    messages: [
      {
        id: 1,
        text: "hello There!",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
    ],
  },
  {
    id: 5,
    image: null,
    firstName: "Qasim",
    lastName: "Fida",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
    messages: [
      {
        id: 1,
        text: "hello There!",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
      {
        id: 2,
        text: "I would like to make an appointment",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
    ],
  },
  {
    id: 6,
    image: null,
    firstName: "John",
    lastName: "Wick",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
    messages: [
      {
        id: 1,
        text: "hello!",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
    ],
  },
  {
    id: 7,
    image: null,
    firstName: "Qasim",
    lastName: "Fida",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
    messages: [
      {
        id: 1,
        text: "Hi!",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
    ],
  },
  {
    id: 8,
    image: null,
    firstName: "John",
    lastName: "Wick",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
    messages: [
      {
        id: 1,
        text: "hello There!",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
      {
        id: 2,
        text: "I would like to make an appointment",
        time: moment(),
        user: {
          firstName: "John",
          lastName: "Wick",
        },
      },
    ],
  },
  // {
  //   id: 9,
  //   image: null,
  //   firstName: "Qasim",
  //   lastName: "Fida",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 10,
  //   image: null,
  //   firstName: "John",
  //   lastName: "Wick",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "Qasim",
  //   lastName: "Fida",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "John",
  //   lastName: "Wick",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "Qasim",
  //   lastName: "Fida",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "John",
  //   lastName: "Wick",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "Qasim",
  //   lastName: "Fida",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "John",
  //   lastName: "Wick",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "Qasim",
  //   lastName: "Fida",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "John",
  //   lastName: "Wick",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
];

export const InboxProvider = ({ children }) => {
  const [selectedContact, setSelectedContact] = useState({});
  const [contacts, setContacts] = useState(data);
  const [user, setUser] = useState({ id: 1 });

  const resetInbox = () => setSelectedContact();

  const value = {
    selectedContact,
    contacts,
    user,
    onSelectContact: useCallback((a) => {
      setSelectedContact(a);
    }, []),
    setContacts: useCallback((a) => {
      setContacts(a);
    }, []),
    setMessages: useCallback((newMessage) => {
      setSelectedContact((prevSelectedContact) => ({
        ...prevSelectedContact,
        messages: [...prevSelectedContact.messages, newMessage],
      }));
    }, []),
    resetInbox: useCallback(() => {
      resetInbox();
    }, []),
  };

  return <Inbox.Provider value={value}>{children}</Inbox.Provider>;
};

export const useInbox = () => useContext(Inbox);
