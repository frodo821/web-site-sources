import React from "react";
import C from '../constants';

type Props = {path?: string};
type LoadError = "NOT FOUND";

const pages: {[key: string]: () => Promise<React.FC>} = {
  "/": async () => (await import('./pages')).default,
  //"/profile": async () => (await import('./pages/profile')).default,
  "/privacy-policy": async () => (await import('./pages/privacy-policy')).default,
  "/disclaimers": async () => (await import('./pages/disclaimers')).default
}

class Page extends React.Component<Props, {content?: React.FC | LoadError}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(next: Props) {
    if(!next.path) {
      return;
    }
    if(!pages.hasOwnProperty(next.path)) {
      this.setState({content: "NOT FOUND"});
      return;
    }

    this.setState({content: undefined});

    pages[next.path]().then(it=>this.setState({content: it}));
  }

  componentDidUpdate() {
    let title = document.getElementsByTagName('h1')[0];
    if(!title) return;
    document.title = (title.textContent || "ロード中...") +
      ((window.location.hash!=="#/" && ` | ${C.base_title}`) || '');
    title.scrollIntoView({block: "end"});
  }

  render() {
    let Content  = this.state.content;
    return (
      <main>
        {Content !== void 0?Content !== "NOT FOUND"?<Content/>:this.notFound():<div className="spinner"/>}
      </main>
    );
  }

  notFound() {
    return (
      <div>
        <h1>要求されたページが見つかりませんでした</h1>
        <p>
          要求されたページが見つかりませんでした。
          入力したURLが正しいか確認してください。
        </p>
        <p>
          もし、リンクをたどってこのページが表示された場合は、お手数ですがサイトの管理者に連絡していただけるとありがたく思います。
          大変ご迷惑をおかけいたしました。
        </p>
      </div>
    );
  }
}

export default Page;
