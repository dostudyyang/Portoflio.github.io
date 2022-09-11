import React from 'react'
import { Modal } from 'antd'

export default class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            src: ''
        }
        this.showModal = this.showModal.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    showModal(e) {
        this.setState({
            visible: true,
            src: e.currentTarget.getAttribute("data-src") //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="contact-container">
                <h1 className="contact-title">Contact me</h1>
                <div className="contact-content">
                    <div className="contact-main">
                        <div className="main-item"
                        onClick={this.showModal}>
                            <div className="item-icon">
                                <i className="iconfont icon-contact"></i>
                            </div>
                            <div className="item-content">
                                phone: 437-348-3903
                            </div>
                        </div>
                      
                        <a className="main-item" href="https://github.com/dostudyyang" target="_blank">
                            <div className="item-icon">
                                <i className="iconfont icon-github"></i>
                            </div>
                            <div className="item-content">
                                Github: github.com/dostudyyang
                            </div>
                        </a>
                        
                        <a href="mailto:Yangvvva@my.yorku.ca" target="_blank" className="main-item">
                            <div className="item-icon">
                                <i className="iconfont icon-email"></i>
                            </div>
                            <div className="item-content">
                                Email: Yangvvva@my.yorku.ca
                            </div>
                        </a>

                        <div className="main-item"
                        data-src="https://github.com/dostudyyang/Book/blob/main/%E5%A4%B4%E5%83%8F2.png?raw=true"
                        onClick={this.showModal}>
                            <div className="item-icon">
                                <i className="iconfont icon-weixin"></i>
                            </div>
                            <div className="item-content">
                                WeChat: FZYS997
                            </div>
                        </div>
                    </div>
                    
                </div>
                 <Modal title="" footer="" width="30%"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <div className="big-img">
                        <img src={this.state.src} style={{ maxWidth: '100%' }} />
                    </div>
                </Modal>
            </div>
        )
    }
}
