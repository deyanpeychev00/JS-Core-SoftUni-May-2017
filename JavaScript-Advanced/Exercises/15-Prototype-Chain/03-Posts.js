/**
 * Created by Deyan Peychev on 14-Jul-17.
 */
function returnPosts() {
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
        toString(){
            return `Post: ${this.title}` + '\n' + `Content: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            let base = super.toString();
            base +='\n' + `Rating: ${this.likes - this.dislikes}`;
            if(this.comments.length > 0){
                base +='\nComments:\n';
                let comments = this.comments.map(c => ` * ${c}`);
                base+= comments.join('\n');
            }
            return base;
        }
    }
    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }
        toString(){
            return super.toString()+`\nViews: ${this.views}`;
        }
    }
    return{
        Post,
        SocialMediaPost,
        BlogPost
    }
}
let posts = returnPosts();

let SocialMediaPost = posts.SocialMediaPost;
let BlogPost = posts.BlogPost;

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

console.log('------------------------------------');


let bp = new BlogPost('BlogTitle', 'BlogContent', 200);
bp.view().view().view();

console.log(bp.toString());

