import {NextPage} from 'next'
import {AdminReportsView} from "@/components";


const fetchDailyReports = async () => {
    const res = await fetch('http://localhost:3000/api/dailyreport',
      {cache: 'no-cache'}
    );
    return await res.json();
}
interface Props {}

const Page: NextPage<Props> = async ({}) => {
    const dailyReports = await fetchDailyReports();
    return <>
        <AdminReportsView dailyReports={dailyReports}/>
    </>
}

export default Page
