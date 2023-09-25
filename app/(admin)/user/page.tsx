import {NextPage} from "next";
import {AdminUsersView} from "@/components";


const fetchUsers = async () => {
  const res = await fetch('http://localhost:3000/api/user',
    {cache: 'no-cache'}
  );
  return await res.json();
}
const Page: NextPage = async () => {
  const users = await fetchUsers();
  return <AdminUsersView users={users}/>
}

export default Page