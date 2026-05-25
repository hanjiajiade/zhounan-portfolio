import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <section className="section">
        <h1>周楠 Zhounan</h1>
        <p>24岁 | 英语本科 | 天津求职</p>
        <p style={{marginTop:16}}>
          <strong>外贸业务员岗位 · 期望薪资5-7K</strong>
        </p>
        <a className="resume-btn" href="/resume.pdf" download>下载简历PDF</a>
        <p>商务高级风格个人网站，全面展现我的外贸专长与业务能力。</p>
      </section>
      <section className="section">
        <h2>工作经历</h2>
        <ul>
          <li>
            <b>天津伊润集团 外贸业务员</b><br/>
            2023.03 - 2024.03<br/>
            - 社媒、邮件开发客户，跟进发货<br/>
            - 独立与客户沟通，维护订单<br/>
          </li>
          <li style={{marginTop:12}}>
            <b>河北海天管件有限公司 外贸业务员</b><br/>
            2021.03 - 2023.02<br/>
            - 客户开发与维护，电话/邮件/视频会议沟通<br/>
            - 带领客户验厂/接待，处置报价与订单跟进<br/>
            - 熟练使用ERP系统管理客户与订单
          </li>
        </ul>
      </section>
      <section className="section">
        <h2>项目成就</h2>
        <ul>
          <li>独立签署十余份外贸合同，个人开发新客户合同金额超40万人民币</li>
          <li>与同事合作，促成最大订单金额：28万欧元</li>
          <li>参加巴西石油天然气展，伊朗陌拜客户建立供应关系</li>
        </ul>
      </section>
      <section className="section">
        <h2>技能专长</h2>
        <ul>
          <li>英语CET-4/6，英语口语流利，普通话二甲</li>
          <li>熟练：Office办公、ERP、PS、数据分析</li>
          <li>擅长独立开发、维护客户，有展会与跨境电商运营经验</li>
        </ul>
      </section>
      <section className="section">
        <h2>教育背景</h2>
        <ul>
          <li>山西理工大学 英语本科 2017-2021</li>
          <li>POCIB外贸实训全国团队二等奖（20单贸易盈利500万+，熟悉完整外贸流程）</li>
        </ul>
      </section>
      <section className="section">
        <h2>联系方式</h2>
        <div className="contact-info">
          电话：<a href="tel:15222663585">15222663585</a><br/>
          邮箱：<a href="mailto:your-email@example.com">your-email@example.com</a><br/>
          地址：天津市意向工作（全国可出差）<br/>
          微信/LinkedIn：如有需求可补充
        </div>
      </section>
      <footer style={{marginTop:36,fontSize:'0.95em',color:'#7fa9ff'}}>© 2024 周楠 | Powered by React | 商务高级风格</footer>
    </div>
  );
}
export default App;
