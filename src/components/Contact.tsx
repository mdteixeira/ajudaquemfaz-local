import { ChatCircleDots } from '@phosphor-icons/react';

const Contact = () => {
  return (
    <div className="fixed z-50 flex justify-center text-white rounded-full right-5 bottom-5 align-center bg-tertiary-400 size-20">
      <ChatCircleDots size={48} className="h-[97%]" weight='bold'/>
    </div>
  );
};

export default Contact;
