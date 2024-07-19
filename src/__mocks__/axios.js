
export const mockResponse = {data:{
    "status": "OK",
    "copyright": "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
    "num_results": 20,
    "results": [
        {
            "uri": "nyt://article/9de874cd-4b52-534b-8122-df3db273eddb",
            "url": "https://www.nytimes.com/2024/07/18/us/politics/melania-trump-2024-campaign-republicans.html",
            "id": 100000009579352,
            "asset_id": 100000009579352,
            "source": "New York Times",
            "published_date": "2024-07-18",
            "updated": "2024-07-18 21:27:04",
            "section": "U.S.",
            "subsection": "Politics",
            "nytdsection": "u.s.",
            "adx_keywords": "United States Politics and Government;Presidential Election of 2024;Republican National Convention;Trump, Melania;Republican Party",
            "column": null,
            "byline": "By Shawn McCreesh",
            "type": "Article",
            "title": "Ever Elusive, Melania Trump Is Expected to Appear at G.O.P. Convention",
            "abstract": "The former first lady skipped much of the Trump family reunion in Milwaukee this week.",
            "des_facet": [
                "United States Politics and Government",
                "Presidential Election of 2024",
                "Republican National Convention"
            ],
            "org_facet": [
                "Republican Party"
            ],
            "per_facet": [
                "Trump, Melania"
            ],
            "geo_facet": [],
            "media": [
                {
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Former President Donald J. Trump greeted his wife, Melania Trump, as she arrived at the R.N.C. on Thursday.",
                    "copyright": "Doug Mills/The New York Times",
                    "approved_for_syndication": 1,
                    "media-metadata": [
                        {
                            "url": "https://static01.nyt.com/images/2024/07/18/multimedia/18pol-melania-kiss-kvcf/18pol-melania-kiss-kvcf-thumbStandard.jpg",
                            "format": "Standard Thumbnail",
                            "height": 75,
                            "width": 75
                        },
                        {
                            "url": "https://static01.nyt.com/images/2024/07/18/multimedia/18pol-melania-kiss-kvcf/18pol-melania-kiss-kvcf-mediumThreeByTwo210.jpg",
                            "format": "mediumThreeByTwo210",
                            "height": 140,
                            "width": 210
                        },
                        {
                            "url": "https://static01.nyt.com/images/2024/07/18/multimedia/18pol-melania-kiss-kvcf/18pol-melania-kiss-kvcf-mediumThreeByTwo440.jpg",
                            "format": "mediumThreeByTwo440",
                            "height": 293,
                            "width": 440
                        }
                    ]
                }
            ],
            "eta_id": 0
        },
        {
            "uri": "nyt://article/578f181d-f961-5166-937a-9f8059002542",
            "url": "https://www.nytimes.com/2024/07/17/magazine/smoky-tomato-pasta-lemons-recipe.html",
            "id": 100000009551333,
            "asset_id": 100000009551333,
            "source": "New York Times",
            "published_date": "2024-07-17",
            "updated": "2024-07-18 12:17:08",
            "section": "Magazine",
            "subsection": "",
            "nytdsection": "magazine",
            "adx_keywords": "Cooking and Cookbooks;Recipes;Pasta;Lemons",
            "column": null,
            "byline": "By Yotam Ottolenghi",
            "type": "Article",
            "title": "The Most Important Seasoning After Salt and Pepper",
            "abstract": "Lemon lifts this pasta dish filled with gorgeously rich, smoky tomatoes.",
            "des_facet": [
                "Cooking and Cookbooks",
                "Recipes",
                "Pasta",
                "Lemons"
            ],
            "org_facet": [],
            "per_facet": [],
            "geo_facet": [],
            "media": [
                {
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": "Linda Xiao for The New York Times. Food stylist: Maggie Ruggiero. Prop stylist: Sophia Eleni Pappas.",
                    "approved_for_syndication": 1,
                    "media-metadata": [
                        {
                            "url": "https://static01.nyt.com/images/2024/06/21/magazine/21mag-Eat/21mag-Eat-thumbStandard.jpg",
                            "format": "Standard Thumbnail",
                            "height": 75,
                            "width": 75
                        },
                        {
                            "url": "https://static01.nyt.com/images/2024/06/21/magazine/21mag-Eat/21mag-Eat-mediumThreeByTwo210.jpg",
                            "format": "mediumThreeByTwo210",
                            "height": 140,
                            "width": 210
                        },
                        {
                            "url": "https://static01.nyt.com/images/2024/06/21/magazine/21mag-Eat/21mag-Eat-mediumThreeByTwo440.jpg",
                            "format": "mediumThreeByTwo440",
                            "height": 293,
                            "width": 440
                        }
                    ]
                }
            ],
            "eta_id": 0
        },
    ]
}}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}