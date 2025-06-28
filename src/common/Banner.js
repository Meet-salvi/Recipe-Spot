import React from 'react'

export default function Banner() {
    return (
        <div>
            <div className="uk-container">
                <div className="uk-border-rounded-large uk-background-top-center uk-background-cover 
                                -background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1"
                    style={{ backgroundImage: "url(img/header.jpg)" }}>
                    <div className="uk-position-cover uk-header-overlay"></div>
                    <div className="uk-position-relative" data-uk-grid>
                        <div className="uk-width-1-2@m uk-flex uk-flex-middle">
                            <div className="uk-padding-large uk-padding-remove-right">
                                <h1 className="uk-heading-small uk-margin-remove-top">Choose from thousands of recipes</h1>
                                <p className="uk-text-secondary">Appropriately integrate technically sound value with scalable infomediaries
                                    negotiate sustainable strategic theme areas</p>
                            </div>
                        </div>
                        <div className="uk-width-expand@m">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
