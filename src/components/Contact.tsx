import { Chat, ChatCircleDots } from '@phosphor-icons/react';

const Contact = () => {
  return (
    <div className="fixed flex right-5 bottom-5 align-center justify-center text-white z-50 rounded-full bg-tertiary-400 size-20">
      <ChatCircleDots size={48} className="h-[97%]" weight='bold'/>
    </div>
  );
};

export default Contact;
