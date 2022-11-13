import Random from "./components/basics/Random";
import WithParameters from "./components/basics/WithParameters";
import First from "./components/basics/First";
import Card from "./components/layout/Card";
import './App.css'
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudentList from "./components/repetition/StudentList";
import ProductsTable from "./components/repetition/ProductsTable";
import EvenOrOdd from "./components/condition/EvenOrOdd";
import UserInfo from "./components/condition/UserInfo";
import EuroMillions from "./components/millions/EuroMillions";

export default function App () {
    return (
        <div className='App'>
            <div className='Cards'>
            <Card Title='First' color='#080'>
                <First/>
            </Card>
            <Card Title='WithParameters' color='#9fd3c7'>
                <WithParameters Title='Brave' Subtitle='Good things come to those who dare!'/>
            </Card>
            <Card Title='Random' color='#e3e3'>
                <Random/>
            </Card>
            <Card Title='Family' color='#ff6f3c'>
                <Family surname='Mckenzie'>
                    <FamilyMember name='John'/>
                    <FamilyMember name='Mary'/>
                    <FamilyMember name='Alice'/>
                </Family>
            </Card>
            <Card Title='Repetition' color ='#ffc93c'>
                <StudentList/>
            </Card>
            <Card Title='Repetition Challenge' color ='#155263'>
                <ProductsTable/>
            </Card>
            <Card Title='Odd or Even' color ='#f67e7d'>
                <EvenOrOdd number='8'/>
            </Card>
            <Card Title='User Info' color ='#843b62'>
                <UserInfo user={{ name: 'MushroomBlade' }}/>
                <UserInfo user={{ email: 'mushroomblade@gmail.com'}}/>
                <UserInfo user =''/>
            </Card>
            <Card Title='Lottery Challenge' color ='#196F3D'>
                <EuroMillions amount="8"/>
            </Card>
            </div>
        </div>
    );
}