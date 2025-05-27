import { Link } from "react-router-dom";
import Header from "../components/header";

type Category = 'Սմարթֆոններ' | 'Պլանշետներ' | 'Նոթբուքներ' | 'Հեռուստացույց';

const categories: Category[] = ['Սմարթֆոններ', 'Պլանշետներ', 'Նոթբուքներ', 'Հեռուստացույց'];

const map: Record<Category, string> = {
    'Սմարթֆոններ': '/phons',
    'Պլանշետներ': '/Tablets',
    'Նոթբուքներ': '/notebooks',
    'Հեռուստացույց': '/TVs',
};

const emojis: Record<Category, string> = {
    'Սմարթֆոններ': '📱',
    'Պլանշետներ': '📲',
    'Նոթբուքներ': '💻',
    'Հեռուստացույց': '📺',
};

function Categories() {
    return (
        <>
            <Header />
            <div className="categories">
                <ul>
                    {categories.map((i, k) => (
                        <li key={k}>
                            <Link to={map[i]}>
                                {emojis[i]} {i}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Categories;
