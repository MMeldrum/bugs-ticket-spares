import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import {Session} from "next-auth";
import MainTable from "@/app/components/MainTable";
import TableMenu from "@/app/components/TableButtons";


export default async function Home() {
  const session: Session | null = await getServerSession(options)

  return (
    <>
      {session ? (
        <>
          <div>
            <TableMenu/>
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