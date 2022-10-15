import Random from "./components/basics/Random";
import WithParameters from "./components/basics/WithParameters";
import First from "./components/basics/First";
import Card from "./components/layout/Card";

export default function App () {
    return (
        <div>
            <Card Title='First'>
                <First/>
            </Card>
            <Card Title='WithParameters'>
                <WithParameters Title='Brave' Subtitle='Good things come to those who dare!'/>
            </Card>
            <Card Title='Random'>
                <Random/>
            </Card>

        </div>
    );
}