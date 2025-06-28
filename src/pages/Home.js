import React, { useEffect, useState } from 'react'
import Banner from '../common/Banner';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes').then((resonse) => {
            return resonse.json();
        }).then((data) => {
            setData(data['recipes'])
        });
    }, [data])
    return (
        <div>
            <Banner />
            <div className="uk-section uk-section-default">
                <div className="uk-container">
                    <div data-uk-grid>
                        <div className="uk-width-expand@m">
                            <div data-uk-grid>

                            </div>
                            <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
                                {
                                    data.map((value) => {
                                        return (
                                            <>
                                                <div>
                                                    <div
                                                        className="uk-card">
                                                        <div className="uk-card-media-top uk-inline uk-light">
                                                            <img className="uk-border-rounded-medium" src={value.image} alt="Course Title" />
                                                            <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                                                            <div className="uk-position-xsmall uk-position-top-right">
                                                                <Link to="/" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                                                    data-uk-icon="heart"></Link>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">{value.name}</h3>
                                                            <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                                                <div className="uk-width-auto uk-flex uk-flex-middle">
                                                                    <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                                                    <span className="uk-margin-xsmall-left">{value.rating}</span>
                                                                    <span>({value.reviewCount})</span>
                                                                </div>
                                                                <div className="uk-width-expand uk-text-right">{value.cuisine}</div>
                                                            </div>
                                                        </div>
                                                        <Link to={`recipedetails/${value.id}`} className="uk-position-cover"></Link>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                            <div className="uk-margin-large-top uk-text-small">
                                <ul className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove" data-uk-margin>
                                    <li><Link to="#"><span data-uk-pagination-previous></span></Link></li>
                                    <li><Link to="#">1</Link></li>
                                    <li className="uk-active"><span>2</span></li>
                                    <li><Link to="#">3</Link></li>
                                    <li><Link to="#">4</Link></li>
                                    <li><Link to="#"><span data-uk-pagination-next></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
