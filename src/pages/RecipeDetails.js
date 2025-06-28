import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function RecipeDetails() {
    const [recipedetails, setRecipeDetails] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    let id = useLocation()['pathname'].split('/')[2];

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`).then((response) => {
            return response.json();
        }).then((data) => {
            setRecipeDetails(data);
            setIngredients(data['ingredients']);
            setInstructions(data['instructions']);
        })
    }, [])

    return (
        <div>
            <div className="uk-container">
                <div data-uk-grid>
                    <div className="uk-width-1-2@s">
                        <div><img className="uk-border-rounded-large" src={recipedetails.image}
                            alt="recipe name" /></div>
                    </div>
                    <div className="uk-width-expand@s uk-flex uk-flex-middle">
                        <div>
                            <h1>{recipedetails.name}</h1>
                            <h3>ingredients : </h3>
                            <ol>
                                {
                                    ingredients.map((value) => {
                                        return (
                                            <>
                                                <li>{value}</li>
                                            </>
                                        )
                                    })
                                }
                            </ol>
                            <hr />
                            <h5>difficulty : {recipedetails.difficulty}</h5>
                            <h5>cuisine : {recipedetails.cuisine}</h5>
                            <h5>rating & reviews : {recipedetails.rating} ({recipedetails.reviewCount})</h5>
                            <h5>mealType : {recipedetails.mealType}</h5>

                        </div>
                    </div>
                </div>
            </div>

            <div className="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider" data-uk-grid>
                <div>
                    <span data-uk-icon="icon: clock; ratio: 1.4"></span>
                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">prepTimeMinutes</h5>
                    <span className="uk-text-small">{recipedetails.prepTimeMinutes} mins</span>
                </div>
                <div>
                    <span data-uk-icon="icon: future; ratio: 1.4"></span>
                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">cookTimeMinutes</h5>
                    <span className="uk-text-small">{recipedetails.cookTimeMinutes} mins</span>
                </div>
                <div>
                    <span data-uk-icon="icon: users; ratio: 1.4"></span>
                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Yield</h5>
                    <span className="uk-text-small">Serves {recipedetails.servings}</span>
                </div>
            </div>

            <div className="uk-section uk-section-default">
                <div className="uk-container uk-container-small">
                    <div className="uk-grid-large" data-uk-grid>
                        <div className="uk-width-expand@m">
                            <div className="uk-article">
                                <h3>How to Make It</h3>
                                {
                                    instructions.map((value, index) => {
                                        return (
                                            <>
                                                <div id="step-2" className="uk-grid-small uk-margin-medium-top" data-uk-grid>
                                                    <div className="uk-width-auto">
                                                        <Link href="#" className="uk-step-icon" data-uk-icon="icon: check; ratio: 0.8"
                                                            data-uk-toggle="target: #step-2; cls: uk-step-active"></Link>
                                                    </div>
                                                    <div className="uk-width-expand">
                                                        <h5 className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary" data-uk-leader="fill:—">{index + 1} Step</h5>
                                                        <div className="uk-step-content">{value}</div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                <hr className="uk-margin-medium-top uk-margin-large-bottom" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-section uk-section-muted">
                    <div className="uk-container">
                        <h3>Other Recipes You May Like</h3>
                        <div className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top" data-uk-grid>
                            <div>
                                <div
                                    className="uk-card">
                                    <div className="uk-card-media-top uk-inline uk-light">
                                        <img className="uk-border-rounded-medium" src="https://source.unsplash.com/-YHSwy6uqvk/300x160" alt="Course Title" />
                                        <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                                        <div className="uk-position-xsmall uk-position-top-right">
                                            <Link to="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                                data-uk-icon="heart"></Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Chef John's Turkey Sloppy Joes</h3>
                                        <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                            <div className="uk-width-auto uk-flex uk-flex-middle">
                                                <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                                <span className="uk-margin-xsmall-left">5.0</span>
                                                <span>(73)</span>
                                            </div>
                                            <div className="uk-width-expand uk-text-right">by John Keller</div>
                                        </div>
                                    </div>
                                    <Link to="recipe.html" className="uk-position-cover"></Link>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="uk-card">
                                    <div className="uk-card-media-top uk-inline uk-light">
                                        <img className="uk-border-rounded-medium" src="https://source.unsplash.com/jUPOXXRNdcA/300x160" alt="Course Title" />
                                        <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                                        <div className="uk-position-xsmall uk-position-top-right">
                                            <Link href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                                data-uk-icon="heart"></Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Brown Sugar Meatloaf</h3>
                                        <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                            <div className="uk-width-auto uk-flex uk-flex-middle">
                                                <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                                <span className="uk-margin-xsmall-left">3.0</span>
                                                <span>(94)</span>
                                            </div>
                                            <div className="uk-width-expand uk-text-right">by Danial Caleem</div>
                                        </div>
                                    </div>
                                    <a href="recipe.html" className="uk-position-cover"></a>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="uk-card">
                                    <div className="uk-card-media-top uk-inline uk-light">
                                        <img className="uk-border-rounded-medium" src="https://source.unsplash.com/nTZOILVZuOg/300x160" alt="Course Title" />
                                        <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                                        <div className="uk-position-xsmall uk-position-top-right">
                                            <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                                data-uk-icon="heart"></a>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Awesome Slow Cooker Pot Roast</h3>
                                        <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                            <div className="uk-width-auto uk-flex uk-flex-middle">
                                                <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                                <span className="uk-margin-xsmall-left">4.5</span>
                                                <span>(153)</span>
                                            </div>
                                            <div className="uk-width-expand uk-text-right">by Janet Small</div>
                                        </div>
                                    </div>
                                    <a href="recipe.html" className="uk-position-cover"></a>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="uk-card">
                                    <div className="uk-card-media-top uk-inline uk-light">
                                        <img className="uk-border-rounded-medium" src="https://source.unsplash.com/Cf_Df-Zl8iw/300x160" alt="Course Title" />
                                        <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                                        <div className="uk-position-xsmall uk-position-top-right">
                                            <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                                data-uk-icon="heart"></a>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Broiled Tilapia Parmesan</h3>
                                        <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                            <div className="uk-width-auto uk-flex uk-flex-middle">
                                                <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                                <span className="uk-margin-xsmall-left">5.0</span>
                                                <span>(524)</span>
                                            </div>
                                            <div className="uk-width-expand uk-text-right">by Aleaxa Dorchest</div>
                                        </div>
                                    </div>
                                    <a href="recipe.html" className="uk-position-cover"></a>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="uk-card">
                                    <div className="uk-card-media-top uk-inline uk-light">
                                        <img className="uk-border-rounded-medium" src="https://source.unsplash.com/aGjP08-HbYY/300x160" alt="Course Title" />
                                        <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                                        <div className="uk-position-xsmall uk-position-top-right">
                                            <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                                data-uk-icon="heart"></a>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Baked Teriyaki Chicken</h3>
                                        <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                            <div className="uk-width-auto uk-flex uk-flex-middle">
                                                <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                                <span className="uk-margin-xsmall-left">4.6</span>
                                                <span>(404)</span>
                                            </div>
                                            <div className="uk-width-expand uk-text-right">by Ben Kaller</div>
                                        </div>
                                    </div>
                                    <a href="recipe.html" className="uk-position-cover"></a>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="uk-card">
                                    <div className="uk-card-media-top uk-inline uk-light">
                                        <img className="uk-border-rounded-medium" src="https://source.unsplash.com/SxTlB4fde9Q/300x160" alt="Course Title" />
                                        <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                                        <div className="uk-position-xsmall uk-position-top-right">
                                            <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                                data-uk-icon="heart"></a>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Zesty Slow Cooker Chicken</h3>
                                        <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                            <div className="uk-width-auto uk-flex uk-flex-middle">
                                                <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                                <span className="uk-margin-xsmall-left">3.9</span>
                                                <span>(629)</span>
                                            </div>
                                            <div className="uk-width-expand uk-text-right">by Sam Brown</div>
                                        </div>
                                    </div>
                                    <a href="recipe.html" className="uk-position-cover"></a>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="uk-card">
                                    <div className="uk-card-media-top uk-inline uk-light">
                                        <img className="uk-border-rounded-medium" src="https://source.unsplash.com/MNtag_eXMKw/300x160" alt="Course Title" />
                                        <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                                        <div className="uk-position-xsmall uk-position-top-right">
                                            <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                                data-uk-icon="heart"></a>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Rosemary Ranch Chicken Kabobs</h3>
                                        <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                            <div className="uk-width-auto uk-flex uk-flex-middle">
                                                <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                                <span className="uk-margin-xsmall-left">3.6</span>
                                                <span>(149)</span>
                                            </div>
                                            <div className="uk-width-expand uk-text-right">by Theresa Samuel</div>
                                        </div>
                                    </div>
                                    <a href="recipe.html" className="uk-position-cover"></a>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="uk-card">
                                    <div className="uk-card-media-top uk-inline uk-light">
                                        <img className="uk-border-rounded-medium" src="https://source.unsplash.com/Yr4n8O_3UPc/300x160" alt="Course Title" />
                                        <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                                        <div className="uk-position-xsmall uk-position-top-right">
                                            <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                                data-uk-icon="heart"></a>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Slow Cooker Pulled Pork</h3>
                                        <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                            <div className="uk-width-auto uk-flex uk-flex-middle">
                                                <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                                <span className="uk-margin-xsmall-left">2.9</span>
                                                <span>(309)</span>
                                            </div>
                                            <div className="uk-width-expand uk-text-right">by Adam Brown</div>
                                        </div>
                                    </div>
                                    <a href="recipe.html" className="uk-position-cover"></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
