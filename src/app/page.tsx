import Main from "@/Components/Main";
import { cookies } from "next/headers";

const Home = async () => {

    const session: string | null = (await cookies()).get("session")?.value || null;

    return <Main session={session} />

};

export default Home;