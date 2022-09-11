import React from 'react'
import AboutItem from './AboutItem.js'

const Skill = () => {
    const skillArray = [
        { id: 0, styleName:'iconfont icon-html',title:'HTML5',desc:'Good Understanding in HTML/HTML5'},
        { id: 1, styleName:'iconfont icon-css',title:'CSS3',desc:'Good Understanding in the new features of CSS/CSS3 and familiar with Webapp development.'},
        { id: 2, styleName:'iconfont icon-javascript',title:'ES6/7',desc:'Master JS language underlying principles, master JS new standard ES6, ES7 grammar characteristics'},
        { id: 3, styleName:'iconfont icon-react',title:'React.js',desc:'Good use of React.js, master the development and packaging capabilities of React Router, Redux and other React technology stacks'},
        { id: 4, styleName:'iconfont icon-jquery',title:'Node.js',desc:'Good in Node.js client use and service development, and maintain a number of related open source projects.'},
        { id: 5, styleName:'iconfont icon-frame',title:'frameworks',desc:'Master the mainstream UI libraries and frameworks such as Bootstrap and Ant Design'},
        { id: 6, styleName:'iconfont icon-tools',title:'Organizing',desc:'Familiar with the implementation of front-end engineering in different front-end projects, and proficient in using Yarn, Webpack2, Git and other development tools'},
        { id: 7, styleName:'iconfont icon-Programming',title:'Team Work',desc:'completed many projects with partners'}
    ]
    return (
        <div className="skill-container">
            <h1 className="skill-title">Front-end Skills</h1>
            <div className="skill-content">
                {skillArray.map((message) => <AboutItem key={message.id} message={message} />)}
            </div>

        </div>
    )
}

export default Skill
