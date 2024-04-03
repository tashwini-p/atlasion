import Footer from "../Components/Footer"
import { Career, GridListWith, Logo, TabsFolder, VideoWithText } from "../Components/MiddlePage"
import { Navbar } from "../Components/Navbar"

export const Homepage=()=>{
    return (
        <>
        <Navbar/>
        <VideoWithText/>
        <TabsFolder/>
        <Logo/>
        <GridListWith/>
        <Career/>
        <Footer/>
        </>
    )
}