import { useInbox } from "@/contexts/Inbox";
import { Searchbar, Contact } from "./index";

export const Sidebar = () => {
  const { contacts, selectedContact, onSelectContact } = useInbox();
  const selectContact = (contact) => (e) => {
    onSelectContact(contact);
  };
  return (
    <div className="w-full xl:w-[20rem] lg:min-w-[20rem] relative z-20">
      <div className="flex h-16 py-3 px-5 border-b border-grey-100">
        <Searchbar />
      </div>
      <div className="max-h-[calc(100vh-14rem)] min-h-[calc(100vh-14rem)] overflow-y-auto app-scroll">
        {contacts?.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            isActive={contact.id === selectedContact.id}
            onClick={selectContact(contact)}
          />
        ))}
      </div>
    </div>
  );
};
