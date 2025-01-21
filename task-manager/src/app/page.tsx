import Image from "next/image";
import taskPic from "../../public/3411092.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-around items-center h-screen p-8">
        <div>
          <h1 className="text-6xl font-bold ">Welcome to task manager</h1>
          <Link href="/signup">
            <Button>SignUp</Button>
          </Link>
          <Link href="/login">
            <Button variant={"ghost"}>LogIn</Button>
          </Link>
        </div>
        <Image src={taskPic} alt="task" width={700} height={400}></Image>
      </div>
    </>
  );
}
