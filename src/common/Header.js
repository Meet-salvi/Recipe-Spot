import React, { use, useEffect, useState } from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom'

export default function Header() {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [search, setSearch] = useState('');
    const [Open, setOpen] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tags').then((response) => {
            return response.json();
        }).then((data) => {
            setCategories(data);
            setFilteredCategories(data);
        })
    }, [])

    // console.log(categories);

    function handleInput(e) {
        const value = e.target.value;
        setSearch(value);

        const filtered = categories.filter((category) =>
            category.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCategories(filtered);
    }

    // Clear search when item is selected
    const handleCategoryClick = () => {
        setSearch("");
    };

    // console.log(filteredCategories);

    return (
        <div>
            <nav className="uk-navbar-container uk-letter-spacing-small">
                <div className="uk-container">
                    <div className="uk-position-z-index" data-uk-navbar>
                        <div className="uk-navbar-left">
                            <Link className="uk-navbar-item uk-logo" to="/">Recipe Spot</Link>
                            <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
                                <li className="uk-active"><Link to="/">Home</Link></li>
                                <li ><Link to="/recipe">Recipe</Link></li>
                                {/* <li ><Link to="search">Search</Link></li>
                                <li ><Link to="contact">Contact</Link></li> */}
                            </ul>
                        </div>
                        <div className="uk-navbar-right">
                            <div>
                                <Link className="uk-navbar-toggle" data-uk-search-icon to="/"></Link>
                                <div className="uk-drop uk-background-default" data-uk-drop="mode: click; pos: left-center; offset: 0" style={{ position: 'realtive' }}>
                                    <form className="uk-search uk-search-navbar uk-width-1-1">
                                        <input className="uk-search-input uk-text-demi-bold" type="search" placeholder="Search..." value={search} onChange={(e) => { handleInput(e) }} autofocus />
                                    </form>
                                    {search && filteredCategories.length > 0 && (
                                        <ul style={{ backgroundColor: 'white', zIndex: '999', position: 'absolute', textAlign: 'center', border: '1px solid #ccc', borderRadius: '10px' }} className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top" data-uk-nav>
                                            {filteredCategories.map((value) => (
                                                <li key={value}><Link to={`/categories/${value}`} onClick={handleCategoryClick}>{value}</Link></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            {/* <ul className="uk-navbar-nav uk-visible@m">
                                <li ><a href="sign-in.html">Sign In</a></li>
                            </ul>
                            <div className="uk-navbar-item">
                                <div><a className="uk-button uk-button-primary" href="sign-up.html">Sign Up</a></div>
                            </div> */}
                            {/* <a className="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-toggle><span
                                data-uk-navbar-toggle-icon onClick={() => setOpen(!Open)}></span></a> */}
                        </div>
                    </div>
                </div>
            </nav>

            
        </div>
    )
}
