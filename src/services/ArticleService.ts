import apiClient from "../serviceClients/apiClient";

export interface Article {
    id: number;
    title: string;
    byline: string;
    abstract: string;
    url: string;
  }

class ArticleService {
    private apiKey: string;
    private baseUrl: string;
  
    constructor(){
        this.apiKey = process.env.REACT_APP_API_KEY ?? '';
        this.baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json';
    }

    async getArticles(): Promise<Article[]> {
        try {
            const response = await apiClient.get<{ results: Article[]}>(`${this.baseUrl}?api-key=${this.apiKey}`);
            return response.data.results;
        } catch (error) {
            console.error("Error fetching articles",error)
            throw error
        }
    }
}
export default ArticleService;
