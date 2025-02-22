import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import StandingLegend from "@/components/StandingLegend";
import StandingTable from "@/components/StandingTable";

export default function Standing() {
    return (
        <main>
            <Header />
            <PageTitle title="Classement Ligue 2 BKT | 2023 - 2024" />
            <section className='max-w-screen-md mx-auto container'>
                <StandingTable />
            </section>
            <section className='max-w-screen-md mx-auto container'>
                <StandingLegend />
            </section>
            <Footer />
        </main>
    )
}