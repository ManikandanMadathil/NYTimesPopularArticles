import apiClient from "../serviceClients/apiClient";

interface ArticleMediaMetadata {
    url: string;
    format: string;
    height: number;
    width: number;
  }
  
  interface ArticleMedia {
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
    approved_for_syndication: number;
    'media-metadata': ArticleMediaMetadata[];
  }
  
export interface ArticleResponse {
    uri: string;
    url: string;
    id: number;
    asset_id: number;
    source: string;
    published_date: string;
    updated: string;
    section: string;
    subsection: string;
    nytdsection: string;
    adx_keywords: string;
    column: string | null;
    byline: string;
    type: string;
    title: string;
    abstract: string;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
    media: ArticleMedia[];
    eta_id: number;
  }

  export interface Article {
    abstract:string,
    byline:string,
    id:number,
    imageUrl:string,
    title:string,
    url:string,
  }
  

class ArticleService {
    private apiKey: string;
    private baseUrl: string;
  
    constructor(){
        this.apiKey = process.env.REACT_APP_API_KEY ?? '';
        this.baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json';
    }

    async getArticles(): Promise<ArticleResponse[]> {
        try {
            const response = await apiClient.get<{ results: ArticleResponse[]}>(`${this.baseUrl}?api-key=${this.apiKey}`);
            return response.data.results;
        } catch (error) {
            console.error("Error fetching articles",error)
            throw error
        }
    }
}
export default ArticleService;
