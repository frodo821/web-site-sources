import React from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from '../utils';

export class HumburgerMenu extends React.Component<{}, {shown: boolean}> {
  toggleButton: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: any) {
    super(props);
    this.state = {shown: false};
  }

  toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!isMobile()) {
      return;
    }
    this.setState({shown: e.target.checked});
  }

  render() {
    return (
      <div className={"hamburger"+(this.state.shown?" shown":"")}>
        <nav
          className="navigation"
          onClick={_=>isMobile() && this.toggleButton.current && this.toggleButton.current.click()}>
          {this.props.children}
        </nav>
        <div className="wrapper">
          <input
            type="checkbox"
            className="toggle"
            id="hamburger-toggle"
            ref={this.toggleButton}
            onChange={this.toggle}/>
          <label htmlFor="hamburger-toggle">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </label>
        </div>
      </div>
    );
  }
}

export const MenuItem: React.FC<{linksTo: string, text: string, icon?: string, intralink?: boolean}> = props => {
  return (
    <div className="menu-child">
      {props.intralink?
      <Link to={props.linksTo}>
        {props.icon?<img src={props.icon} width={32} height={32} alt={props.text}/>:null}
        {props.text}
      </Link>:
      <a href={props.linksTo}>
        {props.icon?<img src={props.icon} width={32} height={32} alt={props.text}/>:null}
        {props.text}
      </a>
      }
    </div>
  );
}

export const CustomizedMenuItem: React.FC = props => {
  return (
    <div className="menu-child">
      {props.children}
    </div>
  );
}

export const MenuItemGroup: React.FC<{title: string}> = props => {
  return (
    <div className="menu-group">
      <legend>{props.title}</legend>
      {props.children}
    </div>
  );
}
