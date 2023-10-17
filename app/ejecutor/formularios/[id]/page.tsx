import { NextPage } from 'next'
import {ExecutorFormView} from "@/components";

interface Props {}

const fetchHours = async () => {
  const response = await fetch('http://localhost:3000/api/hour', {
    cache: 'no-cache',
  });
  return await response.json();
}

const fetchUsers = async () => {
  const response = await fetch('http://localhost:3000/api/user', {
    cache: 'no-cache',
  });
  return await response.json();
}

const fetchInferences = async () => {
  const response = await fetch('http://localhost:3000/api/inference', {
    cache: 'no-cache',
  });
  return await response.json();
}
const Page = async (
  {params: {id}}: { params: { id: string } }
) => {
  const hours = await fetchHours();
  const users = await fetchUsers();
  const inferences = await fetchInferences();
  return <ExecutorFormView hours={hours} users={users} inferences={inferences} dailyReportId={id}/>
}

export default Page
