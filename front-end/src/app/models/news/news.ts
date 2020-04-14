export class News 
{
    _id : string;
    sourceName: string;
    author: string;
    title: string;
    description: string;
    type: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;

    constructor(_id,
        sourceName,
        author,
        title,
        description,
        type,
        url,
        urlToImage,
        publishedAt,
        content){
            this._id = _id
            this.sourceName = sourceName;
            this.author = author;
            this.title = title;
            this.description = description;
            this.type = type;
            this.url = url;
            this.urlToImage = urlToImage;
            this.publishedAt = publishedAt;
            this.content = content
    }
}
