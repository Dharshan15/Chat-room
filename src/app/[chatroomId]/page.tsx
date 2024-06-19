"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface PageProps{
    params : {
        chatroomId : string
    }
}

export default function ChatRoom ({params} : PageProps) {
  
  const [name, setName] = useState("")
  const router = useRouter()

  function handleEnter(){
    if(name.trim() === "") return 

    router.push(`${params.chatroomId}/${name}`);
  }
  
  return <div className="container max-w-screen-sm mt-20">
    <h1 className="text-2xl">Enter the room</h1>
    <div className="mt-4 space-y-2">
      <Input placeholder = "Name yourself" value={name} onChange={e=>setName(e.target.value)}/>
      <Button onClick={handleEnter}>Enter</Button>
    </div>
  </div>;
  
}
