export default class db {
  private comments: any[] = [{
    text: `It's amazing` 
  }, {
    text: 'well written'
  }];

  private posts: any[] = [{
    title: 'What is GraphQL?',
    short: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra velit ante, a feugiat erat vulputate vulputate. Sed a pulvinar mauris. Donec vitae quam elit.`
  }, {
    title: 'What is Apollo?',
    short: `Proin lacus quam, aliquet ut nulla in, pretium hendrerit arcu. Proin est neque, porttitor eu sodales congue, faucibus sit amet diam. `
  }, {
    title: 'Build server from scratch',
    short: `Cras sem felis, sodales fermentum pellentesque ut, dictum a turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus.`
  }];

  constructor() {
    this.posts = this.addId(this.posts);
    this.comments = this.addId(this.comments);
  }

  private addId(data: any[]): any[] {
    return data.map((value, index) => {
      value['id'] = index + 1;
      return value;
    });
  }

  public allPosts(): any[] {
    return this.posts;
  }

  public allComments(): any[] {
    return this.comments;
  }

  public createComment(text: string): any {
    const comment = {
      id: this.comments.length + 1,
      text
    };

    this.comments.push(comment);

    return comment;
  }
}
