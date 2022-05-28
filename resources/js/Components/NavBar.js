import AddJobBtn from "./AddJobBtn";
import Logo from "./Logo";
import OptionsMenu from "./OptionsMenu";
import SearchBtn from "./SearchBtn";
import SearchForm from "./SearchForm";
import SideMenu from "./SideMenu";

export default function NavBar(props) {
    return (
        <nav className="bg-white md:bg-transparent shadow-xl md:shadow-none px-3 py-1 md:py-4 flex justify-between md:container">
            <div className="flex items-center">
                <SideMenu />
                <Logo />
            </div>
            <SearchForm />
            <div className="flex items-center space-x-2">
                <AddJobBtn />
                <SearchBtn />
                <OptionsMenu />
            </div>
        </nav>
    )
}
