import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"
import {Session} from "next-auth";
import MainTable from "@/app/components/MainTable";

export default async function Home() {
  const session: Session | null = await getServerSession(options)

  return (
    <>
      {session ? (
        <>
          <div>
            <MainTable />
          </div>
          {/*<div>*/}
            {/*<UserCard user={session?.user} pagetype={"Home"} />*/}
          {/*</div>*/}
        </>
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  )
}