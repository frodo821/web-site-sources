import React from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';
import { HumburgerMenu, MenuItem, MenuItemGroup } from './components/HumburgerMenu';
import Page from './components/Page';
import './styles/main.scss';

const NavigationMenu: React.FC = () => (
  <HumburgerMenu>
    <MenuItemGroup title="メニュー">
      <MenuItemGroup title="サイト内リンク">
        <MenuItem linksTo="/" text="トップ" intralink/>
        {/*<MenuItem linksTo="/profile" text="自己紹介" intralink/>*/}
        <MenuItem linksTo="/privacy-policy" text="個人情報保護方針" intralink/>
        <MenuItem linksTo="/disclaimers" text="免責事項" intralink/>
      </MenuItemGroup>
      <MenuItemGroup title="作品リンク">
        <MenuItem linksTo="https://pages.tech-frodo.xyz/qsl-manager" text="Online QSL Manager"/>
        <MenuItem linksTo="https://pypi.org/project/rattlepy/" text="Rattlepy"/>
      </MenuItemGroup>
      <MenuItemGroup title="SNS/メディア">
        <MenuItem linksTo="https://twitter.com/BoufrawFrodo2" text="Frodo: Twitter"/>
        <MenuItem linksTo="https://twitter.com/BoufrawFrodo2" text="Boufraw: Twitter"/>
        <MenuItem linksTo="https://www.tech-frodo.xyz/" text="Frodo: Blog"/>
        <MenuItem linksTo="https://boufraw.blogspot.com/" text="Boufraw: Blog"/>
      </MenuItemGroup>
      <MenuItemGroup title="シェアする">
        <MenuItem
          linksTo={`https://twitter.com/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(document.title)}`}
          text="Tweetする"/>
        <MenuItem
          linksTo={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&amp;src=sdkpreparse`}
          text="Facebookで共有"/>
      </MenuItemGroup>
    </MenuItemGroup>
  </HumburgerMenu>);

const App: React.FC = () => {
  return (
    <HashRouter hashType="slash">
      <div className="App">
        <NavigationMenu/>
        <Route path='/' component={()=><Page path={window.location.hash.substr(1)}/>}/>
        <footer>
          <p>
            <Link to="/privacy-policy">プライバシーポリシー</Link> / <Link to="/disclaimers">免責事項</Link>
          </p>
          <p className="attribution">
            &copy;2019 Frodo All Rights Reserved
          </p>
          <p className="attribution">
            背景画像: Underwater World by 
            Felipe Skroski [<a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>], 
            <a href="https://commons.wikimedia.org/wiki/File:Underwater_world.jpg">Wikimedia Commonsから</a>
          </p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
