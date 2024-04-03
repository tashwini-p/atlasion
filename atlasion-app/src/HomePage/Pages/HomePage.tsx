import Footer from "../Component/Footer"
import { Career, GridListWith, Logo, TabsFolder, VideoWithText } from "../Component/MiddlePage"
import { Navbar } from "../Component/Navbar"

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