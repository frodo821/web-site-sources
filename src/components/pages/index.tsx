import React from 'react';
import '../../styles/pages/index.scss';
import C from '../../constants';
import Fade from '../Fade';

const Index: React.FC = () => (
  <div>
    <Fade>
      <h1>{C.base_title}</h1>
      <p className="legend">毎日はそれぞれが最高の一日である。</p>
    </Fade>
    <Fade type="up">
      <div className="section">
        <h2>ABOUT THIS SITE</h2>
        <p>このサイトはFrodoの個人サイトです。</p>
        <p>Frodo個人の制作物やBouFrawの制作物について紹介したり、Frodoが作成したWebアプリを公開したりしています。</p>
      </div>
    </Fade>
    <Fade type="bottom">
      <div className="section">
        <h2>ABOUT ME</h2>
        <img
          src="https://ja.gravatar.com/userimage/150845533/96329fcdf60e3ac95046d0eab974deb7.jpg?size=640"
          alt="アバター"
          width="64"
          height="64"
          className="lefty"/>
        <p>
          私はアマチュアのプログラマ/デザイナーです。
          制作歴は合計4年ほど。
          個人ブログ「<a href="https://www.tech-frodo.xyz">日常の吹き溜まり</a>」を運営しています。
        </p>
        <p>
          メインで使用しているフロントエンドフレームワークは<a href="https://reactjs.org">React</a>で、このサイトもReactを使用して構築しています。
          また、使用している開発言語はKotlin、Java、C#、Python、TypeScriptなどがあり、このうちPythonではPyPIにて自作ライブラリの公開もしています。
        </p>
        <p>My GitHub Account: <a href="https://github.com/frodo821">@frodo821</a></p>
      </div>
    </Fade>
    <Fade type="right">
      <h2>MY WORKS</h2>
      <p className="legend">作品集</p>
      <div className="artifact">
        <h3>Rattlepy</h3>
        <p>
          PythonのHTMLテンプレートライブラリです。
          Pythonの構文でHTMLを記述できます。
          また、要素の一部をテンプレート化して再利用したり、レンダリング時に変数を遅延展開するプレースホルダ機能などにも対応しています。
          <span className="learn-more"><a href="https://github.com/frodo821/Rattlepy">LEARN MORE</a></span>
        </p>
      </div>
      <div className="artifact">
        <h3>QSL Manager</h3>
        <p>
          QSL(無線交信ログ)のオンラインマネージャのプロトタイプです。
          Firebaseを介した複数デバイス同期やJARL形式でのログのエクスポートなど、多彩な機能を搭載しています。
          <span className="learn-more"><a href="https://pages.tech-frodo.xyz/qsl-manager">TRY IT NOW</a></span>
        </p>
      </div>
    </Fade>
  </div>
);

export default Index;
