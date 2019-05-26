import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { generateRandomStr } from '../utils';
import '../styles/animation.scss';

let observer = new IntersectionObserver(changes => {
  changes.forEach((it, i) => {
    if(it.isIntersecting) {
      let target = targets[it.target.id];
      target && setTimeout(()=>{target.started = true}, (i-1)*250 + 100);
    }
  });
}, {
  threshold: 0.6
});

let targets: {[key: string]: Fade} = {};

class Fade extends React.Component<{type?: "left" | "right" | "bottom" | "up"}> {
  id: string;
  private self: React.RefObject<HTMLDivElement>;
  $UNSAFE_started$: boolean = false;

  constructor(props: {}) {
    super(props);
    let id;
    while(targets.hasOwnProperty(id = generateRandomStr(32))) {}
    this.id = id;
    this.self = React.createRef();
    targets[id] = this;
  }

  componentDidMount() {
    observer.observe(this.self.current!!);
  }

  set started(val: boolean) {
    this.$UNSAFE_started$ = val;
    this.forceUpdate();
  }

  get started() {
    return this.$UNSAFE_started$;
  }

  unsubscribe() {
    observer.unobserve(this.self.current!!);
  }

  render() {
    return (
      <div ref={this.self} id={this.id}>
        <CSSTransition in={this.started} timeout={{enter: 500, exit: 500}} classNames="fade">
          <div className={`transition ${this.props.type || "left"}-in`} key={1}>
            {this.props.children}
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Fade;
