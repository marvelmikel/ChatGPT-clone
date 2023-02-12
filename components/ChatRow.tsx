import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    id: string;
};


function ChatRow({id}: Props) {
    const pathname = usePathname();
  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center`}>
        <ChatBubbleLeftIcon className="h-5 w-5" />
        <p className="flex-1 hidden md:inline-flex truncate">New Chat</p>
        <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700"/>
    </Link>
  );
}

export default ChatRow;
