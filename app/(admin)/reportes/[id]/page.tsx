import {ReportView} from "@/components";
import {headers} from "next/headers";

const fetchDailyReport = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/dailyreport/${id}`,
      {cache: 'no-cache'},
    );
    return await res.json();
}

interface Props {}

const Page= async ({params: {id}}: { params: { id: string } }) => {
  const dailyReport = await fetchDailyReport(id);
  return <ReportView dailyReport={dailyReport}/>
}

export default Page
